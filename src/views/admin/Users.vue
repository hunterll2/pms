<template>
    <div class="card">
        <h5 class="card-header py-3">Manage Users</h5>
        <div class="card-body">
            <table class="table table-hover table-striped align-middle">
                <thead class="">
                    <tr>
                        <th>Email</th>
                        <th class="text-end">Is Admin ?</th>
                    </tr>
                </thead>
                <tbody id="tbody_parentNode">
                    <!-- <tr>
                        <td>%email%</td>
                        <td class="d-flex justify-content-end">
                            <div class="form-check form-switch">
                                <input type="checkbox" class="form-check-input" checked>
                            </div>
                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { db } from "@/plugins/Firebase"
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';

async function loadUsers(parentNode, usersCollectionRef) {
    const placeHolderHtml = `
    <tr>
        <td>%email%</td>
        <td class="d-flex justify-content-end">
            %options%
        </td>
    </tr>
    `

    const switchElement = `
        <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" data-user-id='%uid%' checked>
        </div>
    `

    //
    const usersSnapshot = await getDocs(usersCollectionRef)

    let child = parentNode.firstElementChild
    while (child) {
        child.remove()
        child = parentNode.firstElementChild
    }

    for (let doc of usersSnapshot.docs) {
        const user = doc.data()

        let html = placeHolderHtml.replace("%email%", user.email)

        let switchElementHtml = switchElement.replace("%uid%", doc.id).replace("checked", user.isAdmin ? "checked" : "")
        html = html.replace("%options%", switchElementHtml)

        parentNode.insertAdjacentHTML("afterbegin", html)
    }
}

export default {
    async mounted() {
        window.loading(true)

        const parentNode = document.querySelector("#tbody_parentNode")
        const usersCollectionRef = collection(db, "users")

        await loadUsers(parentNode, usersCollectionRef)

        window.loading(false)

        parentNode.addEventListener("click", async e => {
            if (e.target.type !== "checkbox") return

            window.loading(true)

            const btn = e.target

            btn.disabled = true

            const docRef = doc(db, `users/${btn.dataset.userId}`)
            const docSnapshot = await getDoc(docRef)
            const user = docSnapshot.data()

            await updateDoc(docRef, {
                isAdmin: !user.isAdmin
            })

            await loadUsers(parentNode, usersCollectionRef)

            window.loading(false)
        })
    }
}
</script>