function mapBuilder(arr1, arr2) {
    const map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], arr2[i]);      
    }
    return map;
}

let map = mapBuilder([], []);
console.log(map instanceof Map)