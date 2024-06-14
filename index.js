let userChoice
let choices = document.querySelectorAll('.option');
choices.forEach((choices,index) => choices.addEventListener('click',(e) =>{
    let state = document.getElementById('scissor');
    if(state.style.display ==='none')
    {
        e.preventDefault();
        e.stopPropagation();   
    }
    else
    {
        let choicesTitle = document.getElementsByClassName('choices-title');
        choicesTitle[0].style.display = 'flex';
        let Choices = ['paper','rock','scissor'];
        userChoiceIndex = index;

        userChoice = Choices[userChoiceIndex];
        let computerChoiceIndex  = Math.floor(Math.random() *Choices.length);
        let computerChoice = Choices[computerChoiceIndex];
        document.getElementById('paper-img').src = 'Images/'+userChoice+'.jpg';
        document.getElementById('rock-img').src = 'Images/'+computerChoice+'.jpg';
        document.getElementById('scissor').style.display = 'none';
        let userPoint = document.getElementsByClassName('user-point')[0];
        let computerPoint = document.getElementsByClassName('computer-point')[0];
        let winnerName = document.getElementsByClassName('winner-name')[0];

        if((userChoice === 'rock' && computerChoice ==='scissor') ||(userChoice === 'scissor' && computerChoice ==='paper')||(userChoice === 'paper' && computerChoice ==='rock'))
        {
            winnerName.innerHTML = 'You Wins!';
            userPoint.innerHTML = parseInt(userPoint.innerHTML)+1;
        }
        else if((userChoice === 'paper' && computerChoice ==='scissor') || (userChoice === 'rock' && computerChoice ==='paper') || (userChoice === 'scissor' && computerChoice ==='rock'))
        {
            winnerName.innerHTML = 'Computer Wins!';
            computerPoint.innerHTML = parseInt(computerPoint.innerHTML)+1;
        }
        else
        {
            winnerName.innerHTML = 'Match Draw!';
        }
    }

}));
document.getElementsByClassName('reset-btn')[0].addEventListener('click',function(){
    let winnerName = document.getElementsByClassName('winner-name')[0];
    winnerName.innerHTML = "";
    let choicesTitle = document.getElementsByClassName('choices-title');
    choicesTitle[0].style.display = 'none';
    document.getElementById('paper-img').src = 'Images/paper.jpg';
    document.getElementById('rock-img').src = 'Images/rock.jpg';
    document.getElementById('scissor').style.display = 'flex';
    document.getElementsByClassName('user-point')[0].innerHTML = "0";
    document.getElementsByClassName('computer-point')[0].innerHTML = "0";
});

document.getElementsByClassName('play-again-btn')[0].addEventListener('click',function(){
    let winnerName = document.getElementsByClassName('winner-name')[0];
    winnerName.innerHTML = "";
    let choicesTitle = document.getElementsByClassName('choices-title');
    choicesTitle[0].style.display = 'none';
    document.getElementById('paper-img').src = 'Images/paper.jpg';
    document.getElementById('rock-img').src = 'Images/rock.jpg';
    document.getElementById('scissor').style.display = 'flex';
});