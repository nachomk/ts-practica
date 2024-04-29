//Inferencia
//como a y b infiere que son de tipo number sin decirle nada
const a = 1
const b = 2
const c = a + b
//c tambien sera un number

//string
let cadenadetexto = 'prueba'
cadenadetexto.toLocaleLowerCase() //la variable al ser de tipo string, unicamente me mostrara los metodos que son exitentes en ese tupo (string)
//cadenadetexto = 2 //error al tratar de asignar un number a una variable de tipo string

//any
let obj: any = { x: 0 }

obj.foo();
obj();
obj.bar = 100;
obj = 'hola';
const n: number = obj;

//functions

//function saludar(name: string) { //hay un error ya que no especificado que tipo es name, se le asigna el tipo any. Entonces hay que especificar que tipo es para evitar errores 
//    console.log(`Bienvenido ${name}`)
//}
//saludar('Nacho')


// si dentro del parentesis ponemos name: string
// va a renombrar la variable name a llamarse string
// hay 2 formas de asignar tipos en ts
// 1)
/*function saludar ({name, age}: { name: string, age: number}) {
    console.log(`El usuario ${name} tiene ${age} años`)
}

saludar({name: 'Nacho', age: 20})*/

// 2) asignando un objeto 
/*function saludar (persona: {name: string, age: number }) {
    const { name, age } = persona
    console.log(`El usuario ${name} tiene ${age} años`)
}

saludar({name: 'Nacho', age: 20})*/

/*function saludar ({name, age}: { name: string, age: number}) {
    console.log(`El usuario ${name} tiene ${age} años`)
    return age //ts detecta que el contenido de age es un number, por ende devuelve un number 
}*/

//

// const sayHiFromFunction = (fn: (name: string) => void) => { // fn: (variable que recibe: tipo) => que retorna
//     return fn('Nacho')
// }

// sayHiFromFunction((name) => { //la variable name = Nacho (linea 56)
//     console.log(`Hola ${name}`)
// })


// ARROW FUNCTION
// 1)
// const sumar = (a: number, b: number): number => {
//     return a + b ;
// }
// 2)
// const restar: (a: number, b: number) => number = (a, b) => {
//     return a - b ;
// }

// never
// function throwError(message: string): never {
//    if (message) throw new Error(message) 
//    throw new Error(message)
//    process.exit(1)  
// }

//inferencia funciones anonimas segun el contexto --> detecta que dentro de avengers hay strings, por ende en la linea 85 va a detectar que las funciones posibles van a ser de strings
// const avengers = ['Spiderman', 'Hulk', 'Avengers']

// avengers.forEach(avenger => {
//     console.log(avenger.toUpperCase())
// })

// OBJETOS



//hero.name = 1200 // --> tira error, porque infiere y detecta que el name no es un tipo number
//hero.power = 1000000 // --> tira error, en el objeto no se encuentra ninguna propiedad que se llame POWER

//puedo crear una fn para crear heroes, pero no puedo estar del todo seguro que sera de las mismas condiciones que el OBJ de la linea 90
//para eso existen:

// TYPE ALIAS

