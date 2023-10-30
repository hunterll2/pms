<template>
    <div class="card">
        <h5 class="card-header py-3">Signed Projects</h5>
        <div class="card-body">
            <table class="table table-hover table-striped align-middle">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Company Name</th>
                        <th>Duration (months)</th>
                        <th>Total Cost</th>
                        <th>Total Paid</th>
                        <th>Total Remain</th>
                        <th width="200"></th>
                    </tr>
                </thead>
                <tbody class="placeholder-glow" data-placeholder>
                    <tr>
                        <td>
                            <span class="placeholder col-12"></span>
                        </td>
                        <td>
                            <span class="placeholder col-12"></span>
                        </td>
                        <td>
                            <span class="placeholder col-12"></span>
                        </td>
                        <td>
                            <span class="placeholder col-12"></span>
                        </td>
                        <td>
                            <span class="placeholder col-12"></span>
                        </td>
                        <td>
                            <span class="placeholder col-12"></span>
                        </td>
                        <td class="text-end">
                            <a href="#" class="btn btn-sm placeholder col-6"></a>
                        </td>
                    </tr>
                </tbody>
                <tbody id="tbody_signedProjects">
                    <tr>
                        <td>%project_name%</td>
                        <td>%project_company%</td>
                        <td>%project_duration%</td>
                        <td>%project_cost%</td>
                        <td>%project_amountPaid%</td>
                        <td>%project_amountRemain%</td>
                        <td class="text-end">
                            <div class="input-group justify-content-end">
                                <a href="/project?id=%project_id%" class="btn btn-sm btn-primary">
                                    <i class="fas fa-eye me-1"></i>
                                    View
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { GetDoc, GetDocs, AddDoc, SetDoc } from "@/helpers/firestore";
import { InsertChildrenIntoParentElement } from "@/helpers/DOM";
import { GetDateString, GetCurrency } from "@/helpers/common";

async function GetProjectBills(projectId, userId) {
    const bills = await GetDocs(`projects/${projectId}/signers/${userId}/bills`)
    return bills
}

function GetBillsStats(bills) {
    const paidBills = bills.filter(bill => bill.payDate !== undefined)
    const paidBillsAmount = paidBills.reduce((pre, cur) => pre + cur.amount, 0)

    const unpaidBills = bills.filter(bill => bill.payDate === undefined)
    const unpaidBillsAmount = unpaidBills.reduce((pre, cur) => pre + cur.amount, 0)

    return [paidBillsAmount, unpaidBillsAmount]
}

export default {
    async mounted() {
        window.loading(true, "Loading...", true)

        onAuthStateChanged(auth, async user => {
            if (user) {
                const allprojects = await GetDocs(`projects`)
                const userProjects = []

                for (const project of allprojects) {
                    const userProject = await GetDoc(`projects/${project.id}/signers/${user.uid}`)
                    if (userProject)
                        userProjects.push(project)
                }

                await InsertChildrenIntoParentElement("tbody_signedProjects", userProjects, async (placeholderHtml, child) => {
                    placeholderHtml = placeholderHtml.replace("%project_id%", child.id)

                    placeholderHtml = placeholderHtml.replace("%project_name%", child.name)
                    placeholderHtml = placeholderHtml.replace("%project_company%", child.company)
                    placeholderHtml = placeholderHtml.replace("%project_duration%", child.duration + " Month/s")
                    placeholderHtml = placeholderHtml.replace("%project_cost%", GetCurrency(child.cost))

                    const projectBills = await GetProjectBills(child.id, user.uid)
                    const projectBillsStats = GetBillsStats(projectBills)

                    placeholderHtml = placeholderHtml.replace("%project_amountPaid%", GetCurrency(projectBillsStats[0]))
                    placeholderHtml = placeholderHtml.replace("%project_amountRemain%", GetCurrency(projectBillsStats[1]))

                    return placeholderHtml
                })
            }

            window.loading(false)
        })
    }
}
</script>