//Punto 1
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
console.log('El nombre del libro es ',libros[1].titulo,' y el autor es ',libros[1].autor)
// let target = libros.find(item => item.titulo='El Hobbit');
// target.paginas = 350;
// console.log(target)
libros[0].paginas = 350;
console.log(libros[0])
let new_libros = libros.map(libro => {
    return {
        titulo: libro.titulo,
        autor: libro.autor
    }
})
console.log(new_libros)

//Punto 2 Calculo de estadisticas basicas
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
let sumaEdadEstudiantes = 0;
for(let i=0;i<estudiantes.length;i++){
    sumaEdadEstudiantes += estudiantes[i].edad
}
let promedioEdadEstudiantes = sumaEdadEstudiantes/estudiantes.length;
console.log('Esta es la suma total de la edad de los estudiantes: ',sumaEdadEstudiantes)
console.log('El promedio de la edad de los estudiantes es: ', promedioEdadEstudiantes)

//Punto 3: Busqueda y filtrado de datos
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];
let ropaProductos = productos.filter(product => product.categoria === 'Ropa')
console.log('El filtro de productos de ropa es: ',ropaProductos)
let preciosMayores = productos.filter(product => product.precio > 30)
console.log('Los productos con precio mayor a 30 son: ', preciosMayores)

//RETO
let mejorPromedioEstudiante = 0;
let nombreMejorEstudiante = '';
for(let j=0;j<estudiantes.length;j++){
    if(estudiantes[j].promedio > mejorPromedioEstudiante){
        mejorPromedioEstudiante = estudiantes[j].promedio
        nombreMejorEstudiante = estudiantes[j].nombre        
    }
}
console.log('El estudiante ', nombreMejorEstudiante,' tiene el mejor promedio con un puntaje de: ',mejorPromedioEstudiante)
