<template>
    <div class="d-flex flex-column row-gap-5">
        <!-- Placeholder Card -->
        <div class="card shadow placeholder-glow" data-placeholder>
            <div class="card-header py-3 d-flex">
                <h5 class="placeholder col-4 me-auto"></h5>
                <button class="btn placeholder col-2"></button>
            </div>

            <div class="card-body">
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>

                <div class="row">
                    <div class="col-md-9 col-6"><span class="placeholder col-8"></span></div>
                    <div class="col-md-3 col-6"><span class="placeholder col-8"></span></div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6"><span class="placeholder col-8"></span></div>
                    <div class="col-md-3 col-6"><span class="placeholder col-8"></span></div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6"><span class="placeholder col-8"></span></div>
                    <div class="col-md-3 col-6"><span class="placeholder col-8"></span></div>
                </div>
                <hr class="text-muted">

                <h5 class="mt-5 fw-normal placeholder col-4"></h5>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                <span class="placeholder col-8"></span>
                            </td>
                            <td class="text-end">
                                <a href="#" target="_blank" class="btn btn-sm placeholder col-2"></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ==================== Project Data ==================== -->
        <div class="card shadow">
            <div class="card-header py-3 d-flex">
                <h5 id="project_name" class="flex-fill">[project_name]</h5>

                <button id="btn_applyToProject" class="btn btn-success" data-not-signed-only>
                    <i class="fas fa-file-signature me-2"></i>
                    <span>Apply To This Project</span>
                </button>

                <button class="btn btn-danger me-2" data-signed-only>
                    <i class="fas fa-times me-2"></i>
                    <span>Request cancelation</span>
                </button>
                <button class="btn btn-info" data-signed-only data-bs-toggle="modal"
                    data-bs-target="#div_modal_customRequest">
                    <i class="fas fa-edit"></i>
                    <span>Request custom edit</span>
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
                <div id="div_alert_stoped" class="alert alert-danger d-none" data-project-status-0>
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
                    <div id="contract_signDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Contract Expiry date</div>
                    <div id="contract_expiryDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6 fw-bold">Date receiving the project</div>
                    <div id="contract_doneDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                </div>

                <!-- custom edits -->
                <div class="">
                    <div class="d-flex justify-content-between align-items-center mt-5 mb-3">
                        <h5 class="fw-normal">Custom requests</h5>
                        <button type="button" class="btn btn-link">Display Details</button>
                    </div>
                    <hr class="text-muted">
                    <div class="row">
                        <div class="col-md-9 col-6 fw-bold">Number of custom requests</div>
                        <div id="contract_signDate" class="col-md-3 col-6">3</div>
                    </div>
                    <hr class="text-muted">
                    <div class="row">
                        <div class="col-md-9 col-6 fw-bold">Increase of cost</div>
                        <div id="contract_signDate" class="col-md-3 col-6">600 SR</div>
                    </div>
                    <hr class="text-muted">
                    <div class="row">
                        <div class="col-md-9 col-6 fw-bold">Increase of time</div>
                        <div id="contract_signDate" class="col-md-3 col-6">1 Month</div>
                    </div>

                    <h5 class="mt-5 mb-3 fw-normal">Edited contract</h5>
                    <hr class="text-muted">
                    <div class="row">
                        <div class="col-md-9 col-6 fw-bold">Total Cost</div>
                        <div id="contract_signDate" class="col-md-3 col-6">2,600 SR</div>
                    </div>
                    <hr class="text-muted">
                    <div class="row">
                        <div class="col-md-9 col-6 fw-bold">Date receiving the project</div>
                        <div id="contract_signDate" class="col-md-3 col-6">yyyy/MM/dd</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==================== Project Bills ==================== -->
        <div class="card shadow" data-signed-only>
            <h5 class="card-header py-3">Bill</h5>

            <div class="card-body">
                <div class="row">
                    <div class="col-md-9 col-6">Number of bills paid</div>
                    <div id="bill_billsPaidCount" class="col-md-3 col-6">[N] Bill/s</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6">Number of bills remain</div>
                    <div id="bill_billsRemainCount" class="col-md-3 col-6">[N] Bill/s</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6">Amount of bills paid</div>
                    <div id="bill_billsPaidAmount" class="col-md-3 col-6">[N] SR</div>
                </div>
                <hr class="text-muted">
                <div class="row">
                    <div class="col-md-9 col-6">Amount of bills remain</div>
                    <div id="bill_billsRemainAmount" class="col-md-3 col-6">[N] SR</div>
                </div>

                <form id="form_billPayment" action="#" class="alert alert-light shadow my-5">
                    <div class="row align-items-center">
                        <div class="col text-center">
                            <label class="form-label">Bill number</label>
                            <br>
                            <input type="text" name="number" id="number" class="form-control text-center fw-bold" value="1"
                                readonly>
                        </div>
                        <div class="col text-center">
                            <label class="form-label">Bill amount</label>
                            <br>
                            <input type="text" name="amount" id="amount" class="form-control text-center fw-bold"
                                value="1,000 SR" readonly>
                        </div>
                        <div class="col text-center">
                            <label class="form-label">Bill date</label>
                            <br>
                            <input type="text" name="date" id="date" class="form-control text-center fw-bold"
                                value="2023-04-20" readonly>
                        </div>
                        <input type="hidden" name="id">
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ==================== Credit Card Payment Modal ==================== -->
        <div class="modal" id="div_modal_creditCardPayment" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title fs-5 fw-bold">Payment</div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form action="#" id="modal_creditCardPayment_form" novalidate>
                        <div class="modal-body d-flex flex-column row-gap-3">
                            <div>
                                <label for="nameOnCard" class="form-label">Name on card</label>
                                <input type="text" id="nameOnCard" name="nameOnCard" class="form-control" required>
                            </div>
                            <div>
                                <label for="cardNumber" class="form-label">Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber" class="form-control"
                                    placeholder="xxxx xxxx xxxx xxxx" minlength="16" maxlength="16" required>
                            </div>
                            <div>
                                <label for="cardExpirationDate" class="form-label">Expiration date</label>
                                <input type="date" id="cardExpirationDate" name="cardExpirationDate" class="form-control"
                                    required>
                            </div>
                            <div>
                                <label for="cardSecurityNumber" class="form-label">CVV/CVC</label>
                                <input type="text" id="cardSecurityNumber" name="cardSecurityNumber" class="form-control"
                                    placeholder="xxx" minlength="3" maxlength="3" required>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-between">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-success" id="submitBtn">
                                <span class="spinner-border spinner-border-sm d-none"></span>
                                Pay Bill <b></b>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- ==================== Credit Card Payment Modal ==================== -->
        <div class="modal fade" id="div_modal_customRequest" data-bs-backdrop="static"
            data-bs-keyboard="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title fs-5 fw-bold">Custom Reqeust</div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form action="#" id="modal_customRequest_form" novalidate>
                        <div class="modal-body d-flex flex-column row-gap-3">
                            <div class="d-flex">
                                <i class="fas fa-user fs-1 text-secondary me-3"></i>
                                <div class="bg-success-subtle border p-3 rounded-end shadow-sm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis doloremque, quae
                                    adipisci in corporis, iure non voluptatibus quibusdam itaque quas hic sequi delectus ea
                                    ullam eos accusamus reiciendis praesentium aut.
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="bg-primary-subtle border p-3 rounded-start shadow-sm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis doloremque, quae
                                    adipisci in corporis, iure non voluptatibus quibusdam itaque quas hic sequi delectus ea
                                    ullam eos accusamus reiciendis praesentium aut.
                                </div>
                                <i class="fas fa-user fs-1 text-secondary ms-3"></i>
                            </div>

                            <div>
                                <div class="bg-warning-subtle border p-3 rounded w-100 shadow-sm">
                                    <p>
                                        Wolud you like to apply the requested edit for <span
                                            class="text-success fw-bold">+300 SR</span> increase in project cost?
                                        And if so, it will extened the project duration by <span
                                            class="text-success fw-bold">+14 Days</span>.
                                    </p>
                                    <div class="input-group d-flex justify-content-center">
                                        <button type="button" class="btn btn-danger disabled">Decline</button>
                                        <button type="button" class="btn btn-primary px-4 fw-bold disabled">Accept</button>
                                    </div>
                                </div>
                            </div>
                            <h6 class="text-danger">Offer Declined</h6>


                            <div>
                                <div class="bg-warning-subtle border p-3 rounded w-100 shadow-sm">
                                    <p>
                                        Wolud you like to apply the requested edit for <span
                                            class="text-success fw-bold">+300 SR</span> increase in project cost?
                                        And if so, it will extened the project duration by <span
                                            class="text-success fw-bold">+14 Days</span>.
                                    </p>
                                    <div class="input-group d-flex justify-content-center">
                                        <button type="button" class="btn btn-danger disabled">Decline</button>
                                        <button type="button" class="btn btn-primary px-4 fw-bold disabled">Accept</button>
                                    </div>
                                </div>
                            </div>
                            <h6 class="text-success">Offer Accepted</h6>
                        </div>
                        <div class="modal-footer">
                            <div class="input-group">
                                <textarea name="text" id="text" rows="1" class="form-control"></textarea>
                                <button type="submit" class="btn btn-success" id="submitBtn">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { auth, storage } from "@/plugins/firebase";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Timestamp } from "firebase/firestore";

