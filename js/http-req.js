//var urlLocal = 'http://localhost:3000/';
//var urlHost = 'http://10.10.113.42:3000/';
var urlHost = 'https://gcs-json-server.now.sh/';

function getLoginData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respLoginData(response);
    }
  };
  xhttp.open('GET', urlHost + 'accounts', true);
  xhttp.send();
}

function getAllStudentsName() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respAllStudentsName(response.students);
    }
  };
  xhttp.open('GET', urlHost + 'accounts', true);
  xhttp.send();
}

function getAllSubject() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllSubject(response);
    }
  };
  xhttp.open('GET', urlHost + 'subjects', true);
  xhttp.send();
}

function getAllTeacher() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllTeacher(response.teachers);
    }
  };
  xhttp.open('GET', urlHost + 'accounts', true);
  xhttp.send();
}

function saveJadwal(schedule, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', urlHost + 'schedule/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(schedule);
}

function addSubject(subject) {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    respAddSubject(response);
  };

  xhttp.open('POST', urlHost + 'subjects', true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(subject);
}

function addDiscussion(discussion) {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    respAddDiscussion();
  };

  xhttp.open('POST', urlHost + 'discussions', true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(discussion);
}

function getAllDiscussionFromDB() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllDiscussion(response);
    }
  };
  xhttp.open('GET', urlHost + 'discussions', true);
  xhttp.send();
}

function getAllSubClass() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllSubClass(response);
    }
  };
  xhttp.open('GET', urlHost + 'class', true);
  xhttp.send();
}

function getSchedule(subKelas) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetSchedule(response);
    }
  };
  xhttp.open('GET', urlHost + 'schedule/?class='+subKelas, true);
  xhttp.send();
}
