function real_login(){
    var $key = $("#id_input");
    var $PW=$("#pw_input");
    var value = localStorage[$key.val()];
    var id_box =document.getElementById("id_input");
    var pw_box =document.getElementById("pw_input");
    if(value==$PW.val()){
        alert("로그인 성공");
        id_box.value="";
        pw_box.value="";
        var before =document.getElementById("before_login");
        before.style.display="none";
        var now =document.getElementById("after_login");
        now.style.display="block";
        
    }
    else{
        alert("아이디와 비밀번호를 다시 확인하거나 본인이 회원인지 확인하십시오.");
        id_box.value="";
        pw_box.value="";
        return;
    }
}

function upRegister() {
    var before =document.getElementById("before_login");
    var now =document.getElementById("register-page");
    before.style.display="none";
    now.style.display="block";
}

function profile() {
    var a=document.getElementById("profile_board");
    
    if (a.style.display=="none") {
        a.style.display="block";        
    }
    else{
        a.style.display="none";
    }

}
function toybox() {
    var a=document.getElementById("toybox_board");
    
    if (a.style.display=="none") {
        a.style.display="block";        
    }
    else{
        a.style.display="none";
    }

}
function loadmapping() {
    var a=document.getElementById("loadmapping_board");
    
    if (a.style.display=="none") {
        a.style.display="block";        
    }
    else{
        a.style.display="none";
    }
    
}