import { GetDoc, GetDocs, AddDoc, SetDoc, UpdateDoc } from "@/helpers/firestore";
import { InsertChildrenIntoParentElement } from "@/helpers/DOM";
import { GetDateString, GetCurrency } from "@/helpers/common";

import moment from "moment"

// bind project data

function setProjectDetails(project) {
    const { name, company, duration, cost, description } = project

    document.querySelector("#project_name").textContent = name
    document.querySelector("#project_company").textContent = company
    document.querySelector("#project_duration").textContent = duration + " Month/s"
    document.querySelector("#project_cost").textContent = GetCurrency(cost)
    document.querySelector("#project_description").textContent = description ? description : ""
}

async function setProjectDocuments(parentNodeId, projectId) {
    const storageRef = ref(storage, `${projectId}`)

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

    InsertChildrenIntoParentElement(parentNodeId, items, (placeholderHtml, child) => {
        placeholderHtml = placeholderHtml.replaceAll("%document_name%", child.name)
        placeholderHtml = placeholderHtml.replaceAll("%document_url%", child.url)
        return placeholderHtml
    })
}

async function SetProjectContractDetails(projectId, userId) {
    const userProjectContract = await GetDoc(`projects/${projectId}/signers/${userId}`)
    const { signDate, receivingProjectDate, expiryDate } = userProjectContract
    document.querySelector("#contract_signDate").textContent = GetDateString(signDate.toDate())
    document.querySelector("#contract_doneDate").textContent = GetDateString(receivingProjectDate.toDate())
    document.querySelector("#contract_expiryDate").textContent = GetDateString(expiryDate.toDate())
}

