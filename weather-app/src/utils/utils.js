function getAllCityInLocalStorage() {
    const arr = []
    let i = 0
    while(localStorage.getItem(i)) {
        arr.push(localStorage.getItem(i))
        i++
    }
   
    return arr
}

export {
    getAllCityInLocalStorage
}