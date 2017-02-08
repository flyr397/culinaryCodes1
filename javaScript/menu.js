src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"

$(document).ready(function () {
    $('#tabContainer').tabs({
        show: 'fadeIn',
        hide: 'fadeOut'
    });
    var hash = location.hash;
    if (hash) {
        $('#tabContainer').tabs("load", hash)
    }

}); // end ready