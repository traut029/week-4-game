//Objects of playable characters
var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    attackPower: 8,
    counterAttackPower: 5
}
var obiWanKenobi = {
    name: "Obi-Wan Kenobi",
    health: 120,
    attackPower: 8,
    counterAttackPower: 10
}

var darthSidious = {
    name: "Darth Sidious",
    health: 150,
    attackPower: 8,
    counterAttackPower: 20
}

var darthMaul = {
    name: "Darth Maul",
    health: 180,
    attackPower: 8,
    counterAttackPower: 25
}

//Global Variables
var playerChosen=false;
var enemyPicked=false;





//Make sure the page loads before doing anything
$(document).ready(function () {

    //Show HP of characters
    $("#lukeHP").text(lukeSkywalker.health);
    $("#obiHP").text(obiWanKenobi.health);
    $("#sidiousHP").text(darthSidious.health);
    $("#maulHP").text(darthMaul.health);

    //Main Process

        chooseCharacter();
        if(playerChosen=true){

        }

})









    //Make Characters get a green border when selected, indicating it is the player character, while turning the rest red, indicating they are enemies.
function chooseCharacter (){
    
    $("#luke").click(function () {
        if(playerChosen==false){
            $("#luke").addClass("player");
            $("#luke").appendTo("#playerDiv");
            $("#obi").addClass("enemy");
            $("#obi").appendTo("#enemyDiv");
            $("#sidious").addClass("enemy");
            $("#sidious").appendTo("#enemyDiv");
            $("#maul").addClass("enemy");
            $("#maul").appendTo("#enemyDiv");
            playerChosen=true;
        }
    })

    $("#obi").click(function () {
        if(playerChosen==false){
            $("#obi").addClass("player");
            $("#obi").appendTo("#playerDiv");
            $("#luke").addClass("enemy");
            $("#luke").appendTo("#enemyDiv");
            $("#sidious").addClass("enemy");
            $("#sidious").appendTo("#enemyDiv");
            $("#maul").addClass("enemy");
            $("#maul").appendTo("#enemyDiv");
            playerChosen=true;
        }
    })

    $("#sidious").click(function () {
        if(playerChosen==false){
            $("#sidious").addClass("player");
            $("#sidious").appendTo("#playerDiv");
            $("#luke").addClass("enemy");
            $("#luke").appendTo("#enemyDiv");
            $("#obi").addClass("enemy");
            $("#obi").appendTo("#enemyDiv");
            $("#maul").addClass("enemy");;
            $("#maul").appendTo("#enemyDiv");
            playerChosen=true;
        }
    })

    $("#maul").click(function () {
        if(playerChosen==false){
            $("#maul").addClass("player");
            $("#maul").appendTo("#playerDiv");
            $("#luke").addClass("enemy");
            $("#luke").appendTo("#enemyDiv");
            $("#obi").addClass("enemy");
            $("#obi").appendTo("#enemyDiv");
            $("#sidious").addClass("enemy");
            $("#sidious").appendTo("#enemyDiv");
            playerChosen=true;
        }
    })
}
       
function pickEnemy(){
    if(enemyPicked===false){
        $("#luke").click(function () {
        

        }
    }





}















