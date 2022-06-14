
            let playerScore = 0;
            let botScore = 0;
            const getUserChoice = () => {
                let userChoice = prompt("Please enter selection: Rock, Paper, or Scissors");
                userChoice = userChoice.toLowerCase();               
                if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
                    return userChoice;
                } else {
                    console.log("Error");                  
                }
            };

            const getComputerChoice = () => {
                randomNumber = Math.floor(Math.random() * 3);
                switch (randomNumber) {
                    case 0:
                        return "rock";
                    case 1:
                        return "paper";
                    case 2:
                        return "scissors";
                    }
            };

            const determineWinner = (userChoice, computerChoice) => {
                if (userChoice === computerChoice) {
                    return "Game is a tie";
                };
                if (userChoice === "rock") {
                    if (computerChoice === "paper") {
                        return "Bot wins!";
                        botScore++;
                    } else {
                        return "You win!";
                        playerScore++;
                    }
                };
                if (userChoice === "paper") {
                    if (computerChoice === "scissors") {
                        return "Bot wins!";
                        botScore++;
                    } else {
                        return "You win!";
                        playerScore++;
                    }
                };
                if (userChoice === "scissors") {
                    if (computerChoice === "rock") {
                        return "Bot wins!";
                        botScore++;
                    } else {
                        return "You win!";
                        playerScore++;
                    }
                };
            };

            const playRound = () => {
                const userChoice = getUserChoice();
                const computerChoice = getComputerChoice();
                console.log('You threw: ' + userChoice);
                console.log('Computer threw: ' + computerChoice);
                console.log(determineWinner(userChoice, computerChoice));
            };
                
            
            // const game = () => {
            //     for (let i = 0; i < 5; i++) {
            //         playRound();
            //     }
            // };

            // game();            
