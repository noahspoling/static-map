import {html} from "../packages/arrow.js"
import { addPointForm } from "../components/addPoint.js"
import { dataList } from "../components/listPoints.js"
import { data } from "../service/data.js";

export const dataManagementPage = html`
    <div class="container">
        <div class="row g-5">
            <div class="col-md-5 d-flex flex-column justify-content-center align-items-center my-2">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn btn-primary">Add point</button>
                    <button class="btn btn-primary">Upload Data</button>
                </div>
                ${addPointForm}
            </div>
            <div class="col-md-7">
                ${dataList()}
            </div>
        </div>
    </div>
`
