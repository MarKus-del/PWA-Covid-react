const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getcountry(country){
    return fetch(`${path}/${country}`, headers)
    .then((response => response.json()))
}

export default {
    getcountry
}