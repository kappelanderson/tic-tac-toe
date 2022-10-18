let blocksObj = {
    0:'', 1:'', 2:'', 
    3:'', 4:'', 5:'', 
    6:'', 7:'', 8:'',
}

let turn = 'X'
let changeturn = ()=>{
    if(turn == 'X'){
        turn = 'O'
    }
    else{
        turn = 'X'
    }
}
let checkWinner = ()=>{

    if(blocksObj[0] === blocksObj[1] && blocksObj[0] === blocksObj[2] && blocksObj[0]){
       return true
    }
    else if(blocksObj[3] === blocksObj[4] && blocksObj[4] === blocksObj[5] && blocksObj[3]){
        return true
    }
    else if(blocksObj[6] === blocksObj[7] && blocksObj[6] === blocksObj[8] && blocksObj[6]){
        return true
    }
    else if(blocksObj[0] === blocksObj[3] && blocksObj[3] === blocksObj[6] && blocksObj[0]){
        return true
    }
    else if(blocksObj[1] === blocksObj[4] && blocksObj[4] === blocksObj[7] && blocksObj[1]){
        return true
    }
    else if(blocksObj[2] === blocksObj[5] && blocksObj[5] === blocksObj[8] && blocksObj[2]){
        return true
    }
    else if(blocksObj[0] === blocksObj[4] && blocksObj[4] === blocksObj[8] && blocksObj[0]){
        return true
    }
    else if(blocksObj[2] === blocksObj[4] && blocksObj[4] === blocksObj[6] && blocksObj[2]){
        return true
    }
    else{
        return false
    }
    
}
let blocks = document.querySelectorAll('.block')

blocks.forEach((block) => {
    block.addEventListener('click', ()=>{
        block.innerHTML = turn
        blocksObj[block.id] = turn
        if(checkWinner()){
            document.querySelector('p').innerText = `${turn} is the Winner!`
        }
        else{
        changeturn()
        document.querySelector('p').innerText = `Player's ${turn} turn`
        }
        
    }, {once:true})
})

document.querySelector('p').innerText = `Player's ${turn} turn`

// RESET BUTTON
document.querySelector('button').addEventListener('click', ()=>{
    document.querySelector('p').innerText = `Player's ${turn} turn`

    for(let block in blocksObj){
        blocksObj[block] = ''
    }
    blocks.forEach(block => block.innerText = '')
    blocks.forEach((block) => {
        block.addEventListener('click', ()=>{
            block.innerHTML = turn
            blocksObj[block.id] = turn
            if(checkWinner()){
                document.querySelector('p').innerText = `${turn} is the Winner!`
            }
            else{
            changeturn()
            document.querySelector('p').innerText = `Player's ${turn} turn`
            }
            
        }, {once:true})
    })
    
})