import { reactive } from "../packages/arrow.js";
import { Point } from "../models/point.js";

export const data = reactive({
    pointIdCount: 0,
    points: []
})

export const addPoint = (pt) => {
    if (!(pt instanceof Point)) {
        throw new Error('Argument must be an instance of Point');
    }
    
    data.points = [...data.points, pt];
}

export const deletePoint = (id) => {
    data.points = data.points.filter(pt => pt.id !== id);
}