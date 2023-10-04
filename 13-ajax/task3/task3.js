const ip = 'https://randomuser.me/api/';

async function getResult(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results[0];

}

function addUserInfo(user) {
    const userInfo = document.querySelector('.userInfo');
    userInfo.innerHTML = `
        <img src="${user.picture.medium}" alt="avatar">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Age: ${user.dob.age}</p>
        <p>Gender: ${user.gender}</p>
        <p>Country: ${user.location.country}</p>
        <p>Login: ${user.login.username}</p>
        <p>Password: ${user.login.password}</p>
        <p>Email: ${user.email}</p>`;
}

async function loadData() {
    const user = await getResult(ip);
    addUserInfo(user);
}

loadData();