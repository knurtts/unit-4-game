var cryOne = (Math.floor(Math.random() * 12) + 1);
var cryTwo = (Math.floor(Math.random() * 12) + 1);
var cryThree = (Math.floor(Math.random() * 12) + 1);
var pcNum = (Math.floor(Math.random() * 120) + 19);
var youNum = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {

    $("#pcNumber").text(pcNum);

    $(".crystal").click(function(){
        var choice = $(this).val();
       if (choice = "1") {
           alert("ONE");
       } else if (choice = "2") {
           alert("TWO");
       } else if (choice = "3") {
           alert("THREE");
       }
    });
/*
    $("#crystalOne").click(function(){
        $("#yourNumber").text(youNum += cryOne);
        if (youNum === pcNum) {
            wins++;
            alert("You win!");
            $("#winDisplay").text("Wins: " + wins);
            youNum = 0;
            $("#yourNumber").text(youNum);
        } else if (youNum > pcNum) {
            losses++;
            alert("You loose!");
            $("#lossDisplay").text("Losses: " + losses);
            youNum = 0;
            $("#yourNumber").text(youNum);
        }
    });

    $("#crystalTwo").click(function(){
        $("#yourNumber").text(youNum += cryTwo);
        if (youNum === pcNum) {
            wins++;
            alert("You win!");
            $("#winDisplay").text("Wins: " + wins);
            youNum = 0;
            $("#yourNumber").text(youNum);
        } else if (youNum > pcNum) {
            losses++;
            alert("You loose!");
            $("#lossDisplay").text("Losses: " + losses);
            youNum = 0;
            $("#yourNumber").text(youNum);

        }
    });

    $("#crystalThree").click(function(){
        $("#yourNumber").text(youNum += cryThree);
        if (youNum === pcNum) {
            wins++;
            alert("You win!");
            $("#winDisplay").text("Wins: " + wins);
            youNum = 0;
            $("#yourNumber").text(youNum);
        } else if (youNum > pcNum) {
            losses++;
            alert("You loose!");
            $("#lossDisplay").text("Losses: " + losses);
            youNum = 0;
            $("#yourNumber").text(youNum);
        }
    });
    */

    console.log("PC Number: " + pcNum);
    console.log("Pepsi: " + cryOne);
    console.log("Billy: " + cryTwo);
    console.log("Ligt: " + cryThree);


});


