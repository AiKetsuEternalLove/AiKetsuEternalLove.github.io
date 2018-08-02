var url = "https://gcs-json-server-hfryjshdrd.now.sh/schedule"

var getSchedule = function(id, success) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.responseType = 'json'
    xhr.send()

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            success && success(this.response)
        }
    }
}

export { getSchedule }