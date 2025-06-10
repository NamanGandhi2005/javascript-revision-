const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"];

// marvel_heroes.push(dc);
// console.log(marvel_heroes);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]);//to access third element in array 

// const all_heroes=marvel_heroes.concat(dc)
// console.log(all_heroes);

//instead of concat we can use spread operator

const all_new_heroes=[...marvel_heroes,...dc];//spread hogya h
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);

console.log(real_another_array);


console.log(Array.isArray("naman"));

console.log(Array.from("naman"));//prints array in charcter spearated

console.log(Array.from({name:"naman"}));//interseting it return empty array from keys 


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]












