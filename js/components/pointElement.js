import { html } from "../packages/arrow.js"
import { deletePoint } from "../service/data.js"

window.deletePoint = deletePoint;

export const pointElement = (point) => {
    return html`
    <li class="row bg-light mb-5 p-5 rounded">
        <div class="col-md-4">
            <p>ID: ${point.id}</p>
        </div>
        <div class="col-md-4">
            <div class="info-box">
                <p>Name: ${point.pointName}</p>
                <p>Latitude: ${point.latitude}</p>
                <p>Longitude: ${point.longitude}</p>
            </div>
        </div>
        <div class="col-md-4">
            <button class="btn btn-danger" onclick="deletePoint('${point.id}')">Delete</button>
        </div>
    </li>
    `
}
