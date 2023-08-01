import { html } from "../packages/arrow.js";
import { addPoint } from "../service/data.js";
import { Point } from "../models/point.js";

function handleSubmit(event) {
    //remove the preventDefault until I figure out the re render
    event.preventDefault();
    const form = event.target;

    const pointName = form.querySelector("#inputPointName").value;
    const latitude = form.querySelector("#inputLatitude").value;
    const longitude = form.querySelector("#inputLongitude").value;

    var point = new Point(pointName, latitude, longitude)
    addPoint(point)
    // Now you can use the values
    console.log(point.toString());
}
export const addPointForm = html`
    <form id="pointForm" onSubmit="handleSubmit(event)" class="bg-light p-5 rounded border border-success">
    <div class="mb-3">
        <label for="inputPointName" class="form-label">PointName</label>
        <input type="text" class="form-control" id="inputPointName" aria-describedby="pointNameHelp">
        <div id="pointNameHelp" class="form-text">Enter a name for the point</div>
    </div>
    <div class="mb-3">
        <label for="inputLatitude" class="form-label">Latitude</label>
        <input type="number" step="0.00001" class="form-control" id="inputLatitude">
    </div>
    <div class="mb-3">
        <label for="inputLongitude" class="form-label">Longitude</label>
        <input type="number" step="0.00001" class="form-control" id="inputLongitude">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
`

window.handleSubmit = handleSubmit; 
//make handle submit global scope