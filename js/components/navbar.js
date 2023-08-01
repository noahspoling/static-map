import {html} from "../packages/arrow.js"
import { routing } from "../service/routing.js";

window.navigate = function(page) {
    routing.pageNumber = page

    console.log('Navigating to ' + page);
}

export const navbar = html`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" onclick="navigate(0); return false;">Static Map</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onclick="navigate(0); return false;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="navigate(1); return false;">Map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="navigate(2); return false;">Data</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="navigate(3); return false;">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`