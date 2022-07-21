let usersData = JSON.parse(localStorage.getItem('usersData'));
if (usersData == null) {
    usersData = [];
}
let login_status=false;
localStorage.setItem('login_status', JSON.stringify(login_status))
document.getElementById('loginForm').addEventListener('submit', login);

function login(event){
    event.preventDefault();
   
    let user_mail=document.getElementById('email').value;
    let pass=document.getElementById('password').value;
    for(let i=0; i<usersData.length; i++){
        if(user_mail==usersData[i].mail && pass==usersData[i].pass){
            let login_user=usersData[i].name;
            localStorage.setItem('login_user', JSON.stringify(login_user))
            login_status=true;
            localStorage.setItem('login_status', JSON.stringify(login_status))
            break;
        }
    }
    if(usersData==[]){
        alert('please create account')
    }else if(login_status==false){
        alert('wrong pass')
    }else if(login_status==true){
        window.location.href='index.html'
    }
}