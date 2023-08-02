import { reactive } from "../packages/arrow.js";
import { mapPage } from "../page/map.js";
import { dataManagementPage } from "../page/dataManagement.js";
import { aboutPage } from "../page/about.js";
import { homePage } from "../page/home.js";
import { addPointForm } from "../components/addPoint.js";
import { addFromFile } from "../components/addFromFile.js";

export const routing = reactive({
    pageNumber: 0,
    dataEntryFormPage: 0,
    pages: [
        {
            title: "Home",
            element: homePage
        },
        {
            title: "Map",
            element: mapPage
        },
        {
            title: "Data Management",
            element: dataManagementPage
        },
        {
            title: "About",
            element: aboutPage
        },
    ],
    addPointOptions : [
        {
            title: "Add From Form",
            element: addPointForm
        },
        {
            title: "Add From File",
            element: addFromFile
        }
    ]
})

export function getCurrentPageElement() {
    return routing.pages[routing.pageNumber].element;
}