async function SetProjectBillsDetails(projectId, userId) {
    const bills = await GetDocs(`projects/${projectId}/signers/${userId}/bills`)

    const unpaidBills = bills.filter(bill => bill.payDate === undefined)
    const unpaidBillsAmount = unpaidBills.reduce((pre, cur) => pre + cur.amount, 0)

    const paidBills = bills.filter(bill => bill.payDate !== undefined)
    const paidBillsAmount = paidBills.reduce((pre, cur) => pre + cur.amount, 0)

    const lateUnpaidBills = unpaidBills.filter(bill => moment(bill.date.toDate()).isBefore(new Date()))

    // bind bills summery details
    document.querySelector("#bill_billsPaidCount").textContent = paidBills.length + " bill/s"
    document.querySelector("#bill_billsRemainCount").textContent = unpaidBills.length + " bill/s"

    document.querySelector("#bill_billsPaidAmount").textContent = GetCurrency(paidBillsAmount)
    document.querySelector("#bill_billsRemainAmount").textContent = GetCurrency(unpaidBillsAmount)

    // if there's late bill, bind the bill payment form, otherwise remove it
    const firstUnpaidBill = lateUnpaidBills[0]
    const form_billPayment = document.querySelector("#form_billPayment")
    if (firstUnpaidBill) {
        form_billPayment.number.value = firstUnpaidBill.number
        form_billPayment.amount.value = GetCurrency(firstUnpaidBill.amount)
        form_billPayment.date.value = GetDateString(firstUnpaidBill.date.toDate())
        form_billPayment.id.value = firstUnpaidBill.id
    } else {
        form_billPayment.remove()
    }

    // bind the paid bills
    paidBills.sort((a, b) => b.number - a.number)
    InsertChildrenIntoParentElement("tbody_bills", paidBills, (placeholderHtml, child) => {
        placeholderHtml = placeholderHtml.replaceAll("%bill_number%", child.number)
        placeholderHtml = placeholderHtml.replaceAll("%bill_date%", GetDateString(child.date.toDate()))
        placeholderHtml = placeholderHtml.replaceAll("%bill_amount%", GetCurrency(child.amount))
        placeholderHtml = placeholderHtml.replaceAll("%bill_payDate%", GetDateString(child.payDate.toDate()))
        return placeholderHtml
    })
}

