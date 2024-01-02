// let array=[1,2,3];

// let object={name:"car",
// model:"maruti"}
// let {name,model}=object

// var a=5;
// const b=3;

// let arrobj=[
//   {name:"car",
// model:"maruti"},

// {name:"car2",
// model:"maruti2"}
// ]
// let arrayy=[1,2,3,4,5,6,7,8,9,10]
// let sum=0
// let i;
// let value
// let evenvalue=[]
//  let oddvalue=[]
// for(i=0;i<10;i++)
// {
//   sum=sum+arrayy[i]
// }
// console.log(sum)
// let array=[1,2,3,4,5,6,7,8,9,10]
// let evenvalue=[]
//  let oddvalue=[]
// for(i=0;i<10;i++)
// {
  
//   if(array[i]%2==0){
//   evenvalue.push(array[i])}
// else{
//   oddvalue.push(array[i])
// }
// }
// console.log("even value is  "  +evenvalue)
// console.log("odd value is  "+oddvalue)
// for(let i=0;i<array.length;i++){
//    console.log("even value is " +evenvalue[0])

// }
// for(let i=0;i<array.length;i++){
//   console.log("odd value is " +oddvalue[0])

// }


// const sum=array.reduce((accumulator,currentvalue)=>
  
//    accumulator+currentvalue,0
// )
// console.log(sum)
// console.log(a)
// console.log(b)//hoisting
// console.log(c)
// let a;
// const b=2;
// var c;
// console.log(a)
// console.log(b)
// console.log(c)
// c=3 //temporal dead zone
// a=5
// console.log(a)
// console.log(b)
// console.log(c)
// let a=10;
// // console.log("value is"+a)
// console.log(`value is ${a}`)//template literal
// let a=3
// let b=a ?? "default value"
// console.log(b) // nullish coleasing
// let obj={name:"sahil",
// age:{
//    name:"manu"
// }}
// console.log(obj.age.name)
// let array=[1,2,3,4]
// console.log(...array,"wjhaqhwe")
// let obj={name:"manu",
// age:12}
// let b={...obj,name:"alpha"}//spread operator
// // let [...spread]=array
// console.log(b)
// let a=[1,2,3]
// let b=a.map((n)=>n*n)
// console.log(b)//map
// let a=[1,2,3,4,5]
// let b=a.filter((n)=>n>3)
// console.log(b)//filter
// setInterval(() => {
//   console.log("hyyy")
// }, 3000);
// setTimeout(() => {
//    console.log("inside")

// }, 2000);
// console.log("aftrer")
const http=require('http')//servr creating
const fs=require('fs')//file sysytem fs
const { isUtf8 } = require('buffer')
const path = require('path')
// fs.mkdir('./newfolder',(err)=>{
// err?console.log(err):console.log("folder created")
// })
// console.log(fs.existsSync('./newfolder'))//file check
// fs.writeFile('./name2.txt',"hello how you",()=>{//write file
//   console.log("file writed")
// })
// fs.readFile('./name.txt','utf-8',(err,data)=>{//readfile
//   if(err)
// console.log("there is an error"+err)
// else
// console.log(data)
// })
// fs.unlink('./name2.txt',(err)=>{//file delete
// if(err)
// console.log(err)
// }
// )
// fs.rmdir('./newfolder',(err)=>{//folder delete
//    if(err)
//    console.log(err)
//    }
// )
const server=http.createServer((req,res)=>{
  // console.log(req.url)
  // console.log(req.method)

  
  res.setHeader('Content-Type','text/html') 
  let path='./views'
  // let statusCode
  switch(req.url)
  {
case '/':path+='/index.html'
statusCode=200
break;
case '/calc':path+='/calc.html'
statusCode=200

break;
default:path+='/index2.html'
statusCode=404

  }
   fs.readFile(path,(err,data)=>{
  if(err){
 console.log("there is an error"+err)
 res.end()
  }
 else{
  res.statusCode=statusCode
 res.write(data)
 res.end()
 }

  })
  // res.writeHeader(200,{
  //   'content-Type':'text/html'
  // })
// res.end('<h1>hello</h1>')
// fs.readFile('./views/calc.html',(err,data)=>{
//   if(err){
//  console.log("there is an error"+err)
//  res.end()
//   }
//  else{
//  res.write(data)
//  res.end()
//  }

//  })
})



server.listen('3000',()=>{console.log("server is running")})
