
function searchFor(statusbarText) {
    $.ajax({
        dataType: "json",
        url: 'fetchSite.php',
        data: {
            statusbar: statusbarText
        },
        success: function(data) {
            if (data.status == 'statusbar not set') {
                alert('statusbar not set')
            } else if (data.status == 'statusbar empty') {
                alert('statusbar empty')
            } else if (data.status == 'curl error') {
                alert('curl error')
            } else if (data.status == 'success') {
                alert('success')
            }
        }
    });
}

$(function() {

    $('.backwords').click(function(event) {
        event.preventDefault();
    });
    $('.forwards').click(function(event) {
        event.preventDefault();
    });
    $('.submit').click(function(event) {
        event.preventDefault();

        searchFor($('.statusbar').val());
    });
    $('.zensurbrowser').click(function(event) {
        event.preventDefault();
    });
    $('.about').click(function(event) {
        event.preventDefault();
    });
    $('.bookmark a').click(function(event) {
        event.preventDefault();

        /* insert correct url */
        searchFor($('.statusbar').val());
    });

});