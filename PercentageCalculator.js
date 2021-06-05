//takes in 1RM and calculates percentages of that
//let lbs = 10;
let kG;
let choice = 1;
let readline = require('readline');
const prompt = require('prompt-sync')({sigint: true});
var oneRM;


//keep prompting menu until user enters 4 for exit
while (choice != 4){
  displayMenu();
  choice = prompt('');
  choice = Number(choice);
  getChoice(choice);
}  


//takes the user's input from the menu and sends it to the corresponding function
function getChoice(choice){
  switch(choice){
    case 1:
      console.log(`1. Calculate percentages from a working max\nEnter your working max`);
      calculatePercentages();  
    break;

    case 2:
      console.log(`2. Convert lbs to KG\nEnter weight in lbs`);
      convertLbsToKilos();
    break;
      
    case 3:
      console.log(`3. Convert KG to lbs\nEnter weight in KG`);
      convertLbsToKilos();
    break;
      
    case 4:
      console.log(`Exiting program... Have a great day!`);
    break;
      
    default:
      console.log(`Not a valid choice`);

    }  
}
  
//calculate percentages of oneRM ranging from 65%-95% in 5% incrememnts
function calculatePercentages()
  {
    //oneRM = prompt(`Enter your working max\n`);
    oneRM = prompt(``);
    oneRM = Number(oneRM);
    //console.log(`\n`);
    for (let i=65; i<=95; i+=5) {
      weight = i*.01*oneRM;
      weight = Math.round(10*weight)/10;
      console.log(i+`% of ${oneRM} KG = ${weight} KG`); 
     
    }
  }

//converts lbs to KG and returns the weight in KG
function convertLbsToKilos(){
  //lbs = prompt(`Enter weight in lbs\n`);
  lbs = prompt(``);
  lbs = Number(lbs);
  kG = lbs/2.2;
  kG = Math.round(10*kG)/10;
  console.log(`${lbs} lbs to KG is ${kG} KG`);
}

//converts KG to lbs and returns weight in lbs
function convertKGToLbs(kG){
  //kG = prompt(`Enter weight in KG\n`);
  kG = prompt(``);
  kG = Number(kG);
  lbs = kG*2.2;
  lbs = Math.round(10*lbs)/10;
  console.log(`${KG} KG to lbs is ${lbs} lbs`);
}

//display menu
function displayMenu(){
  console.log(
    `\nPlease choose from the menu below. By default, this system uses KG.
    1. Calculate percentages from a working max
    2. Convert lbs to KG
    3. Convert KG to lbs
    4. EXIT`
  );
}