function conversion(arr) {
    let output = {
        "type": "FeatureCollection",
        "features": []
    }
    for (let l of arr) {
        let r = {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": []
            }
        }
        for (let p of l.points) {
            r.geometry.coordinates.push([p.x, p.z])
        }
        output.features.push(r)
    }
    return JSON.stringify(output)
}
