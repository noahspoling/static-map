import {html} from "../packages/arrow.js"
import { addPointForm } from "../components/addPoint.js"
import { initializeMap } from "../service/initMap.js";

initializeMap();

export const mapPage = html`
    <div class="container">
    <div id="map"></div>
    </div>
`