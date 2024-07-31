let number = +prompt("Enter a number?")

let i =1
while(i<=number){
document.write(`<span>${i}*</span>`)

i++
}









function test(num) {
   if(num%2===0){
    document.write(`<h1>${num} is  not prime</h1>`)
   } 
else if(num%2===1){
    document.write(`<h1>${num} is prime</h1>`)
}
else{
    document.write(`<h1>Eror</h1>`)
}

}
test(number)