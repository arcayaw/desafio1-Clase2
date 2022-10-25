/* 
  >> Consigna: 
1) Declarar una clase Usuario LISTO

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String LISTO
libros: Object[] LISTO
mascotas: String[] LISTO

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3) Hacer que Usuario cuente con los siguientes métodos:
- getFullName(): String. Retorna el completo del usuario. Utilizar template strings. LISTO
- addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas. LISTO
- countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario. LISTO

- addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.

- getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

>> Ejemplos:

countMascotas: Suponiendo que el usuario tiene estas mascotas: ['perro', 'gato'] usuario.countMascotas() debería devolver 2.

getBooks: Suponiendo que el usuario tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].

getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' usuario.getFullName() deberia devolver 'Elon Musk'
*/

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullname() {

    const fullName = `${this.nombre} ${this.apellido}`
    return fullName

  }
  addMascota(nombreMascota) {
    //Recibe un nombre de mascota y lo agrega al array de mascotas.
    const newMascota = nombreMascota;
    this.mascotas.push(newMascota)
    return this.mascotas
  }
  countMascotas(mascotas) {

    // console.log(this.mascotas.length);
    return this.mascotas.length
  }
  addBook(nombre, autor) {
    //void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    const newBook = { nombre: nombre, autor: autor };
    this.libros.push(newBook);
  }
  getBookNames(libros) {
    //String[]. Retorna un array con sólo los nombres del array de libros del usuario.

    const listaLibros = this.libros?.map(function (libro) {
      return ` ${libro.nombre}`
    })
    console.log(listaLibros);
  }
}

const Lara = new Usuario('lara', 'lopez', [{ nombre: 'EL senior de los anillos', autor: 'jr tolkien' }, { nombre: "La Seniora de los anillos 2", autor: "J.R tolkien" }], ['maya', 'loro'])
Lara.addBook("El nen de los anillos 2", "J.R tolkien");



console.log(`El nombre completo es ${Lara.getFullname()}`);  //da el nombre 
console.log(Lara.addMascota("burro")); //agrega una mascota
console.log(`tiene ${Lara.countMascotas()} mascotas`); //muestra cuantas mascotas tiene. 
Lara.getBookNames() //muestra los libros/ 

