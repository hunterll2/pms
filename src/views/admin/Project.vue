<template>
    <div class="card">
        <h5 class="card-header py-3">Manage [project_name]</h5>
        <form action="#">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <label for="name" class="form-label">Project Name</label>
                        <input type="text" id="name" class="form-control" required>
                    </div>
                    <div class="col-3">
                        <label for="company" class="form-label">Company</label>
                        <input type="text" id="company" class="form-control" required>
                    </div>
                    <div class="col-3">
                        <label for="duration" class="form-label">Duration (months)</label>
                        <div class="input-group">
                            <input type="number" id="duration" class="form-control" required>
                            <span class="input-group-text">Months</span>
                        </div>
                    </div>
                    <div class="col-3">
                        <label for="cost" class="form-label">Total Cost</label>
                        <div class="input-group">
                            <input type="number" id="cost" class="form-control" required>
                            <span class="input-group-text">SR</span>
                        </div>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="description" class="form-label">Project description</label>
                        <textarea name="description" id="description" rows="10" class="form-control"></textarea>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="image" class="form-label">Project Imae</label>
                        <input type="file" name="image" id="image" class="form-control" accept=".jpg,.jpeg,.png">
                    </div>
                    <div id="div_projectImage" class="col-12 mt-2 d-none">
                        <img src="" alt="Project image" class="w-25" />
                    </div>
                </div>

                <h2 class="h6 mt-3">Project Documents</h2>

                <label for="input_uploadDocument" class="form-label">Upload document</label>
                <div class="input-group">
                    <input type="file" name="input_uploadDocument" id="input_uploadDocument" class="form-control"
                        accept=".pdf">
                    <button type="button" class="btn btn-success" id="button_uploadDocument">Upload</button>
                </div>

                <div class="progress mt-2" id="div_uploadDocument_progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 0%">0%
                    </div>
                </div>

                <table class="table table-striped mt-3">
                    <tbody id="tbody_documents_parentNode">
                        <tr>
                            <td>[document_name]</td>
                            <td class="text-end">
                                <a class="btn btn-sm btn-primary">Preview</a>
                                <button type="button" class="btn btn-sm btn-danger ms-1">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-body">
                <div class="alert alert-info d-flex align-items-center d-none">
                    <i class="fas fa-info fs-4 me-3"></i>
                    <span>Alert content goes here</span>
                </div>
            </div>

            <div class="card-footer d-flex">
                <a href="/admin/projects" class="btn btn-secondary">
                    <i class="fas fa-angle-left me-2"></i>Back
                </a>
                <input type="submit" value="Save Changes" class="btn btn-success ms-auto">
            </div>
        </form>
    </div>
</template>

