import { html } from "../packages/arrow.js";

export const addPointForm = html`
    <form>
    <div class="mb-3">
        <label for="inputPointName" class="form-label">PointName</label>
        <input type="number" step="0.00001" class="form-control" id="inputPointName" aria-describedby="pointNameHelp">
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