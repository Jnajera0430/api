/* const moda = (arr) =>{
    let recorrido = new Map();

    arr.forEach((valor)=>{
        if(recorrido.has(valor)){
            recorrido.set(valor, recorrido.get(valor) + 1 )
        }else{
            recorrido.set(valor, 1)
        }
    })

    
    let max = [...recorrido.entries()].reduce((a,s) => s[1] > a[1] ? s : a)
    let comparar = []
    for (let i of recorrido){
        
        if(recorrido[i] == max[1]){
            comparar.push(i)
        }
    }
    console.log(recorrido)
    console.log('la repeticion equivale a: ', max[1])
    console.log('y los numeros mas repetidos: ' , comparar)
}
let arr = [1,2,3,4,5,5,4,2,] 
console.log(moda(arr))
 */