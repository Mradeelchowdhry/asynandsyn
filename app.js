let number=Math.round(Math.random()*10);
console.log(number)
let p= new Promise ((resolve,reject)=>{
    if(number>5){
        return resolve("wade poora hogaya")
    }else{
        return reject("wada toot gaya")
    }

})

p.then((data)=>{
console.log(data)
}).catch((data)=>{
console.log(data)
})



let khilyanahi=false;
let burger= new Promise ((res,rej)=>{
    if(khilyanahi==true){
        return res("Thanks for the treat")
    }else{
        return rej("kanjoos")
    }

})

burger.then((a)=>{
    console.log(a)
}).catch((a)=>{
    console.log(a)
})