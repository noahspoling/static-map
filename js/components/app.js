import { watch } from '../packages/arrow.js'
import {navbar} from './navbar.js'
import { routing } from '../service/routing.js'

export const root = document.getElementById("root")
const nav = document.getElementById("navbar")

navbar(nav)

watch(() => {
    while (root.firstChild) {
        root.firstChild.remove()
    }
    
    const currentPage = routing.pages[routing.pageNumber]
    currentPage.element(root)
})