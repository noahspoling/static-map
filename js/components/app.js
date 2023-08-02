import { watch } from '../packages/arrow.js'
import {navbar} from './navbar.js'
import { routing } from '../service/routing.js'
import { rerender, setRerender } from './rerender.js'
import { data, loadFromLocalStorage } from '../service/data.js'
import { initializeMap } from "../service/initMap.js";


const nav = document.getElementById("navbar") //attach navbar here
export const root = document.getElementById("root") //main window root

navbar(nav)

const rerenderFunction = () => {
    while (root.firstChild) {
        root.firstChild.remove()
    }
    
    const currentPage = routing.pages[routing.pageNumber]
    currentPage.element(root)
    if(currentPage.title = "Map") {
        initializeMap();
    }
};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //loadFromLocalStorage()
    
    setRerender(rerenderFunction);
    watch(() => routing.pageNumber, rerenderFunction);
});
