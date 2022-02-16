"use strict";

const soldier = {
    health: 400,
    armour: 100
};

const john = Object.create(soldier);

console.log(john.armour);

let a = true;

a = !a;

console.log(a);

let arr = [1, 2, 3, 4];

arr.forEach();