async function SetProjectStatus(projectId, userId) {
    const userProjectContract = await GetDoc(`projects/${projectId}/signers/${userId}`)
    const bills = await GetDocs(`projects/${projectId}/signers/${userId}/bills`)

    const unpaidBills = bills.filter(bill => bill.payDate === undefined)
    const paidBills = bills.filter(bill => bill.payDate !== undefined)
    const lateUnpaidBills = unpaidBills.filter(bill => moment(bill.date.toDate()).isBefore(new Date()))

    // calc progress
    const { signDate, receivingProjectDate } = userProjectContract
    const diffFromSignDate = moment(receivingProjectDate.toDate()).diff(signDate.toDate(), "d") // can be project duration in days also
    let diffFromNow = moment(receivingProjectDate.toDate()).diff(new Date(), "d")
    diffFromNow = diffFromNow < 0 ? 0 : diffFromNow

    const timePercentage = ((diffFromSignDate - diffFromNow) / diffFromSignDate) * 50
    const billsPercentage = (paidBills.length / bills.length) * 50
    const progress = Math.floor(timePercentage + billsPercentage)

    let status = 2
    // there's late bills ? then project in "stop" state (0)
    if (lateUnpaidBills.length > 0) {
        status = 0
    }
    // there's still unpaid bills ? then project in "in progress" state (1)
    else if (unpaidBills.length > 0) {
        status = 1
    }

    document.querySelector(`[data-project-status-${status}]`).classList.remove("d-none")
    document.querySelector(`[data-project-status-${status}] .progress-bar`).style.width = (progress < 5 ? 5 : progress) + "%"
    document.querySelector(`[data-project-status-${status}] .progress-bar`).textContent = progress + "%"
}

// opeartions

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
    const monthlyPayment = Number(project.cost) / Number(project.duration)
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
        window.loading(true, "Loading...", true)

        // Load project data
        const urlParams = new URLSearchParams(location.search)
        const projectId = urlParams.get("id")

        const project = await GetDoc(`projects/${projectId}`)

        setProjectDetails(project)

        window.loading(true, "Loading project documents...")
        await setProjectDocuments("tbody_projectDocuments", projectId)

        // # check if user already sign the contract of the project or not
        window.loading(true, "checking user status...")
        let isCurrentUserSignedTheProject = await GetDoc(`projects/${projectId}/signers/${auth.currentUser.uid}`) !== null

        const onlySignedElements = document.querySelectorAll("[data-signed-only]")
        const onlyNotSignedElements = document.querySelectorAll("[data-not-signed-only]")

        if (isCurrentUserSignedTheProject) {
            for (const element of onlyNotSignedElements) element.remove()

            window.loading(true, "Loading project contract...")
            await SetProjectStatus(projectId, auth.currentUser.uid)
            await SetProjectContractDetails(projectId, auth.currentUser.uid)
            await SetProjectBillsDetails(projectId, auth.currentUser.uid)
        } else {
            for (const element of onlySignedElements) element.remove()
        }

        // apply button
        const btn_applyToProject = document.querySelector("#btn_applyToProject")
        if (btn_applyToProject) {
            btn_applyToProject.addEventListener("click", async e => {
                window.loading(true, "Signing project contract...")
                await SignProjectContract(projectId, auth.currentUser.uid)
                location.reload()
            })
        }

        // pay late bills
        const form_billPayment = document.querySelector("#form_billPayment")
        if (form_billPayment) {
            form_billPayment.addEventListener("submit", e => {
                e.preventDefault()

                const creditCardPaymentModal = new bootstrap.Modal('#div_modal_creditCardPayment')
                const billAmountRef = creditCardPaymentModal._element.querySelector("form [type='submit'] b")

                billAmountRef.textContent = form_billPayment.amount.value

                creditCardPaymentModal.show()
            })

            const creditCardPaymentForm = document.querySelector("#div_modal_creditCardPayment form")
            creditCardPaymentForm.addEventListener("submit", async e => {
                e.preventDefault()
                const { id, number, amount, date } = form_billPayment

                creditCardPaymentForm.submitBtn.disabled = true
                creditCardPaymentForm.submitBtn.querySelector(".spinner-border").classList.remove("d-none")

                await UpdateDoc(`projects/${projectId}/signers/${auth.currentUser.uid}/bills/${id.value}`, {
                    payDate: new Date()
                })

                location.reload()
            })
        }

        // end loading
        window.loading(false)
    }
}
</script>