// type Hero = {
//     name: string,
//     age: number
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero (hero: Hero ): Hero {
//     const { name, age } = hero
//     return { name, age }
// }

// const thor = createHero({ name:'Thor', age: 1200 })

// OPTIONAL PROPERTIES

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type Hero = {
//     readonly id?: HeroId
//     name: string,
//     age: number,
//     isActive?: boolean // el ? significa que esa propiedad es opcional (de lectura), que en caso de que no este en otros objetos no me dara ningun error, pero en caso de que si este tiene que ser del tipo booleano
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero (hero: Hero ): Hero {
//     const { name, age } = hero
//     return { 
//         id: crypto.randomUUID(),  //esto me devuelve una combinacion de letras y numeros aleatorios pero especificado como lo dice en la lonea 119
//         name, 
//         age, 
//         isActive: true 
//     }
// }

// const thor = createHero({ name:'Thor', age: 1200 })
//console.log(thor.isActive) // --> me devuelve true

// TEMPLATE UNION TYPES

// type HexadecimalColor = `#${string}` //el tipo de HexadecimalColor debe tener includio el # para ser valido

// const color  : HexadecimalColor = '0033ff'  //HEX --> tira error porque el tipo preestabelcido en la linea 147 inluye el caracter #, el cual no tiene
// const color2 : HexadecimalColor = '#0033ff' //HEX 

// UNION TYPES

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent' // | significa o/or
// type Hero = {
//     readonly id?: HeroId
//     name: string,
//     age: number,
//     isActive?: boolean,
//     powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero (hero: Hero ): Hero {
//     const { name, age } = hero
//     return { 
//         id: crypto.randomUUID(),  
//         name, 
//         age, 
//         isActive: true 
//     }
// }

// const thor = createHero({ name:'Thor', age: 1200 })

// INTERSECTION TYPES

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent' // | significa o/or

// type HeroBasicInfo = {
//     name: string,
//     age: number
// }

// type HeroProperties = {
//     readonly id?: HeroId,
//     isActive?: boolean,
//     powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties ; // Intersección de tipos ( AND / & )

// let hero: Hero = {
//     name: 'Thor',
//     age: 1500
// };

// function createHero (input: HeroBasicInfo ): Hero {
//     const { name, age } = input
//     return { 
//         id: crypto.randomUUID(),  
//         name, 
//         age, 
//         isActive: true 
//     }
// }

// const thor = createHero({ name:'Thor', age: 1200 })

// TYPE INDEXING

// type HeroProperties = {
//     isActive: boolean,
//     address: {
//         planet: string,
//         city: string
//     }
// }

// const addressHero: HeroProperties['address'] = { // accedemos al HeroProperties y a sus propeidades de CIUDAD y PLANETA y darles un valor string
//     planet: 'Tierra',
//     city: 'Buenos Aires'
// }

// TYPE FROM VALUE
// const address = {
//     planet: 'Tierra',
//     city: 'Buenos Aires'
// }

// type Adress = typeof address

// const addressTwitch: Adress = {
//     planet: 'Mars',
//     city: 'Lanus'
// }

// TYPE FROM FUNCTION RETURN
// function createAddress() {
//     return {
//         planet: 'Tierra',
//         city: 'Bsas'
//     }
// }

// type Address = ReturnType <typeof createAddress> // --> guarda en Adress el tipo de lo que retorna la funcion createAddress

// ARRAYS

// DECLARACION DE ARRAYS INVALIDA
//const languages = [] // la declaracion del array con [] significa en ts que queremos que siempre este vacio (un array de never)

// PRIMERA DECLARACION DE ARRAYS VALIDA (mas claro y recomendable)
//const languages: string[] = [] 

// SEGUNDA DECLARACION DE ARRAYS VALIDA
//const languages: Array<string> = []

//languages.push('Python')

// PARA DECLARAR UN ARRAY QUE CONTENGA MAS DE UN TIPO DE DATO (ej: numeros y strings)

// DECLARACION INCORRECTA
//const languages: string[] | number[] = [] // esto significa que el array es o solo de numeros o solo de strings 

// DECLARACION CORRECTA
// const languages: (string | number)[] = []

// languages.push('Python') //ACEPTA STRINGS
// languages.push(29) // ACEPTA NUMEROS


// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent' // | significa o/or

// type HeroBasicInfo = {
//     id?: number,
//     name: string,
//     age: number
// }

// const herosWithBasicInfo: HeroBasicInfo[] = []

// MATRICES(array de arrays) Y TUPLAS

/* TA TE TI
    ['X', 'O', 'X'],  <-- string[]
    ['O', 'O', 'X'],  <-- string[]
    ['O', 'X', 'X']   <-- string[]
*/

type CellValue = 'X' | 'O' | ''
// PARA LIMITAR EL ESPACIO Y QUE NO NOS PERMITE PONER MAS DE 3 COLUMNAS Y 3 LINEAS (TUPLAS)
// una TUPLA es array que tiene un limite fijado de longitud
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]
const gameBoard: GameBoard = [ // TATETI LIMITADO A SER SOLO DE 3x3
    ['X', 'O', 'X'],
    ['O', 'X', 'X'],
    ['O', 'O', 'X']
]

//gameBoard[0][1] = 5651 // no deja ingresar este tipo de dato
gameBoard[0][1] = 'O' // dato valido por definicion de type en linea 298

// EJEMPLO DE TUPLA EN REACT
// type State = [string, (newName: string) => void]
// const [hero, setHero]: State = useState('thor')

// EJEMPLO DE TUPLAS CON CODIGO RGB
type RGB = [number, number, number]
const rgb: RGB = [255, 255, 0] // NUMERO QUE VAN DE 0 A 255