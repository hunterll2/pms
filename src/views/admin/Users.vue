<template>
    <div class="card">
        <div class="card-header py-3 d-flex justify-content-between">
            <h5>Manage Users</h5>
            <div class="spinner-border text-primary d-none" id=""></div>
        </div>
        <div class="card-body">
            <table class="table table-hover table-striped align-middle">
                <thead class="">
                    <tr>
                        <th>Email</th>
                        <th class="text-end"></th>
                    </tr>
                </thead>
                <tbody id="tbody_parentNode">

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { db } from "@/plugins/Firebase"
import { collection, getDocs, query, updateDoc, doc, getDoc } from 'firebase/firestore';

async function loadUsers(parentNode, usersQuery) {
    const placeHolderHtml = `
    <tr>
        <td>%email%</td>
        <td class="text-end">
            %options%
        </td>
    </tr>
    `

    const setAsAdminBtn = "<button type='button' class='btn btn-sm btn-primary' data-user-id='%uid%'>Set As Admin</button>"
    const setAsUserBtn = "<button type='button' class='btn btn-sm btn-secondary' data-user-id='%uid%'>Set As User</button>"

    //
    const usersSnapshot = await getDocs(usersQuery)

    let child = parentNode.firstElementChild
    while(child) {
        child.remove()
        child = parentNode.firstElementChild
    }

    for (let doc of usersSnapshot.docs) {
        const user = doc.data()

        let html = placeHolderHtml.replace("%email%", user.email)
        if (user.isAdmin) {
            html = html.replace("%options%", setAsUserBtn.replace("%uid%", doc.id))
        } else {
            html = html.replace("%options%", setAsAdminBtn.replace("%uid%", doc.id))
        }
        parentNode.insertAdjacentHTML("afterbegin", html)
    }
}

export default {
    async mounted() {
        document.querySelector(".spinner-border").classList.remove("d-none")

        const parentNode = document.querySelector("#tbody_parentNode")
        const usersCollectionRef = collection(db, "users")
        const usersQuery = query(usersCollectionRef)
        
        await loadUsers(parentNode, usersQuery)

        document.querySelector(".spinner-border").classList.add("d-none")

        parentNode.addEventListener("click", async e => {
            if (e.target.tagName !== "BUTTON") return

            document.querySelector(".spinner-border").classList.remove("d-none")

            const btn = e.target

            const docRef = doc(db, `users/${btn.dataset.userId}`)
            const docSnapshot = await getDoc(docRef)
            const user = docSnapshot.data()

            await updateDoc(docRef, {
                isAdmin: !user.isAdmin
            })

            await loadUsers(parentNode, usersQuery)

            document.querySelector(".spinner-border").classList.add("d-none")
        })
    }
}
</script>