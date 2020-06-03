// // counting sheep

// function countSheep(input){
//     if (input === 1){
//        console.log('Another sheep jumps over the fence')
//     }
//     else {
//         countSheep(input - 1)
//         console.log('Another sheep jumps over the fence')
//     }
// }


// power calculator 

// const powerNumber = function(base, exp) {
//     let answer = base;
//     if(exp < 0){
//         return 'exponent should be >= 0';
//     } 
//     if(exp === 1 ){
//         console.log(answer);
//     }
//     else if (exp > 1) {
//         answer = base * answer;
//         exp = exp - 1;
//         // console.log(exp)
//         // console.log(answer)
//      powerNumber(answer, exp);
//     }

   // reverse a string 


const reverse = function(string) {
    if(string.length === 0 ){
        return string;
    } else {
    return string[string.length - 1] + reverse(string.slice(0, string.length -1));
    }
}

const triangle = function(degree){
    if(degree === 0){
        return degree
    }
    return degree + triangle(degree - 1)
}

const seperator = function(string) {
    let seperated = [];
    if(string.length === 0 ){
        return seperated;
    }
    else if (string[0] !== '/') {
        return string[0] + seperator(string.slice(1))
    }
    else if (string[0] === '/') {
        return seperated.push(string) + seperator(string.slice(1))
        }
}

const number = function(seq) {
    if(seq === 0){
        return 0;
    }
    if(seq === 1 ){
        return 1
    }
    else {
        return number(seq - 1) + number(seq - 2)
    }
}

const factorial = function(number){
    if(number === 1 ){
        return number;
    }
    else {
        return number * factorial(number-1);
    }
}

const maze = function(m){
    const right = m[i][n+1];
    const L = m[i][n-1]
    const D = m[i+1]
    if (m[i][n] = "e"){
        return m
    }
    if(m[i][n] === ' '){
        
    }
}

// try right, if right * 
// try down, if down *
// give up
const mazeTest = function(maze, path, currentPosition){
    currentPosition = {
        y,
        x
    }
    const right = maze[currentPosition.y][currentPosition.x+1];
    if ( right !== '*' ){
        return mazeTest(maze, path + 'R', {y:currentPosition.y, x: currentPosition.x + 1} )
        // return path + 'R'
    }
    if ( down !== '*' ){
        return mazeTest(maz, path + 'D', {y:currentPosition.y + 1, x: currentPosition.x})
    //    return path + 'D'
    }
    throw new Error()
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

mazeTest(mySmallMaze);