import {getSchedule} from './jadwal_model.js'

$(function() {
    var anak = $("#pilih-anak")
    let weekday = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
    var date = new Date()
    var day = weekday[date.getDay()-1]
    console.log(day)
    var schedule = $(".schedule")
    var selected_day = $('#pilih-hari')

    
    function startOfWeek(date) {
        var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
        return new Date(date.setDate(diff))
    }

    function getDateByDay() {
        let curr = new Date()
        let next = startOfWeek(curr)
        let theday = []
        var i=0
        while(i<7) {
            theday[i] = next.toDateString()
            next.setDate(next.getDate()+1)
            i++
        }
    
        return theday
    }
    
    var week = getDateByDay()
    
    for (const i in weekday) {
        $('#pilih-hari').append("<option value=" + weekday[i] + ">" + week[i] + "</option>")
    }
    
    setSchedule(day)
    selected_day.val(day)
    
    // schedule data per anak
    anak.on("change", () => {
        schedule.empty()
        selected_day.val(day)
        setSchedule(day)
    })

    // change schedule based on day
    function setSchedule(day) {
        schedule.empty()
        
        let n = 1
        getSchedule(1, function(anakSchedule) {
            for (const i in anakSchedule) {
                if (anak.val() === anakSchedule[i].class) {
                    if (day === anakSchedule[i].day) {
                        $(".schedule").append(
                            "<tr>" +
                            "<td>" + n + "</td>" +
                            "<td>" + anakSchedule[i].subject + "</td>" +
                            "<td><div class='container-fluid'> " +
                            "<p>Bab 1</p>" +
                            "<p>Pengenalan</p>" +
                            "</div></td>" +
                            "<td><a class='button btn-assignment'>Open</a></td>" +
                            "<td>Yes</td>" +
                            "</tr>"
                        )
                        n++
                    }
                }
            }

            $('.btn-assignment').on('click', function() {
                $('#modal-assignment').addClass('is-active')
                $('.modal-close').on('click', function() {
                    $('#modal-assignment').removeClass('is-active')
                })
            })
        })
    }
    
    
    selected_day.change(() => {
        console.log(selected_day.val())
        setSchedule(selected_day.val())
    })
    
    $('#menu-toggle').on('click', function() {
        $(this).toggleClass('is-active')
        $('#navMenu').slideToggle('medium', function() {
            $(this).toggleClass('is-active')
        })
    })
})
