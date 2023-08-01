import {html} from "../packages/arrow.js"
import { addPointForm } from "../components/addPoint.js"
import { dataList } from "../components/listPoints.js"
import { data } from "../service/data.js";

export const dataManagementPage = html`
    <div class="container">
        <div class="row g-5">
            <div class="col-md-4">
                ${addPointForm}
            </div>
            <div class="col-md-8">
                ${dataList()}
            </div>
        </div>
    </div>
`
