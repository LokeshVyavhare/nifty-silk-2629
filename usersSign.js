//Sign-up Data storing
document.getElementById('name').value = '';
document.getElementById('company').value = '';
document.getElementById('mail').value = '';
document.getElementById('pass').value = '';
let usersData = JSON.parse(localStorage.getItem('usersData'));
if (usersData == null) {
    usersData = [];
    localStorage.setItem('usersData', JSON.stringify(usersData));
}
document.getElementById("signupForm").addEventListener('submit', signData);

function signData(event) {
    event.preventDefault();
    let user = {};
    user.name = document.getElementById('name').value;
    user.company = document.getElementById('company').value;
    user.mail = document.getElementById('mail').value;
    user.pass = document.getElementById('pass').value;
    usersData.push(user);
    localStorage.setItem('usersData', JSON.stringify(usersData));
    window.location.href='index.html';

}

