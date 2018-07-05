$(document).ready(function() {
    let anak = $("#pilih-anak")
    let day = $("#pilih-hari")
    let schedule = $(".schedule")
    
    // schedule data per anak
    let anakSchedule = {
        as: {
            monday: ["Physics", "Math", "Biology", "Bahasa"],
            tuesday: ["Physics", "Biology", "Bahasa", "Math"],
            wednesday: ["Math", "Physics", "Bahasa", "Biology"],
            thursday: ["Biology", "Physics", "Math", "Bahasa"],
            friday: ["Bahasa", "Biology", "Physics", "Math"],
            saturday: ["Physics", "Math", "Biology", "Bahasa"]
        },
        sd: {
            monday: ["Physics", "Math", "Biology", "Bahasa"]
        }
    }
    
    anak.on("change", () => {
        schedule.empty()
        day.val("")
    })
    
    // change schedule based on selected day
    day.on("change", () => {
        schedule.empty()
        let n = 1
        for (const i in anakSchedule) {
            if (anak.val() === i) {
                for (const j in anakSchedule[i]) {
                    if (day.val() === j) {
                        for (const k in anakSchedule[i][j]) {
                            $(".schedule").append("<tr><td>"+ n +"</td><td>"+ anakSchedule[i][j][k] +"</td><td>No Assignment</td></tr>")
                            n++
                        }
                    }
                }
            }
        }
    })
})