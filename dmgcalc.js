function calculateDamage() {
    // Initialize total damage to 0
    let totalDamage = 0;
  
    // Get user input for dice rolled damage
    let diceInput = document.getElementById("dice-input").value;
    while (diceInput !== "done") {
      let diceInfo = diceInput.split("d");
      let diceNum = parseInt(diceInfo[0]);
      let diceFaces = parseInt(diceInfo[1]);
      for (let i = 0; i < diceNum; i++) {
        let roll = Math.floor(Math.random() * diceFaces) + 1;
        totalDamage += roll;
        console.log("Rolled a " + roll);
      }
      diceInput = prompt("Enter the number and type of dice to roll (e.g. 2d6) or type 'done' when finished:");
    }
  
    // Get user input for static damage
    let staticDamage = document.getElementById("static-damage").value;
    while (staticDamage !== "done") {
      totalDamage += parseInt(staticDamage);
      staticDamage = prompt("Enter the static damage or type 'done' when finished:");
    }
  
    // Get user input for number of turns
    let numTurns = parseInt(document.getElementById("num-turns").value);
  
    // Calculate total damage
    totalDamage *= numTurns;
  
    // Calculate average damage per turn
    let averageDamage = totalDamage / numTurns;
  
    // Display results
    let results = document.getElementById("results");
    results.innerHTML = "<p>The average damage per turn is: " + averageDamage + "</p>" + 
                       "<p>The total damage is: " + totalDamage + "</p>";
  }
  