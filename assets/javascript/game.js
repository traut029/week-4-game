//Objects of playable characters
var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    attackPower: 5,
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
    attackPower: 10,
    counterAttackPower: 20
}

var darthMaul = {
    name: "Darth Maul",
    health: 180,
    attackPower: 15,
    counterAttackPower: 25
}

//Global Variables
var playerChosenBoolean=false;
var enemyChosenBoolean=false;
var playerChosen="none";
var enemyChosen="none";
var enemiesDefeated=0;

var attackArray = [lukeSkywalker.attackPower, obiWanKenobi.attackPower, darthSidious.attackPower, darthMaul.attackPower];
var healthArray = [lukeSkywalker.health, obiWanKenobi.health, darthSidious.health, darthMaul.health];
var counterAttackArray = [lukeSkywalker.counterAttackPower, obiWanKenobi.counterAttackPower, darthSidious.counterAttackPower, darthMaul.counterAttackPower];
var nameArray = [lukeSkywalker.name, obiWanKenobi.name, darthSidious.name, darthMaul.name];
var divArray = ["luke","obi","sidious","maul"]

//Make sure the page loads before doing anything
$(document).ready(function () {

 

    //Main Process
        showHP();
        buttonErrors();
        chooseCharacter();
        pickEnemy();
        attack();
        restart();
        winner();
})










   //Show starting HP of characters and hide restart button
function showHP(){
    $("#lukeHP").text(lukeSkywalker.health);
    $("#obiHP").text(obiWanKenobi.health);
    $("#sidiousHP").text(darthSidious.health);
    $("#maulHP").text(darthMaul.health);
    $("#restartButton").hide();
    }







    //Make Characters get a green border when selected, indicating it is the player character, while turning the rest red, indicating they are enemies. Also moves characters to player or enemy sections.
function chooseCharacter (){
    
    $("#luke").click(function () {
        if(playerChosenBoolean==false){
            $("#luke").addClass("player");
            $("#luke").appendTo("#playerDiv");
            $("#obi").addClass("enemy");
            $("#obi").appendTo("#enemyDiv");
            $("#sidious").addClass("enemy");
            $("#sidious").appendTo("#enemyDiv");
            $("#maul").addClass("enemy");
            $("#maul").appendTo("#enemyDiv");
            playerChosenBoolean=true;
            playerChosen=0;
        }
    })

    $("#obi").click(function () {
        if(playerChosenBoolean==false){
            $("#obi").addClass("player");
            $("#obi").appendTo("#playerDiv");
            $("#luke").addClass("enemy");
            $("#luke").appendTo("#enemyDiv");
            $("#sidious").addClass("enemy");
            $("#sidious").appendTo("#enemyDiv");
            $("#maul").addClass("enemy");
            $("#maul").appendTo("#enemyDiv");
            playerChosenBoolean=true;
            playerChosen=1;
        }
    })

    $("#sidious").click(function () {
        if(playerChosenBoolean==false){
            $("#sidious").addClass("player");
            $("#sidious").appendTo("#playerDiv");
            $("#luke").addClass("enemy");
            $("#luke").appendTo("#enemyDiv");
            $("#obi").addClass("enemy");
            $("#obi").appendTo("#enemyDiv");
            $("#maul").addClass("enemy");;
            $("#maul").appendTo("#enemyDiv");
            playerChosenBoolean=true;
            playerChosen=2;
        }
    })

    $("#maul").click(function () {
        if(playerChosenBoolean==false){
            $("#maul").addClass("player");
            $("#maul").appendTo("#playerDiv");
            $("#luke").addClass("enemy");
            $("#luke").appendTo("#enemyDiv");
            $("#obi").addClass("enemy");
            $("#obi").appendTo("#enemyDiv");
            $("#sidious").addClass("enemy");
            $("#sidious").appendTo("#enemyDiv");
            playerChosenBoolean=true;
            playerChosen=3;
        }
    })
}
       
    //Moves an enemy to the defender section
