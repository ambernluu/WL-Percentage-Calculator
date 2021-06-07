//takes in 1RM and calculates percentages of that
let readline = require('readline');

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//display menu
const displayMenu = () => {
  rli.question(`\nPlease choose from the menu below. By default, this system uses KG.
  1. Calculate percentages from a working max
  2. Convert lbs to KG
  3. Convert KG to lbs
  4. EXIT\n`, (answer) => {
    getChoice(answer);
  });
}

//takes the user's input from the menu and sends it to the corresponding function
const getChoice = (choice) => {
  switch(choice){
    case '1':
      calculatePercentages();  
    break;

    case '2':
      convertLbsToKilos();
    break;
      
    case '3':
      convertKGToLbs();
    break;
      
    case '4':
      console.log(`Exiting program... Have a great day!`);
      process.exit();
    break;
      
    default:
      console.log(`Not a valid choice`);

    }  
}

//calculate percentages of oneRM ranging from 65%-95% in 5% incrememnts
const calculatePercentages = () => {
  rli.question(`Enter your working max\n`, (answer) => {
    const oneRM = Number(answer);
    for (let i=65; i<=95; i+=5) {
      const weight = Math.round(10*(i*.01*oneRM))/10;
      console.log(i+`% of ${oneRM} KG = ${weight} KG`); 
    }
    rli.close();
  });
};

//converts lbs to KG and returns the weight in KG
const convertLbsToKilos = () => {
  rli.question(`Enter weight in lbs\n`, (lbs) => {
    const kG = Math.round(10*(Number(lbs/2.2)))/10;
    console.log(`${lbs} lbs to KG is ${kG} KG`); 
    rli.close();
  });
};

//converts KG to lbs and returns weight in lbs
const convertKGToLbs = () => {
  rli.question(`Enter weight in KG\n`, (kG) => {
    const lbs = Math.round(10*(Number(kG)*2.2))/10;
    console.log(`${kG} KG to lbs is ${lbs} lbs`);
    rli.close();
  });
}

displayMenu();
  