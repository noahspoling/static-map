import { data } from "../service/data.js"

//Model class for points to handle ranges of points and managing the id value

export class Point {
    #pointName
    #latitude
    #longitude
    #id

    constructor(name, latitude, longitude) {
        this.#pointName = name
        if (latitude < -90 || latitude > 90) {
            throw new Error('Latitude must be between -90 and 90');
        }
        if (longitude < -180 || longitude > 180) {
            throw new Error('Longitude must be between -180 and 180');
        }

        let id = data.pointIdCount
        data.pointIdCount++

        this.#id = id
        this.#latitude = latitude;
        this.#longitude = longitude;

    }

    //Get methods
    get pointName() {
        return this.#pointName;
    }

    get latitude() {
        return this.#latitude;
    }

    get longitude() {
        return this.#longitude;
    }

    get id() {
        return this.#id;
    }
}