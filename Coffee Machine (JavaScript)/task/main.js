// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let flag = true;

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

const askAction = () => {
    console.log(`Write action (buy, fill, take, remaining, exit):`)
    let action = input();
    switch (action) {
        case 'buy':
            actionBuy();
            break;
        case 'fill':
            actionFill();
            break;
        case 'take':
            actionTake();
            break;
        case 'remaining':
            printMessage();
            break;
        case 'exit':
            flag = false;
            break;
    }
};

const printMessage = () => {
    console.log(`The coffee machine has:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${beans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money`);
};

const actionBuy = () => {
    console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`)
    let code = input();
    const check = (cWater, cMilk, cBeans, cCups, cMoney) => {
        if (cWater > water) return 'Sorry, not enough water!';
        if (cMilk > milk) return 'Sorry, not enough milk!';
        if (cBeans > beans) return 'Sorry, not enough coffee beans!';
        if (cCups > cups) return 'Sorry, not enough cups!';
        water -= cWater;
        milk -= cMilk;
        beans -= cBeans;
        cups -= cCups;
        money += cMoney;
        return 'I have enough resources, making you a coffee!';
    };
    switch (code) {
        case '1':
            console.log(check(250, 0, 16, 1, 4));
            break;
        case '2':
            console.log(check(350, 75, 20, 1, 7));
            break;
        case '3':
            console.log(check(200, 100, 12, 1, 6));
            break;
        case 'back':
            break;
    }
}

const actionFill = () => {
    water += Number(input('Write how many ml of water you want to add: '));
    milk += Number(input('Write how many ml of milk you want to add: '));
    beans += Number(input('Write how many grams of coffee beans you want to add: '));
    cups += Number(input('Write how many disposable cups you want to add: '));
}

const actionTake = () => {
    console.log(`I gave you $${money}`)
    money = 0;
}

while (flag) {
    askAction();
}
