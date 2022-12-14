//variables globales
const formularioUI = document.querySelector('#formulario')
const listaActividadesUI = document.getElementById('listaActividades')
let arrayActividades = []


//funciones
const crearItem = (actividad,id) =>{
    let item ={
    id: id,    
    actividad: actividad,
    estado: false
    }
    
    arrayActividades.push(item)
    return item
}



const guardarDB = (actividad) =>{
    localStorage.setItem('rutina',JSON.stringify(arrayActividades));
    pintarDB()

}

const pintarDB = () => {
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('rutina'));
    if(arrayActividades === null){
        arrayActividades = [];
    }else{
        arrayActividades.forEach(element => {
            if(element.estado){
                listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><span class="material-icons float-left mr-2">accessibility</span><b>${element.id}-${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span> <span class="material-icons">remove</span></span></div>`
            }else{
                listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">accessibility</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span> <span class="material-icons">remove</span></span></div>`
            }
        });
    }
}

const eliminarDB = (actividad)=>{
    let indexArray ;
    arrayActividades.forEach((elemento, i)=>{
        if (elemento.actividad == actividad) {
            indexArray = i;
        }
        
    })

    arrayActividades.splice(indexArray,1);
    guardarDB();
}

editarDB= (actividad)=>{
    let indexArray = arrayActividades.findIndex((elemento)=>{
        return elemento.actividad === actividad
    })
    arrayActividades[indexArray].estado= true;
    guardarDB()
}
//event listener

formularioUI.addEventListener('submit', (e)=>{
    e.preventDefault()
    let actividadUI = document.getElementById('actividad').value
    let id = 0;
    for (let i = 0; i < id; i++) {
        id++   
    }

    crearItem(actividadUI)
    
    console.log(id);
    guardarDB() 
    formularioUI.reset();
})

document.addEventListener('DOMContentLoaded', pintarDB)

listaActividadesUI.addEventListener('click' , (e) => {
    e.preventDefault();
    
    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'remove') {
        if (e.target.innerHTML=== 'remove') {
            //accion de eliminar
            eliminarDB(e.path[2].childNodes[1].innerHTML)
        }
        if (e.target.innerHTML === 'done') {
            //accion de editar
            editarDB(e.path[2].childNodes[1].innerHTML)
        }
    }
})



/* 18.7 EJERCICIO 7
El factorial de un n??mero entero n es una operaci??n matem??tica que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. As??, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

Utilizando la estructura for, crear un script que calcule el factorial de un n??mero entero.

18.8 EJERCICIO 8
Escribir el c??digo de una funci??n a la que se pasa como par??metro un n??mero entero y devuelve como resultado una cadena de texto que indica si el n??mero es par o impar. Mostrar por pantalla el resultado devuelto por la funci??n.

18.9 EJERCICIO 9
Definir una funci??n que muestre informaci??n sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la funci??n determina si esa cadena est?? formada s??lo por may??sculas, s??lo por min??sculas o por una mezcla de ambas.

18.10 EJERCICIO 10
Definir una funci??n que determine si la cadena de texto que se le pasa como par??metro es un pal??ndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de pal??ndromo complejo: "La ruta nos aporto otro paso natural".

18.11 EJERCICIO 11
Definir la siguiente jerarqu??a de objetos, haciendo uso de los prototipos de JavaScript:

Objeto Persona con las propiedades nombre, edad y g??nero, y el m??todo obtDetalles(), que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el m??todo registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el m??todo asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarqu??a.

18.12 EJERCICIO 12
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la funci??n Math.random para obtener n??meros aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el n??mero de apariciones de dicha suma, repitiendo 36.000 veces esta operaci??n.

18.13 EJERCICIO 13
Crear las expresiones regulares necesarias para resolver los siguientes puntos:

Crear una expresi??n regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un d??gito. Probarlo con la expresi??n: "Nac?? el 05/04/1982 en Donostia.".
Crear una expresi??n regular que valide una direcci??n de email. Para simplificar, los valores antes de la @ pueden contener cualquier car??cter alfanum??rico, y los caracteres . y -, mientras que los valores tra la @ pueden contener caracteres alfanum??ricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.
Dada la siguiente funci??n que de reemplazo de caracteres, reescribirla utilizando expresiones regulares.
function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                        ["<", "&lt;"], [">", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
Dados un nombre y un apellido, crear la expresi??n regulatr necesaria para mostrarlos en orden inverso y separados por una coma. Por ejemplo, la cadena "John Smith", convertirla en "Smith, John".
Crear una expresi??n regular que elimine las etiquetas potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.
18.14 EJERCICIO 14
A partir de la p??gina web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente informaci??n:

N??mero de enlaces de la p??gina
Direcci??n a la que enlaza el pen??ltimo enlace
Numero de enlaces que enlazan a http://prueba
N??mero de enlaces del tercer p??rrafo
Descargar p??gina HTML

18.15 EJERCICIO 15
Completar el c??digo JavaScript proporcionado para que cuando se pulse sobre el enlace se muestre completo el contenido de texto. Adem??s, el enlace debe dejar de mostrarse despu??s de pulsarlo por primera vez. La acci??n de pulsar sobre un enlace forma parte de los "Eventos" de JavaScript que se ven en el siguiente cap??tulo. En este ejercicio, s??lo se debe saber que al pinchar sobre el enlace, se ejecuta la funci??n llamada muestra().

Descargar p??gina HTML */

const arr = [1,1,1,1,2,2,2,3,3,3,3,1,5,5,4,4,4,6,6,6,5,5,5]
const Erepetidos = [... new Set(arr)]
console.log(Erepetidos)

const Elrepetidos = arr =>{
        
    let obj = {}
    arr.map(element =>{
        if (obj[element]){
            obj[element]++
        }else{
            obj[element] = 1
        }
    })
    console.log(obj)

    
    const result = [];
    arr.forEach((item)=>{
    	//pushes only unique element
        if(!result.includes(item)){
    		result.push(item);
    	}
    })
            
    
    console.log(result) 
}

console.log(Elrepetidos(arr))

