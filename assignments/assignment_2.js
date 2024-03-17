const args = process.argv;

console.log("arguments :");
args.forEach((value,idx)=>{
    console.log(`${idx} : ${value}`)
})

function add(num1, num2) {
    return num1 + num2;
}


console.log(`Addition of ${args[2]} and ${args[3]} is ${add(+args[2], +args[3])}`);