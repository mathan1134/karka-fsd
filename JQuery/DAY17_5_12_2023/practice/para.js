// let name="mathan"
// let place="moolachel"
// let degree="ba"

// let para=` my name ${name} from ${place} i am completed ${degree}`
// document.getElementById("run").innerHTML=para
// console.log(para)

// const x=(a,b) => {
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a+b)
//     console.log(a/b)
// }
// x(10,45)



// const a ={a:"apple",
//           b:"bat",
//            c:"cat"}

// const b ={a:" an apple",
//           b:" a bat",
//            c:" the cat"}

// const value= { ...a, ...b}
// console.log(value)


// const a ={a:"apple",
//           b:"bat",
//            c:"cat"}

// const b ={d:" an apple",
//           e:" a bat",
//            f:" the cat"}

// const value= { ...a, ...b}
// console.log(value)



// const a=[1,2,3,4,6]
// const b=[1,2,3,4,6]
// const c=[...a,...b]
// console.log(c)

                                            // const num=[12,0,67,-98]
                                            // const sum=num.reduce((acc,curr)={acc + curr},0)      error
                                            // console.log(sum)

// const numbers=[12,0,67,98]
// const sum=numbers.reduce((accumulater,currentvalue)=>{
//     return accumulater + currentvalue},0)

// console.log(sum)


// o/p=[1,2,3,4,5,6]

// const numbers=[[1,2],[3,4],[5,6]]

// const ans= numbers.reduce((a, b) => (a.push(...b), a),[])
// console.log(ans)

// const ans= numbers.reduce((a, b) =>[...a,...b],[])
// console.log(ans)

// a=10
// v={...a}
//     console.log(v)

// const num={a:1,b:2,c:5}
// const sumvalues =  Object.values(num).reduce((a, b) => a + b, 0);
// console.log(sumvalues)


// let prod=["appe","maza","fruit","cocc","appe","appe","cocc","appe"]
// let specific=prod.indexOf("maza")
// console.log(specific)
// let specific1=prod.lastIndexOf("appe")
// console.log(specific1)

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ])
// //   let fruit=fruits.get("apples")
// //   let fruit=fruits.set("apples",10)
//  let fruit=fruits.clear()
//   console.log( fruit)


//   const people=[
//     {name:"aju",age:22},
//     {name:"raju",age:12},
//     {name:"viju",age:32}
//   ]
//   const peoplemap=people.map(a=>({ ...a,isadult:a.age>=18}))
//   console.log(peoplemap)


//   const people=[
//     {name:"aju",age:22},
//     {name:"raju",age:12},
//     {name:"viju",age:32}
//   ]
//   const peoplemap=people.map(index=>({ ...index,isadult:index.age>=18}))
//   console.log(peoplemap)
