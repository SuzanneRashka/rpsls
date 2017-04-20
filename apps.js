$(document).ready(function() {
    console.log('ready!');

    $('#userChoice').on("change", function(event) {
        userChoice = $('#userChoice').val();
        console.log(userChoice);
    });
    // Logging each click button to equate to id
    $('#rock').click(function() {
        console.log("rock");
    });
    $('#paper').click(function() {
        console.log("paper");
    });
    $('#scissors').click(function() {
        console.log("scissors");
    });
    $('#lizard').click(function() {
        console.log("lizard");
    });
    $('#spock').click(function() {
        console.log("spock");
    });
    $("#user").append(userChoice);

    $("#computer").append(computerChoice);
    //$("#textarea").append(userChoice);

});
