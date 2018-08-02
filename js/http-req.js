/**
 * http-req.js contains all function to json-server API
 */
//var URL = 'http://localhost:3000/';
var URL = 'https://gcs-json-server.now.sh/';

/**
 * Login2
 */
function getLoginDataLoading(_type) {
  Pace.restart()
  Pace.track(function () {
    $.ajax({
      type: "GET",
      url: URL + _type,
      success: function (response) {
        console.log('success get login data')
        respLoginData(response);
      },
      failure: function (response) {
        console.log(response)
      },
      error: function (response) {
        console.log(response)
    }
    })
  })
}

// deprecated, will remove it later
function getAllStudentsName() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respAllStudentsName(response.students);
    }
  };
  xhttp.open('GET', URL + 'accounts', true);
  xhttp.send();
}


/**
 * db-jadwal
 */
function getAllSubject() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllSubject(response);
    }
  };
  xhttp.open('GET', URL + 'subjects', true);
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
  xhttp.open('GET', URL + 'accounts', true);
  xhttp.send();
}

function saveJadwal(schedule, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', URL + 'schedule/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(schedule);
}


/**
 * db-kelas
 */
// deprecated, will change api structure to reduce redundant data
function saveSeat(studentSeat, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', URL + 'dataclass/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(studentSeat);
}

function saveWaliKelas(waliKelas, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', URL + 'waliclass/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(waliKelas);
}

function saveTeacherData(teacherData, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', URL + 'teacherData/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(teacherData);
}
function saveStudentData(data, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', URL + 'studentData/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(data);
}
function saveParentData(data, number) {
    console.log('id edited'+number)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    //respAddJadwal(response)
    console.log(response);
  };

  xhttp.open('PUT', URL + 'parentData/' + number, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(data);
}


/**
 * db-teacher
 */
function deleteTeacher(id) {
  console.log('teacher deleted'+id)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    respDeleteTeacher(response)
    console.log(response);
  };

  xhttp.open('DELETE', URL + 'teacherData/' + id, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send();
}
function getTeacherSchedule(teacherName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetTeacherSchedule(response);
    }
  };
  xhttp.open('GET', URL + 'schedule/?teacher='+teacherName, true);
  xhttp.send();
}

/**
 * db-student
 */
function deleteStudent(id) {
  console.log('student deleted'+id)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    respDelete(response)
    console.log(response);
  };

  xhttp.open('DELETE', URL + 'studentData/' + id, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send();
}
function getAllStudent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllStudent(response);
    }
  };
  xhttp.open('GET', URL + 'studentData', true);
  xhttp.send();
}

/**
 * db-parent
 */
function deleteParent(id) {
  console.log('parent deleted'+id)
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function(response) {
    respDelete(response)
    console.log(response);
  };

  xhttp.open('DELETE', URL + 'parentData/' + id, true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send();
}
function getAllParent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllParent(response);
    }
  };
  xhttp.open('GET', URL + 'parentData', true);
  xhttp.send();
}
/**
 * mata-pelajaran
 */
function addSubject(subject) {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    respAddSubject(response);
  };

  xhttp.open('POST', URL + 'subjects', true);
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(subject);
}


/**
 * dicussion as parent
 */
function addDiscussion(discussion) {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    respAddDiscussion();
  };

  xhttp.open('POST', URL + 'discussions', true);
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
  xhttp.open('GET', URL + 'discussions', true);
  xhttp.send();
}


/**
 * db-class
 */
// deprecated
function getAllSubClass() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllSubClass(response);
    }
  };
  xhttp.open('GET', URL + 'class', true);
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
  xhttp.open('GET', URL + 'schedule/?class='+subKelas, true);
  xhttp.send();
}

function getSchedule(subKelas, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', URL + 'schedule/?class=' + subKelas)
  xhr.responseType = 'json'
  xhr.send()
  xhr.onload = function() {
    callback && callback(this.response)
  }
}

function getDataClass(subKelas) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetDataClass(response);
    }
  };
  xhttp.open('GET', URL + 'dataclass/?class='+subKelas, true);
  xhttp.send();
}

function getWaliClass(subKelas) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetWaliClass(response, subKelas);
    }
  };
  xhttp.open('GET', URL + 'waliclass/?class='+subKelas, true);
  xhttp.send();
}

function getAllTeacher() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = jQuery.parseJSON(this.responseText);
      respGetAllTeacher(response);
    }
  };
  xhttp.open('GET', URL + 'teacherData', true);
  xhttp.send();
}
