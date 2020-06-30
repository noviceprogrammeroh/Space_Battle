//objects for the game.


let game = {

  round: 0,

  targetShip: 0,

  userResponse: "",

};




// OBJECT for the Ship


let ussSchwar = 
{

  name: "USS Schwartznegger",

  hull: 20,

  firePower: 5,

  accuracy: 0.7,

  
attack: function () 
{

    // attack function using math.random

    let attackChance = Math.random();

    
if (attackChance <= this.accuracy) {

      return true;


    } 

else {

      return false;

    }

  },

};







// CLASS & constructor for Alien Ship


class AlienShip 

{



  constructor(name, hull, firePower, accuracy) 

{

    this.name = name;

    this.hull = hull;

    this.firePower = firePower;

    this.accuracy = accuracy;

}





  attack() 
{

    //Attack function using math.random

    let attackChance = Math.random();


    if (attackChance <= this.accuracy)
       {

         return true;

        } 

    else {

      return false;

         }


       }

}






// this code will make Alien Arrays  Loop through the values to configure ship

let alienShips = []; // alien ships

let alienHullValuesArr = [3, 4, 5, 6]; // alien hull values

let alienFirePowerValuesArr = [2, 3, 4]; // alien fire power values

let alienAccuracyValues = [0.6, 0.7, 0.8]; // alien accuracy values




// Build Alien Ship Function. Create a For loop that uses the arrays above using math.floor & math.random


let createAlienShips = () => {

  for (let i = 0; i < 6; i++) {

    //Iterate 6 values

    let name = "Alien Ship " + (i + 1);

    let hull = alienHullValuesArr[Math.floor(Math.random() * 4)];

    let firePower = alienFirePowerValuesArr[Math.floor(Math.random() * 3)];

    let accuracy = alienAccuracyValues[Math.floor(Math.random() * 3)];


    alienShips[i] = new AlienShip(name, hull, firePower, accuracy); //The results will be pushed into a new array using the same parameters

  }

};




//********************* This code is the fight code******************************************** 




let shipsBattle = (ship1, ship2) => {

  // put the ships into an array

  let ships = [ship1, ship2];

  let attack = false;

  let attacking = 0;

  let beingAttacked = 1;

  let temp;

  console.log("%c ***************** FIGHT ***********************", "font-size: 30px");

  


while (ships[beingAttacked].hull > 0)

 {

    //While the hull is greater than 0 Keep attacking

    

// game round part of the code



if (ships[beingAttacked].hull > 0)

{

      // Console log the attack information

      
      console.log("\n");

      console.log(`%c ${ships[attacking].name} attacked ${ships[beingAttacked].name} `,

        "color: gray; border: 1px solid grey; font-size: 18px;");



      // Generate the attack on the enemy ship

      attack = ships[attacking].attack();



if (attack === true) 
     {

        ships[beingAttacked].hull -= ships[attacking].firePower; //Increase Fire power

        console.log(`%c Attack Successful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull} `,

          "color: green; font-weight: bold; font-size: 16px;  text-align: center;");

      } 



else {

        console.log(`%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull} `,

          "color: red; font-size: 16px; text-align: center;"

        );

      }



      // Check if the ship being attacked is still alive


if (ships[beingAttacked].hull <= 0) 
{

        console.log(`%c${ships[beingAttacked].name} has been destroyed`,

          "color: red; border: 1px solid grey; font-size: 16px; text-align: center;");





if (ships[beingAttacked] === ussSchwar) {

          ///If the USS Ship is being attacked and is destroyed THEN we can alert the player that the Game is Over

          alert("Game Over! Thanks for playing!");

        } 



else if (

          ships[beingAttacked].name === alienShips[alienShips.length - 1].name

        ) {

          alert(`%c${ships[beingAttacked].name} destroyed!\nAlien fleet has been destroyed!\nyou have been victorious`,

            "color: green;"

          );

        } //If USS destroys alien fleet, then alert player of victory

        

else {

          game.userResponse = prompt(`${alienShips[game.targetShip].name} destroyed!!\n${ussSchwar.name} Hull: ${

              ussSchwar.hull

            }\nWould you like to attack the next ship or retreat from battle?`,

            ""

          );



          game.targetShip += 1; // this line of the code will prompt the player if the want to continue or retreat

          checkUserPrompt();

          return;

        }

      } 



else {

       

        temp = attacking;   // this line of code creates a temporary variable to switch the attacking ships

        attacking = beingAttacked;

        beingAttacked = temp;

      }

    }

  }

};




//  this section is fo the Function to check user prompts

let checkUserPrompt = () => {

let responseUpperCase = game.userResponse.toUpperCase();

let responseLowerCase = game.userResponse.toLowerCase();
  
if (responseLowerCase === "attack")

{
    shipsBattle(ussSchwar, alienShips[game.targetShip]);

}


if (responseUpperCase === "ATTACK") {
    

    shipsBattle(ussSchwar, alienShips[game.targetShip]);

  }


else if (responseUpperCase = 'RETREAT')
 {

    alert('Game Over! I will be waiting for you.')
}

else if (responseLowerCase === "attack")

{
    shipsBattle(ussSchwar, alienShips[game.targetShip]);

}


};




let startGame = () => {

  // Build alien fleets

  createAlienShips();




  game.userResponse = prompt("Alien fleet approaching\nWould you like to ATTACK the first ship or RETREAT?",

    "");

  checkUserPrompt();

};




//  this section starts or Initializes the game

startGame();
