console.log("Edificios")

//Constructor de edificio
var Edificio = function(calle, numero, codigoPostal, plantas){
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = plantas;
};

//edificio
var Edificio1 = new Edificio ("Avd Palmera", 42 , 41012, 6);


// MUESTRA DIRECCION
mostrarCalle = function(){
    TextoCalle="Calle: "+ Edificio1.calle;
    console.log(TextoCalle);
    return TextoCalle;
}
mostrarCalle();

mostrarNumero = function(){
    TextoNum="Nº: "+ Edificio1.numero;
    console.log(TextoNum);
    return TextoNum;
}
mostrarNumero();

mostrarCD = function(){
    TextoCD="Código postal: "+ Edificio1.codigoPostal;
    console.log(TextoCD);
    return TextoCD;
}
mostrarCD();

mostrarPlantas = function(){
    TextoPlantas="Planta: "+ Edificio1.plantas;
    console.log(TextoPlantas);
    return TextoPlantas;
}
mostrarPlantas();

//MODIFICACIÓN DE DATOS
function modificarCalle(){
    Edificio1.calle = Edificio1.calle;    //Aqui se hace la modificación de la calle
    if (Edificio1.calle != "Avd Palmera"){
        console.log("Se ha cambiado el nombre de la calle a: "+ Edificio1.calle);
        
        }
    }
modificarCalle();

function modificarNumero(){
    Edificio1.numero = Edificio1.numero;    //Aqui se hace la modificación del numero
    if (Edificio1.numero != 42){
        console.log("Se ha cambiado el nombre de la número a: "+ Edificio1.numero);
        
        }
    }
modificarNumero();

function modificarCD(){
    Edificio1.codigoPostal = Edificio1.codigoPostal;    //Aqui se hace la modificación del codigo postal
    if (Edificio1.codigoPostal != 41012){
        console.log("Se ha cambiado el número del codigo postal a: "+ Edificio1.codigoPostal);
        
        }
    }
modificarCD();

function modificarPlanta(){
    Edificio1.plantas = Edificio1.plantas;    //Aqui se hace la modificación de la planta
    if (Edificio1.plantas != 6){
        console.log("Se ha cambiado el número de Plantas a: "+ Edificio1.plantas);
        
        }
    }
modificarPlanta();

//AGREGAR PLANTA Y PUERTA

var plantayPuerta=Object.create(Edificio1);
var plantas=Object.create(plantayPuerta);
var puerta=Object.create(plantayPuerta);

plantas.imprimirPlanta = function(){
    pruebatext="pruebaplanta:"+Edificio1.plantas;
    console.log(pruebatext);
    return pruebatext;
}
plantas.imprimirPlanta();

//AGREGAR PROPIETARIOS

function propietario (nombre, planta, puerta){
    this.nombre = nombre;
    this.planta = planta;
    this.puerta = puerta;
};

//Propietarios
var pro1 = new propietario ("Marcos", 3 , 1);
var pro2 = new propietario ("Manolo", 2 , 2);
var pro3 = new propietario ("Jose", 5 , 3);

var listaPropietarios = function(){
    listpro1 = "El propietario del piso "+pro1.puerta+" "+"de la planta "+pro1.planta+" es: "+ pro1.nombre+"<br/> El propietario del piso "+pro2.puerta+" "+"de la planta "+pro2.planta+" es: "+ pro2.nombre+"<br/> El propietario del piso "+pro3.puerta+" "+"de la planta "+pro3.planta+" es: "+ pro3.nombre;
    console.log(listpro1);
    return listpro1;
}
listaPropietarios();