function pickEnemy (){
    $("#luke").click(function () {
        if(enemyChosenBoolean==false && playerChosenBoolean==true && playerChosen!=0 && enemyChosen=="none"){   
            $("#luke").appendTo("#defender");
            enemyChosen=0;
            $("#attackText").text("");
            $("#counterAttackText").text("");
        }
    })
    $("#obi").click(function () {
        if(enemyChosenBoolean==false && playerChosenBoolean==true && playerChosen!=1 && enemyChosen=="none"){     
            $("#obi").appendTo("#defender");
            enemyChosen=1;
            $("#attackText").text("");
            $("#counterAttackText").text("");
        }
    })
    $("#sidious").click(function () {
        if(enemyChosenBoolean==false && playerChosenBoolean==true && playerChosen!=2 && enemyChosen=="none"){ 
            $("#sidious").appendTo("#defender");
            enemyChosen=2;
            $("#attackText").text("");
            $("#counterAttackText").text("");
        }
    })
    $("#maul").click(function () {
        if(enemyChosenBoolean==false && playerChosenBoolean==true && playerChosen!=3 && enemyChosen=="none"){    
            $("#maul").appendTo("#defender");
            enemyChosen=3;
            $("#attackText").text("");
            $("#counterAttackText").text("");
        }
    })
}
//Perform attack calculations and print attack text
function attack(){
 
    $("#attackButton").click(function(){

        if(enemyChosen!="none" && playerChosen!="none"){
            //prints attack text
            $("#attackText").text("You attacked " + nameArray[enemyChosen] + " for " + attackArray[playerChosen] + " damage.");
            $("#counterAttackText").text(nameArray[enemyChosen] + " attacked you back for " + counterAttackArray[enemyChosen] + " damage.")
            //does health and damage calculations
            healthArray[enemyChosen]=healthArray[enemyChosen]-attackArray[playerChosen];
            healthArray[playerChosen]=healthArray[playerChosen]-counterAttackArray[enemyChosen];
            attackArray[playerChosen]=attackArray[playerChosen]+attackArray[playerChosen];
            //redisplays new health values
            $("#lukeHP").text(healthArray[0]);
            $("#obiHP").text(healthArray[1]);
            $("#sidiousHP").text(healthArray[2]);
            $("#maulHP").text(healthArray[3]);
            //if you beat enemy remove them and allow for a new enemy to be picked
            if(healthArray[enemyChosen]<1 && enemyChosen==0) {  
                $("#luke").remove();
                $("#attackText").text("You have defeated " + nameArray[enemyChosen] + ", you can now choose to fight another enemy.");
                $("#counterAttackText").text("");
                enemyChosen="none";        
                enemiesDefeated++;
                console.log(enemiesDefeated);
            }
            if(healthArray[enemyChosen]<1 && enemyChosen==1) {  
                $("#obi").remove();
                $("#attackText").text("You have defeated " + nameArray[enemyChosen] + ", you can now choose to fight another enemy.");
                $("#counterAttackText").text("");
                enemyChosen="none";        
                enemiesDefeated++;
                console.log(enemiesDefeated);
            }
            if(healthArray[enemyChosen]<1 && enemyChosen==2) {  
                $("#sidious").remove();
                $("#attackText").text("You have defeated " + nameArray[enemyChosen] + ", you can now choose to fight another enemy.");
                $("#counterAttackText").text("");
                enemyChosen="none";        
                enemiesDefeated++;
                console.log(enemiesDefeated);
            }
            if(healthArray[enemyChosen]<1 && enemyChosen==3) {  
                $("#maul").remove();
                $("#attackText").text("You have defeated " + nameArray[enemyChosen] + ", you can now choose to fight another enemy.");
                $("#counterAttackText").text("");
                enemyChosen="none";        
                enemiesDefeated++;
                console.log(enemiesDefeated);
            }
            //if your hp goes to zero give game over and a restart button, disable attack button
            if(healthArray[playerChosen]<1){
            $("#attackText").text("You have been defeated... GAME OVER!!!");
            $("#counterAttackText").text("");
            $("#restartButton").show();
            $("#attackButton").prop('disabled', true);
            }
        }
    })
}









//restarts game
function restart(){
    $("#restartButton").click(function(){
        location.reload();
    })
}


//Displays text if a player or enemy isn't selected
function buttonErrors(){
    $("#attackButton").click(function(){
        if(playerChosen=="none")
            $("#attackText").text("Choose a character to play.");
        if(playerChosen!="none" && enemyChosen=="none")
            $("#attackText").text("There is no enemy here.");
    })
}

//If all enemies are defeated display the you win text and disable attack button
function winner(){
    $("#attackButton").click(function(){
        if(enemiesDefeated==3 && healthArray[playerChosen]>0){
            $("#attackText").text("You won!!! GAME OVER!!!");
            $("#counterAttackText").text("");
            $("#restartButton").show();
            $("#attackButton").prop('disabled', true);
        }
    })
}











