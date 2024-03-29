let blocksObj = {
    0:'', 1:'', 2:'', 
    3:'', 4:'', 5:'', 
    6:'', 7:'', 8:'',
}

// Game Flow >>> getTurn // Change Turn // checkwinner (MODULE PATTERN)
const gameFlow = (() => {
    let turn = 'X'
    const getTurn = () => {
        return turn
    };
    const changeturn = () => {
        if(turn === 'X'){
            turn = 'O'
        }
        else{
            turn = 'X'
        }
        textDisplay.playerTurnText()

    };
    const checkwinner = () =>{
        if(blocksObj[0] === blocksObj[1] && blocksObj[0] === blocksObj[2] && blocksObj[0]){
            textDisplay.winnerText()
            return true
         }
         else if(blocksObj[3] === blocksObj[4] && blocksObj[4] === blocksObj[5] && blocksObj[3]){
            textDisplay.winnerText()
             return true
         }
         else if(blocksObj[6] === blocksObj[7] && blocksObj[6] === blocksObj[8] && blocksObj[6]){
            textDisplay.winnerText()
             return true
         }
         else if(blocksObj[0] === blocksObj[3] && blocksObj[3] === blocksObj[6] && blocksObj[0]){
            textDisplay.winnerText()
             return true
         }
         else if(blocksObj[1] === blocksObj[4] && blocksObj[4] === blocksObj[7] && blocksObj[1]){
            textDisplay.winnerText()
             return true
         }
         else if(blocksObj[2] === blocksObj[5] && blocksObj[5] === blocksObj[8] && blocksObj[2]){
            textDisplay.winnerText()
             return true
         }
         else if(blocksObj[0] === blocksObj[4] && blocksObj[4] === blocksObj[8] && blocksObj[0]){
            textDisplay.winnerText()
             return true
         }
         else if(blocksObj[2] === blocksObj[4] && blocksObj[4] === blocksObj[6] && blocksObj[2]){
            textDisplay.winnerText()
             return true
         }
         else{
             return false
         }
    };

    return {
      changeturn,
      checkwinner,
      getTurn,
    };
  })()

  // Text Display (MODULE PATTERN)
  const textDisplay = (() => {

    const playerTurnText = () => {
        document.querySelector('p').innerText = `Player's ${gameFlow.getTurn() == "X" ? "Flamengo" : "Real Madrid"} turn`

        
        
    };
    const winnerText = () => {

        document.querySelector('p').innerText = `${gameFlow.getTurn() == "X" ? "Flamengo" : "Real Madrid"} is the Winner!`

    };


    return {
      winnerText,
      playerTurnText,
    };
  })()

  // BUTTONS
  const displayBlocks = (() => {

    let blocks = document.querySelectorAll('.block')


    // CLEAN THE BLOCKS OBJECT AND THE BLOCK DISPLAY

    const clean = () => {
        for(let block in blocksObj){
            blocksObj[block] = ''
        }
        blocks.forEach(block => block.innerText = '')

        
        
    };
    const active = () => {
        //set first turn display
        textDisplay.playerTurnText()
        
        // Active display blocks
        blocks.forEach((block) => {
            block.addEventListener('click', ()=>{

                //block.innerHTML = gameFlow.getTurn()
                if(gameFlow.getTurn() == 'X'){
                    const flamengo = document.createElement("img");
                    flamengo.src = "https://th.bing.com/th/id/R.4390b2f62becac067c8387fd0adc96dc?rik=rI2s0RR%2bYE1eEQ&pid=ImgRaw&r=0";
                    block.appendChild(flamengo);
                }
                else{
                    const realmadrid = document.createElement("img");
                    realmadrid.src = "https://th.bing.com/th/id/R.c741810f9c33cf1dcc57c99d72e0a88f?rik=cpqlbe4biPOuAA&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2018%2f03%2freal_madrid_cub_de_futbol-logo.png&ehk=0leBxEk7hblAGXb64NVnUz83tfO1n%2bVtT9C3rBadqUM%3d&risl=&pid=ImgRaw&r=0";
                    block.appendChild(realmadrid);
                }
                blocksObj[block.id] = gameFlow.getTurn()

                if(!gameFlow.checkwinner()){
                    gameFlow.changeturn()
                }
                
            }, {once:true})})

    };


    return {
      clean,
      active,
      
    };
  })()




// On Load Active blocks
document.addEventListener('load', displayBlocks.active())

// RESET BUTTON
document.querySelector('button').addEventListener('click', ()=>{

    displayBlocks.clean()

    // Active Blocks again
    displayBlocks.active()

    
})