const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/', (req,res)=>{
    res.send('hellow world')

})


const arr = [1,2,1,4,5,2,2,3,3,3,6,1];
const encontrarelnumero = (arr)=>{
    if(arr.lenght<= 0) return 0

    let obj = {};
    arr.map(element =>{
        if (obj[element]){
            obj[element]++
        }else{
            obj[element] = 1
        }
    })

    let max = Object.entries(obj).reduce(function(prev, curr){
        return prev[1] <= curr[1] ? prev : curr;
    })
    console.log(max)
    let comparar = []
    let comparar2 = []
    for (let i in obj){
        if(obj[i]==max[1]){
            comparar.push(i)
        }
    }
    Object.entries(obj).forEach(i =>{
        
        if(obj[i]==max[1]){
            comparar2.push(obj[i])
        }
    } )
    
    console.log(obj[1])
}
encontrarelnumero(arr)
module.exports = router;