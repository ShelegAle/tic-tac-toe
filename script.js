
let btnGame = document.querySelector('.game_start'),
    tablePlayer = document.querySelector('.table')

btnGame.addEventListener('click', start)

function start() {
    tablePlayer.removeEventListener('click', start) 
    
    let table = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']],
        playerGo = document.querySelector('.num_player'),
        player = 1

    opr(table)

    btnGame.innerHTML = 'Начать заново'
    playerGo.innerHTML = `Ходит игрок ${player}`

    function nextPlayer() {
        if (player === 1) player = 2
        else player = 1
        playerGo.innerHTML = `Ходит игрок ${player}`
    }

    function opr(arr, i) {
        s= 0
        for (let k = 0; k < arr.length; k++) {
            for (let j = 0; j < arr[k].length; j++) {
            s += 1
            document.querySelector(`#t${s}`).innerHTML = arr[k][j]      
        }
    }}

    tablePlayer.addEventListener('click', (event) => {
        let zn = event.target
        if (zn.innerHTML === 'X' || zn.innerHTML === 'O') return
        else if (player === 1) {
            zn.innerHTML = 'X'
            nextPlayer()
            win()}
        else {zn.innerHTML = 'O'    
            nextPlayer()
            win()}
        })
    
    function win() {
        if(
            document.querySelector('#t1').innerHTML === document.querySelector('#t2').innerHTML && document.querySelector('#t1').innerHTML === document.querySelector('#t3').innerHTML && document.querySelector('#t1').innerHTML != ' ' ||
            document.querySelector('#t4').innerHTML === document.querySelector('#t5').innerHTML && document.querySelector('#t4').innerHTML === document.querySelector('#t6').innerHTML && document.querySelector('#t4').innerHTML != ' ' ||
            document.querySelector('#t7').innerHTML === document.querySelector('#t8').innerHTML && document.querySelector('#t7').innerHTML === document.querySelector('#t9').innerHTML && document.querySelector('#t7').innerHTML != ' ' ||
            document.querySelector('#t1').innerHTML === document.querySelector('#t4').innerHTML && document.querySelector('#t1').innerHTML === document.querySelector('#t7').innerHTML && document.querySelector('#t1').innerHTML != ' ' ||
            document.querySelector('#t2').innerHTML === document.querySelector('#t5').innerHTML && document.querySelector('#t2').innerHTML === document.querySelector('#t8').innerHTML && document.querySelector('#t2').innerHTML != ' ' ||
            document.querySelector('#t3').innerHTML === document.querySelector('#t6').innerHTML && document.querySelector('#t3').innerHTML === document.querySelector('#t9').innerHTML && document.querySelector('#t3').innerHTML != ' ' ||
            document.querySelector('#t1').innerHTML === document.querySelector('#t5').innerHTML && document.querySelector('#t1').innerHTML === document.querySelector('#t9').innerHTML && document.querySelector('#t1').innerHTML != ' ' ||
            document.querySelector('#t3').innerHTML === document.querySelector('#t5').innerHTML && document.querySelector('#t3').innerHTML === document.querySelector('#t7').innerHTML && document.querySelector('#t3').innerHTML != ' ' )
        {
            nextPlayer()
            playerGo.innerHTML = `Игрок ${player} выиграл!!!`
            tablePlayer.addEventListener('click', start) 
        }
    }

}








