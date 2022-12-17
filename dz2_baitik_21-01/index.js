//  1
var con = [];
for (var i=0; i<=10; i++){
    con.push(i)
}
console.log(con);
//  2
for (var i = 20; i >= 0; i-- ){
    console.log(i)
}

//  3
var colors = prompt('Choise color!(red, yellow, green)')
switch (colors){
    case 'red':
        alert('stop')
        break
    case 'yellow':
        alert('wait')
        break
    case 'green':
        alert('go')
        break
    default:
        alert("пожалалуйста вводите цвета")
}
//Этот код тоже рабочий!
// var colors = prompt('Choise color!(red, yellow, green)')
//
// if (colors === 'red'){
//     alert('stop')
// }else if(colors === 'yellow'){
//     alert('ready')
// }else if(colors === 'green') {
//     alert('go')
// }else {
//     alert("пожалалуйста вводите цвета")
// }




