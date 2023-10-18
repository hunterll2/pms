<template>
    <div class="d-flex flex-column row-gap-5">
        <!-- ==================== Project Data ==================== -->
        <div class="card shadow">
            <div class="card-header py-3 d-flex">
                <h5 id="project_name" class="flex-fill">[project_name]</h5>

                <button id="btn_applyToProject" class="btn btn-success" data-not-signed-only>
                    <i class="fas fa-file-signature me-2"></i>
                    <span>Apply To This Project</span>
                </button>
                <button class="btn btn-success disabled" data-signed-only>
                    <i class="fas fa-file-signature me-2"></i>
                    <span>You Have Applied To This Project</span>
                </button>
            </div>

            <div class="card-body">
                <p id="project_description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum nulla facilis alias pariatur
                    eaque vitae non, corrupti iusto sed, eum ullam quod? Ex, veritatis quisquam eum ut fuga consequatur.
                </p>

                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Company Name</div>
                    <div id="project_company" class="col-md-3 col-6">[company_name]</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Project Duration (months)</div>
                    <div id="project_duration" class="col-md-3 col-6">[N] Months</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Total Project Cost</div>
                    <div id="project_cost" class="col-md-3 col-6">[N] SR</div>
                </div>

                <h5 class="mt-5 fw-normal">Project Documents</h5>
                <table class="table">
                    <tbody id="tbody_projectDocuments">
                        <tr>
                            <td class="w-100">%document_name%</td>
                            <td>
                                <a href="%document_url%" target="_blank" class="btn btn-sm btn-primary">Preview</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ==================== Project Status ==================== -->
        <div class="card shadow" data-signed-only>
            <h5 class="card-header">Status</h5>
            <div class="card-body">
                <!-- not paid -->
                <div id="div_alert_stoped" class="alert alert-danger" data-project-status-0>
                    <div class="progress mb-2">
                        <div class="progress-bar progress-bar-striped text-end pe-2 bg-danger" style="width:4%">0%
                        </div>
                    </div>

                    <div class="alert-text d-flex align-items-center pt-2">
                        <i class="fas fa-triangle-exclamation fs-4 me-3"></i>
                        <span>The working on the project currenlty is stopped. Please pay the required bills to continue
                            the
                            development.</span>
                    </div>
                </div>

                <!-- Paid -->
                <div id="div_alert_underProgress" class="alert alert-info d-none" data-project-status-1>
                    <div class="progress mb-2">
                        <div class="progress-bar progress-bar-striped progress-bar-animated text-end pe-2 bg-info"
                            style="width:75%">
                            75%
                        </div>
                    </div>

                    <div class="alert-text d-flex align-items-center pt-2">
                        <i class="fas fa-spinner fs-4 me-3"></i>
                        <span>All the required bills has been paid. The project currenlty under development.</span>
                    </div>
                </div>

                <!-- Done -->
                <div id="div_alert_done" class="alert alert-success d-none" data-project-status-2>
                    <div class="progress mb-2">
                        <div class="progress-bar text-end pe-2 bg-success" style="width:100%">
                            Done
                        </div>
                    </div>
                    <div class="alert-text d-flex align-items-center pt-2">
                        <i class="fas fa-check fs-4 me-3"></i>
                        <span>The project has been delivered to the customer.</span>
                    </div>
                </div>


                <h5 class="mt-5 mb-3 fw-normal">Contract Details</h5>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Contract Sign Date</div>
                    <div id="placeholder_contract_signDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Contract Expiry date</div>
                    <div id="placeholder_contract_expiryDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Date receiving the project</div>
                    <div id="placeholder_contract_doneDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                </div>
            </div>
        </div>

        <!-- ==================== Project Bills ==================== -->
        <div class="card shadow" data-signed-only>
            <h5 class="card-header py-3">Bill</h5>

            <div class="card-body">
                <div class="row">
                    <div class="col-md-9 col-6">Number of bills paid</div>
                    <div id="placeholder_bill_billsPaidCount" class="col-md-3 col-6">[N] Bill/s</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6">Number of bills remain</div>
                    <div id="placeholder_bill_billsRemainCount" class="col-md-3 col-6">[N] Bill/s</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6">Amount of bills paid</div>
                    <div id="placeholder_bill_billsPaidAmount" class="col-md-3 col-6">[N] SR</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6">Amount of bills remain</div>
                    <div id="placeholder_bill_billsRemainAmount" class="col-md-3 col-6">[N] SR</div>
                </div>

                <form id="form_billPayment" action="#" class="alert-form my-5">
                    <div class="row align-items-center">
                        <div class="col text-center">
                            <label class="form-label">Bill amount</label>
                            <div class="bill-amount fw-bold">1,000 SR</div>
                        </div>
                        <div class="col text-center">
                            <label class="form-label">Bill date</label>
                            <div class="bill-date fw-bold">2023-04-20</div>
                        </div>
                        <div class="col text-center">
                            <input type="submit" value="Pay Now" class="btn btn-lg btn-primary">
                        </div>
                    </div>
                </form>

                <h5 class="mt-4 fw-normal">Bill Documents</h5>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>Bill Number</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody_bills">
                        <tr>
                            <td>%bill_number%</td>
                            <td>%bill_date%</td>
                            <td>%bill_amount%</td>
                            <td>%bill_payDate%</td>
                            <td class="w-25 text-end">
                                <button class="btn btn-sm btn-primary" data-bill-number="%bill_number%">Pay Now</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { auth, storage } from "@/plugins/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { GetDoc, AddDoc, SetDoc } from "@/helpers/firestore";