<script>
import { db, storage } from "@/plugins/Firebase"
import { collection, getDocs, updateDoc, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { FirebaseError } from "firebase/app";
import { ref, uploadBytes, uploadBytesResumable, listAll, getDownloadURL, deleteObject } from "firebase/storage";

function bindProject(form, project) {
    form.name.value = project.name
    form.company.value = project.company
    form.duration.value = project.duration
    form.cost.value = project.cost
    form.description.value = project.description ? project.description : ""

    const div_projectImage = document.querySelector("#div_projectImage")
    const img_projectImage = div_projectImage.querySelector("img")

    if (project.imageUrl) {
        div_projectImage.classList.remove("d-none")
        img_projectImage.src = project.imageUrl
    }
}

function DisplayAlert(type, message) {
    const div_alert = document.querySelector(".alert")

    div_alert.className = `alert alert-${type} d-flex align-items-center`
    div_alert.querySelector("span").textContent = message

    let icon
    switch (type) {
        case "success":
            icon = "check"
            break
        case "danger":
            icon = "triangle-exclamation"
            break
        default:
            icon = "info"
    }

    div_alert.querySelector("i").className = `fas fa-${icon} fs-4 me-3`
}

async function loadProjectDocuments(parentNode, projectId) {
    const storageRef = ref(storage, `${projectId}`)

    const placeHolderHtml = `
    <tr>
        <td>%document_name%</td>
        <td class="text-end">
            <a href="%document_url%" target="_blank" class="btn btn-sm btn-primary">Preview</a>
            <button type="button" class="btn btn-sm btn-danger ms-1" data-doc-name="%document_name%">Remove</button>
        </td>
    </tr>
    `

    //
    const listResult = await listAll(storageRef)
    const items = []
    for (const itemRef of listResult.items) {
        if (itemRef.name === "image") continue

        const downloadUrl = await getDownloadURL(itemRef)
        items.push({
            name: itemRef.name,
            url: downloadUrl
        })
    }

    let child = parentNode.firstElementChild
    while (child) {
        child.remove()
        child = parentNode.firstElementChild
    }

    for (let item of items) {
        let html = placeHolderHtml.replaceAll("%document_name%", item.name)
        html = html.replace("%document_url%", item.url)

        parentNode.insertAdjacentHTML("afterbegin", html)
    }
}

async function uploadDocument(projectId, file, progressBar) {
    const storageRef = ref(storage, `${projectId}/${file.name}`)

    const uploadTask = uploadBytesResumable(storageRef, file)

    return new Promise((resolve, reject) => {
        uploadTask.on("state_changed", (snapshot) => {
            const progess = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            progressBar.style.width = progess <= 0 ? "5%" : `${progess}%`
            progressBar.textContent = `${progess}%`
        }, error => {
            reject(error.message)
        }, () => {
            resolve("File uploaded successfuly.")
        })

    })
}

async function deleteDocument(projectId, fileName) {
    const storageRef = ref(storage, `${projectId}/${fileName}`)
    await deleteObject(storageRef)
}

async function uploadProjectImage(projectId, file) {
    const imageRef = ref(storage, `${projectId}/image`)
    await uploadBytes(imageRef, file)
    const imageUrl = await getDownloadURL(imageRef)
    return imageUrl
}

export default {
    async mounted() {

        const urlParams = new URLSearchParams(location.search)
        const projectId = urlParams.get("id")

        const projectDocRef = doc(db, `projects/${projectId}`)
        window.loading(true)
        const projectSnapshot = await getDoc(projectDocRef)
        window.loading(false)
        const project = projectSnapshot.data()

        document.querySelector("h5").textContent = `Manage ${project.name}`

        const form = document.querySelector("form")

        bindProject(form, project)

        form.addEventListener("submit", async e => {
            e.preventDefault()

            window.loading(true)

            // if suer choose image, upload it and then get its url
            const projectImageFile = form.image.files[0]
            let imageUrl = undefined
            if (projectImageFile) {
                if (!["image/jpg", "image/jpeg", "image/png"].includes(projectImageFile.type)) {
                    DisplayAlert("danger", "Project image must be jpg, jpeg, or png only.")
                    window.loading(false)
                    return
                }
                if ((projectImageFile.size / 1024) > 256) {
                    DisplayAlert("danger", "Project image size must be less than 256kb.")
                    window.loading(false)
                    return
                }
                imageUrl = await uploadProjectImage(projectId, projectImageFile)
            }

            try {
                const updateObject = {
                    name: form.name.value,
                    company: form.company.value,
                    duration: Number(form.duration.value),
                    cost: Number(form.cost.value),
                    description: form.description.value,
                }

                if (imageUrl)
                    updateObject.imageUrl = imageUrl

                await updateDoc(projectDocRef, updateObject)

                DisplayAlert("success", "The changes has been saved successfuly.")
            } catch (error) {
                if (!(error instanceof FirebaseError)) {
                    DisplayAlert("danger", "An error has been occured in the system. Please try again later.")
                    throw error
                }
                console.error(error);
                DisplayAlert("danger", "An error has been occured while update the project. Please try again later.")
            } finally {
                window.loading(false)
            }
        })


        // # Documents Uploads
        const projectDocumentsParentNode = document.querySelector("#tbody_documents_parentNode")

        window.loading(true, "Loading porject documents")
        await loadProjectDocuments(projectDocumentsParentNode, projectSnapshot.id)
        window.loading(false)

        projectDocumentsParentNode.addEventListener("click", async e => {
            if (e.target.type !== "button") return
            window.loading(true)
            await deleteDocument(projectSnapshot.id, e.target.dataset.docName)
            await loadProjectDocuments(projectDocumentsParentNode, projectSnapshot.id)
            window.loading(false)
        })

        const progressBar = document.querySelector("#div_uploadDocument_progress").querySelector(".progress-bar")
        form.button_uploadDocument.addEventListener("click", async e => {
            const file = form.input_uploadDocument.files[0]

            if (file === undefined) return

            if (file.type !== "application/pdf") {
                DisplayAlert("danger", "Select only PDF files.")
                return
            }

            if ((file.size / 1024) > 1024) {
                DisplayAlert("danger", "File can't be larger than 1MB.")
                return
            }

            try {
                const successMessage = await uploadDocument(projectSnapshot.id, form.input_uploadDocument.files[0], progressBar)
                DisplayAlert("success", successMessage)
            } catch (error) {
                DisplayAlert("danger", error)
            }

            progressBar.style.width = "0%"
        })
    }
}
</script>