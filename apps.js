$(document).ready(function() {
    console.log('ready!');

    $('.choice').click(function() {
        user = this.value;
        $("#user").append(user);
        $("#computer").append(computerChoice);
        console.log('user chose ' + user);
    });

    $(".choice").mouseout(function() {
        location.reload();
    })

    $("h4").click(function() {
        //displays choosen values
    });
});
