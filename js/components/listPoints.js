import { html } from "../packages/arrow.js";
import { data } from "../service/data.js";
import { pointElement } from "./pointElement.js";
export const dataList = () => html`
    ${() => html`
        <ul>
            ${data.points.map( point => pointElement(point))}
        </ul>
    `}
`
