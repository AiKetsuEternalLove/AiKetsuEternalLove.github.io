$(function() { 
    $('#menu-toggle').on('click', function() {
        $(this).toggleClass('is-active')
        $('#navMenu').slideToggle('medium', function(){
            $(this).toggleClass('is-active')
        })
    })

    $('.button').on('click', function() {
        $('.modal').addClass('is-active')
        $('.modal-close').on('click', function() {
            $('.modal').removeClass('is-active')
        })
        $('#btnClose').on('click', function() {
            $('.modal').removeClass('is-active')  
        })
    })
})