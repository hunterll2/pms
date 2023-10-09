<template>
    <div class="card">
        <h5 class="card-header py-3">Manage Users</h5>
        <div class="card-body">
            <table class="table table-hover table-striped align-middle">
                <thead class="">
                    <tr>
                        <th width="100">UID</th>
                        <th width="200">Username</th>
                        <th>Email</th>
                        <th width="200"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="n in 2" :key="'row-admin-' + n">
                        <td>[uid]</td>
                        <td>[username]</td>
                        <td>[someone@example.com]</td>
                        <td class="text-end">
                            <button class="btn btn-danger">
                                Set as User
                            </button>
                        </td>
                    </tr>
                    <tr v-for="n in 10" :key="n">
                        <td>[uid]</td>
                        <td>[username]</td>
                        <td>[someone@example.com]</td>
                        <td class="text-end">
                            <button class="btn btn-primary">
                                <!-- <i class="fas fa-user-tie me-1"></i> -->
                                Set as Admin
                            </button>
                            &nbsp;
                            <button class="btn btn-danger d-none">
                                <i class="fas fa-user me-1"></i> Remove Admin
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>