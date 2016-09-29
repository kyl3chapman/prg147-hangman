/**
 * Created by meriw on 9/9/2016.
 */

// JavaScript Document
var $ =function(id) {
    return document.getElementById(id);
}

//declare and initialize array
var game = ["CORVETTE", "MUSTANG", "BEATLE", "FORD","LAMBORGHINI","PRIUS","TESLA","FOCUS","CHARGER","CHALLENGER","VOLKSWAGEN","CHEVY","DODGE","TOYOTA", "CAMRY"]

var choice = Math.floor(Math.random()*15);
var images = ["img10.png", "img09.png", "img08.png", "img07.png", "img06.png", "img05.png", "img04.png", "img03.png", "img02.png", "img01.png", "img00.png"]
var answer = game[choice];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 10;
var output="";
var userLetter="";



var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";

}

var submit = function()
{
    output = "";
    userLetter=$("letter").value;
    $("letter").value ="";
var found = false;

    for (var c= 0; c< answer.length; c++)
    {
        if (userLetter.toUpperCase() == letters[c])
        {

            display[c] = userLetter.toUpperCase();
            win--;
            found  = true; 
        }
        output = output + display[c] + " ";

    }
    document.getElementById("game").innerHTML = output;
    output="";
    
    if (!found) {
    attemptsLeft--;
    }
    if (win < 1)
    {
        document.getElementById("guesses").innerHTML ="YOU WIN!!!";
    }
    else if (attemptsLeft < 1)
    {
        document.getElementById("guesses").innerHTML ="YOU LOSE!!!";
    }
    else
    {

        document.getElementById("guesses").innerHTML ="You have " + attemptsLeft + " guesses left";
    }
document.getElementById("image").src = "images/" + images[attemptsLeft];
}


window.onload = function()
{
    setup();
    $("submit").onclick = submit;
}