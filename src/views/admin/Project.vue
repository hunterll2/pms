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
                </div>

                <h2 class="h6 mt-3">Project Documents</h2>

                <label for="input_uploadDocument" class="form-label">Upload document</label>
                <div class="input-group">
                    <input type="file" name="input_uploadDocument" id="input_uploadDocument" class="form-control"
                        accept=".pdf">
                    <button class="btn btn-success">Upload</button>
                </div>

                <table class="table table-striped mt-3">
                    <tbody>
                        <tr>
                            <td>[document_name]</td>
                            <td class="text-end">
                                <button class="btn btn-sm btn-primary">Preview</button>
                                <button class="btn btn-sm btn-danger ms-1">Remove</button>
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
import { db } from "@/plugins/Firebase"
import { collection, getDocs, updateDoc, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { FirebaseError } from "firebase/app";

function loadProject(form, project) {
    form.name.value = project.name
    form.company.value = project.company
    form.duration.value = project.duration
    form.cost.value = project.cost
    form.description.value = project.description ? project.description : ""
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

export default {
    async mounted() {
        window.loading(true)

        const urlParams = new URLSearchParams(location.search)
        const projectId = urlParams.get("id")

        const projectDocRef = doc(db, `projects/${projectId}`)
        const projectSnapshot = await getDoc(projectDocRef)
        const project = projectSnapshot.data()

        document.querySelector("h5").textContent = `Manage ${project.name}`

        const form = document.querySelector("form")

        loadProject(form, project)

        form.addEventListener("submit", async e => {
            e.preventDefault()

            window.loading(true)
            try {
                await updateDoc(projectDocRef, {
                    name: form.name.value,
                    company: form.company.value,
                    duration: Number(form.duration.value),
                    cost: Number(form.cost.value),
                    description: form.description.value,
                })

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

        window.loading(false)
    }
}
</script>