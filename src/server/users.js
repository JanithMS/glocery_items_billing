async function getUser () {
    const response = await fetch('https://api.randomuser.me/')
    const data = await response.json();
    let {name, location, email, dob, phone, cell, picture} = data.results[0]
    const userName = name.title+" "+name.first+" "+name.last;
    const streetAddress = location.street.number+', '+location.street.name;
    const {city, state, country, postcode} = location;
    const {date} = dob
    const dateString = new Date(date).toLocaleDateString()
    const photo = picture.medium
    return {userName, streetAddress, city, state, country, postcode, email, dateString, phone, cell, photo}
}

export default getUser;