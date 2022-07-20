login_status=JSON.parse(localStorage.getItem('login_status'))
login_user=JSON.parse(localStorage.getItem('login_user'))
if(login_status==null){
    login_status=false;
    localStorage.setItem('login_status', JSON.stringify(login_status));
}
