//variable creada con var
var variableVar=1

let variableLet="texto"

const miConstante="Programacion JavaScript"

console.log(miConstante)

let persona = {
    nombre:"Naza",
    edad:19,
    estudiante:true,
    curso:"JavaScript",
}
persona.edad=persona.edad+3
console.log(persona)
console.log(persona.nombre)

let nombres=["Naza", "Maria", "Ana", "Jorge"]

console.log(nombres[0])

let alumno= {
    nombre:"Naza",
    edad:19,
    estudiante:true,
    curso:"JavaScript",
}
console.log(alumno)
let compañeros = (alumno.estudiante==persona.estudiante) && (alumno.curso==persona.curso)

console.log(compañeros)

alumno.cohorte=2021
console.log(alumno)

delete alumno.edad
console.log(alumno)

let mascota = new Object({
    tipo:"perro",
    raza:"dogo",
    edad:5,
    familia:{
        hermanos:3,
        hijos:0,
        },
    ladrar:()=>console.log("Guau") 
})
console.log(mascota)

//devuelven los atributos de un objeto
console.log(Object.keys(mascota))
console.log(Object.keys(alumno))

//values devuelve los valores asignados
console.log(Object.values(alumno))

//entries devuelve pares atributos valor
console.log(Object.entries(alumno))

let paises=["Argentina","Brasil","Bolivia","Chile","Mexico"]

console.log(paises)
console.log(paises[2])
//tamaño del array
console.log(paises.length)

//shift elimina el primer elemento del array
paises.shift()

//pop elimina el ultimo elemento del array
paises.pop()

console.log(paises)

//push agrega al final un elemento
//pasado por parametro
paises.push("Uruguay")

//unshift agrega un elemento al principio
paises.unshift("Argentina")

//devuelve la posicion en 
//que se encuentra el elemento 
console.log(paises.indexOf("Brasil"))

//devuelve V o F si el elemento esta
//incluido dentro del array
console.log(paises.includes("Japon"))

console.log(paises)

let textoPaises= paises.toString()
console.log(textoPaises)

let textoEspacio = paises.join(" ")

console.log(textoEspacio)

let europa = ["Italia","Francia","España"]

let unidos = paises.concat(europa)

console.log(unidos.toString())

//funcion nombrada
function sumar(nro1,nro2){
    return nro1 + nro2;
}
let n1=10
let n2=30

//funcion anonima,no se le pone nombre
let resultado = function(n1,n2){
            return n1 + n2;
    }
console.log(sumar(2,2))
console.log(resultado)

function mayorEdad(edad){
    if(edad>=18)
        return "Es mayor";
    else
        return "Es menor de edad";
}    
/*let edad=prompt("Ingrese la edad")
let nro=perseInt(edad)

let msg=mayorEdad(edad);
alert(msg)
*/

function mostrarPaises(paises){
    for(i=0; i<paises.length; i++){
        console.log(paises[1])
    }
}
mostrarPaises(paises)

const titulo=document.getElementById("titulo")
console.log(titulo.innerHTML)

const elemento2=document.getElementsByName("titulo2")
console.log(elemento2)

const elemento3=document.getElementsByClassName("parrafo")
console.log(elemento3)

//editando un titulo de html
titulo.innerHTML="Editado el HTML con JavaScript"
titulo.id="Titulo Principal"
titulo.style.color="blue"

let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerHTML="1"

let contenedor =document.getElementById("contenedor")
contenedor.appendChild(nuevoParrafo)
console.log(nuevoParrafo)
console.log(contenedor)

//document.removeChild(nuevoParrafo)

let boton=document.createElement(Button)
boton.innerText="Contar Clics"
contenedor.appendChild(boton)

boton.onclick = function(){
    nuevoParrafo.innerHTML=parseInt(nuevoParrafo.innerHTML) + 1;
}

function mensaje(){
    console.log('click');
}
const boton = document.getElementById('boton')

boton.addEventListener('click',(0) (console.log(0)))

const formulario=document 

let todosPaises=['Argentina',"Brasil","Bolivia","Chile","Mexico"]
//funciones de order superior
//no crea un nuevo array solo itera sobre el array
todosPaises.forEach(unPais=> mostrarPaises("Este es: " + unPais))

function mostrarPaises(pais){
    console.log("Este es: " + pais)

}

let listaPrecios=[2,8,10,20,5,3]

//map genera un nuevo array
let listaPreciosActualizada=listaPrecios.map(precio=> precio*1.3)
console.log(listaPreciosActualizada)

listaPreciosActualizada= listaPrecios.map(precio=> aumentarPrecio(precio))

function aumentarPrecio(unPrecio){
    return unPrecio * 1.3;
}
console.log(listaPreciosActualizada)

//filter genera un nuevo arrray pero solo con los elementos que cumplen la condición
let baratos=listaPreciosActualizada.filter(precio=> precio<6);
console.log(baratos);

console.log(todosPaises)
console.log(todosPaises.sort())


console.log(todosPaises)
console.log(listaPrecios.sort)
//