<template>
    <div class="card">
        <h5 class="card-header py-3">
            Manage Projects
        </h5>
        <div class="card-body">
            <table class="table table-hover table-striped align-middle">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Compny Name</th>
                        <th>Duration (months)</th>
                        <th>Total Cost</th>
                        <th class="text-end">
                            <button class="btn btn-sm btn-success" data-bs-toggle="modal"
                                data-bs-target="#AddNewProjectModal">
                                <i class="fas fa-plus me-1"></i>
                                Add New Project
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>%project_name%</td>
                        <td>%project_company%</td>
                        <td>%project_duration%</td>
                        <td>%project_cost%</td>
                        <td class="text-end">
                            <div class="input-group justify-content-end">
                                <a href="/admin/project?id=1" class="btn btn-sm btn-primary">
                                    <i class="fas fa-pen-to-square me-1"></i>
                                    Edit
                                </a>
                                <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#div_modal_deleteProject"
                                    data-project-id="%project_id%">
                                    <i class="fas fa-trash me-1"></i>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="AddNewProjectModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add new project</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="#" id="form_addNewProject">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="input_projectName" class="form-label">Project Name</label>
                                <input type="text" id="input_projectName" name="name" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label for="input_companyName" class="form-label">Company</label>
                                <input type="text" id="input_companyName" name="company" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label for="input_durationInMonths" class="form-label">Duration (months)</label>
                                <div class="input-group">
                                    <input type="number" id="input_durationInMonths" name="duration" class="form-control"
                                        required min="1">
                                    <span class="input-group-text">Months</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="input_totalCost" class="form-label">Total Cost</label>
                                <div class="input-group">
                                    <input type="number" id="input_totalCost" name="cost" class="form-control" required
                                        min="1">
                                    <span class="input-group-text">SR</span>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-between">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <input type="submit" value="Add new project" class="btn btn-success">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="div_modal_deleteProject" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        data-project-id="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title fs-5 fw-bold">Confirm deleting the project</div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete <b>%project_name%</b>?</p>
                    <p>To delete the project please type the project name below, then click <b>Delete Project</b></p>
                    <input type="text" id="input_projectName" class="form-control">
                    <div id="div_alert" class="alert alert-danger d-none mt-3">
                        <div class="alert-text d-flex align-items-center pt-2">
                            <i class="fas fa-triangle-exclamation fs-4 me-3"></i>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-danger disabled">Delete Project</button>
                </div>
            </div>
        </div>
    </div>
</template>