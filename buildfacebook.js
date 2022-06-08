var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "caleb",
        password: "456"
    }

];
var newsFeed = [
    {
        username:"bobby",
        timeline:"so tired from all that learning!"
    }, 
    {
        username: "sally",
        timeline: "javascript is so cool"
    },
    {
        username: "caleb",
        timeline: "javascript is pretty cool"
    }
]
var userNamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");

function signIn(user,pass) {
    if(user === database[0].username && pass === database[0].password ){
        console.log( newsFeed);
    }else{
        alert("Sorry Not the USER ");
    }
     
}
signIn(userNamePrompt,passwordPrompt);





















































//looping

// var toDo = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy",
// ]
// var toDos = toDo.length
// for (let i = 0; i < toDos; i++) {
//     console.log(toDo[i],i);
// }
// toDo.forEach(function(toDo,i){
//     console.log(toDo, i);
// })