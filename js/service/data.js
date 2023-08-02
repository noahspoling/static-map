import { reactive, watch } from "../packages/arrow.js";
import { Point } from "../models/point.js";
import { setRerender } from "../components/rerender.js"

export const data = reactive({
    pointIdCount: 0,
    points: []
})

export const addPoint = (pt) => {
    if (!(pt instanceof Point)) {
        throw new Error('Argument must be an instance of Point');
    }

    if (!Array.isArray(data.points)) {
        console.error('data.points is not an array:', data.points);
        data.points = [];
    }
    
    data.points.push(pt);
    data.pointIdCount += 1;

    localStorage.setItem('points', JSON.stringify(data.points));
    localStorage.setItem('pointCount', JSON.stringify(data.pointIdCount));

    //setRerender()
}

export const deletePoint = (id) => {
    console.log("Deletes Point")
    console.log(id)

    if (!Array.isArray(data.points)) {
        console.error('data.points is not an array:', data.points);
        data.points = [];
    }

    data.points = data.points.filter(pt => Number(pt.id) !== Number(id));

    console.log(data.points);

    //localStorage.setItem('points', JSON.stringify(data.points));
    //localStorage.setItem('pointCount', JSON.stringify(data.pointIdCount));

    //setRerender()
}

export const clearLocalStorage = () => {
    localStorage.setItem('points', [])
    localStorage.setItem('pointCount', 0)
}

export const loadFromLocalStorage = () => {
    let pointCount = localStorage.getItem('pointCount');
    let savedPoints = localStorage.getItem('points');
    console.log("Load from storage called")
    if(savedPoints) {
        console.log("Load from storage called")
        let pointsData = JSON.parse(savedPoints);
        let newPointArray = [];
        for (let point of savedPoints) {
            let pointObj = new Point(point.pointName, point.latitude, point.longitude)
            console.log(pointObj.toString())
            addPoint(pointObj)
        }
        data.pointIdCount = JSON.parse(pointCount)
    }
}

watch(() => data.points, setRerender());