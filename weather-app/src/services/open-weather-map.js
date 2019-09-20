class OpenWeatherMap {
    
    constructor(appiKey, units = 'metric', cnt = 10, lang = 'ru') {
        this.appiKey = appiKey
        this.units = units
        this.cnt = cnt
        this.lang = lang
    }

    getFiveDayForecast(name) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${this.appiKey}&units=${this.units}&lang=${this.lang}`)
            .then(res => {
                if (res.status === 404) {
                    throw new Error('Город не найден')
                } else {
                    return res.json()
                }
            })
    }

    getCityByName(name) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${this.appiKey}&units=${this.units}&lang=${this.lang}`)
            .then(res => {
                if (res.status === 404) {
                    throw new Error('Город не найден')
                } else {
                    return res.json()
                }
            })
    }
}

export default OpenWeatherMap