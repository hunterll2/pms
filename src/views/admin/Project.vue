<template>
    <div class="card">
        <h5 class="card-header py-3">Manage [project_name]</h5>
        <form action="#">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <label for="input_projectName" class="form-label">Project Name</label>
                        <input type="text" id="input_projectName" class="form-control">
                    </div>
                    <div class="col-3">
                        <label for="input_companyName" class="form-label">Company</label>
                        <input type="text" id="input_companyName" class="form-control">
                    </div>
                    <div class="col-3">
                        <label for="input_durationInMonths" class="form-label">Duration (months)</label>
                        <div class="input-group">
                            <input type="number" id="input_durationInMonths" class="form-control">
                            <span class="input-group-text">Months</span>
                        </div>
                    </div>
                    <div class="col-3">
                        <label for="input_totalCost" class="form-label">Total Cost</label>
                        <div class="input-group">
                            <input type="number" id="input_totalCost" class="form-control">
                            <span class="input-group-text">SR</span>
                        </div>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="input_projectText" class="form-label">Project description</label>
                        <textarea name="input_projectText" id="input_projectText" rows="10" class="form-control"></textarea>
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
                        <tr v-for="n in 4" :key="'table1-option-col' + n">
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
                <div class="alert alert-danger d-flex align-items-center">
                    <i class="fas fa-triangle-exclamation fs-4 me-3"></i>
                    <span>Please fill all the reqired fields</span>
                </div>
                <div class="alert alert-success d-flex align-items-center">
                    <i class="fas fa-check fs-4 me-3"></i>
                    <span>The changes has been saved successfuly</span>
                </div>
            </div>

            <div class="card-footer d-flex">
                <button class="btn btn-secondary">
                    <i class="fas fa-angle-left me-2"></i>Back
                </button>
                <input type="submit" value="Save Changes" class="btn btn-success ms-auto">
            </div>
        </form>
    </div>
</template>