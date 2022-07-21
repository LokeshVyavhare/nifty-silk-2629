login_status=JSON.parse(localStorage.getItem('login_status'))
login_user=JSON.parse(localStorage.getItem('login_user'))
if(login_status==null){
    login_status=false;
    localStorage.setItem('login_status', JSON.stringify(login_status));
}

if(login_status==true){
    let x=document.querySelector('#userData>p:nth-child(2)>a');
    x.innerText='Log Out'
    x.setAttribute('href', 'login.html')
    let login_user=JSON.parse(localStorage.getItem('login_user'))
    x=document.querySelector('#userData>p:nth-child(3)');
    // x.innerHTML='<i class="fa-solid fa-user"></i>'
    x.innerText=login_user;
}