import { Timestamp, addDoc, collection, setDoc } from "firebase/firestore";
import moment from "moment"

window.moment = moment

async function loadProjectDocuments(parentNode, projectId) {
    const storageRef = ref(storage, `${projectId}`)

    const placeHolderHtml = `
    <tr>
        <td>%document_name%</td>
        <td class="text-end">
            <a href="%document_url%" target="_blank" class="btn btn-sm btn-primary">Preview</a>
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

async function SignProjectContract(projectId, userId) {
    const project = await GetDoc(`projects/${projectId}`)

    // inilize contract
    const contract = {
        signDate: Timestamp.fromDate(moment().toDate()),
        receivingProjectDate: Timestamp.fromDate(moment().add(project.duration, "M").toDate()),
        expiryDate: Timestamp.fromDate(moment().add(Number(project.duration) + 6, "M").toDate())
    }

    // inilize bills
    const bills = []
    const monthlyPayment = (Number(project.cost) / Number(project.duration)).toFixed(2)
    for (let i = 0; i < Number(project.duration); i++) {
        const bill = {
            number: i + 1,
            amount: Number(monthlyPayment),
            date: moment().add(i, "M").toDate()
        }
        bills.push(bill)
    }

    try {
        await SetDoc(`projects/${projectId}/signers/${userId}`, contract)

        // set bills
        for (const bill of bills)
            await AddDoc(`projects/${projectId}/signers/${userId}/bills`, bill)
    } catch (error) {
        console.error(error);
    }
}

export default {
    async mounted() {
        // before check if user is signed the current project or not, make sure all only-signed elements are hidden
        for (const el of document.querySelectorAll("[data-signed-only]"))
            el.classList.add("d-none")

        // Load project data
        const urlParams = new URLSearchParams(location.search)
        const projectId = urlParams.get("id")

        window.loading(true)
        const project = await GetDoc(`projects/${projectId}`)
        console.log(project.id);
        window.loading(false)

        document.querySelector("#project_name").textContent = project.name
        document.querySelector("#project_company").textContent = project.company
        document.querySelector("#project_duration").textContent = project.duration
        document.querySelector("#project_cost").textContent = project.cost
        document.querySelector("#project_description").textContent = project.description ? project.description : ""

        const tbody_projectDocuments = document.querySelector("#tbody_projectDocuments")
        window.loading(true, "Loading project documents...")
        // await loadProjectDocuments(tbody_projectDocuments, projectId)
        window.loading(false)

        // apply button
        const btn_applyToProject = document.querySelector("#btn_applyToProject")
        if (btn_applyToProject) {
            btn_applyToProject.addEventListener("click", async e => {
                window.loading(true)
                await SignProjectContract(projectId, auth.currentUser.uid)
                location.reload()
            })
        }
    }
}
</script>