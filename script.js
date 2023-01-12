const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const message = document.querySelector('.message');

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {
    dice.style.animation = 'rolling 1s';
    setTimeout(() => {
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                message.innerHTML = 'Tu vas appeler !';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                message.innerHTML = 'Tranquille !';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                message.innerHTML = 'Ca sent pas bon !';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                message.innerHTML = 'Ca va !';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                message.innerHTML = 'Garde espoir !';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                message.innerHTML = 'Ca devrait le faire !';
                break;
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 850);
}

rollBtn.addEventListener('click', randomDice);