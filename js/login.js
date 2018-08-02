$(function() {
    $("#name").text(readCookie('sessionName'))
    
    $('#accountMenu').click(function() {
        $(this).toggleClass('is-active')
    })
})

function cekLogin() {
    var cred = readCookie('sessionType')
    if (!cred) {
        window.location.href = 'login2.html'
    } else if (cred === 'admin') {
        window.location.href = 'admin/adminfix'
    }
}

function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}

function readAllCookies() {
    console.log(readCookie('sessionName'))
    console.log(readCookie('sessionRoom'))
    console.log(readCookie('sessionId'))
    console.log(readCookie('sessionType'))
}

function logout() {
    
    delete_cookie('sessionName')
    delete_cookie('sessionType')
    delete_cookie('sessionId')
    delete_cookie('sessionRoom')
    
    function delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }
    
    window.location.href = '/login2.html'
}