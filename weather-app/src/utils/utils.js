function getAllCityInLocalStorage() {
    const arr = []
    let i = 0
    while(localStorage.getItem(i)) {
        arr.push(localStorage.getItem(i))
        i++
    }
   
    return arr
}

const getTime = (currDate) => {
    if (currDate) {
        const date = new Date(currDate)
        const hour = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()
        const minutes = date.getMinutes() <= 9  ? `0${date.getMinutes()}` : date.getMinutes()
        return `${hour}:${minutes}`
    } else {
        const date = new Date()
        const hour = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()
        const minutes = date.getMinutes() <= 9  ? `0${date.getMinutes()}` : date.getMinutes()
        return `${hour}:${minutes}`
    }
}

export {
    getAllCityInLocalStorage,
    getTime
}