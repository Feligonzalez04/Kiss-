function nombreUsuario() {
    let nombreIngresado = prompt("Ingrese su nombre: ");
    alert("Nombre ingresado : " + nombreIngresado);
}

let ingreseNombre = prompt("ingresar un nombre de usuario para realizar una consulta médica");

if (nombreUsuario == "") {
    alert("no ingresaste ningun nombre de usuario");
}
else {
    alert("nombre de usuario ingresado " + nombreUsuario);
}

let consultaPrecio = 150.5;

if (consultaPrecio < 20 ) {
    alert("el precio es mayor a 20")
}
else if (consultaPrecio < 60) {
    alert("el precio es mayor a 60")
}
else if (consultaPrecio < 100) {
    alert("el precio es mayor a 100")
}
else (consultaPrecio >= 150.5); {
    alert("el precio es correcto")
} 

let respuestaAutomática = prompt("desea hablar con un robot automatico que le dara su respuesta a todo?");
if (respuestaAutomática == "si") {
    alert("dirigiendote con un robot automatico")
}

let problemaQueposee = prompt("ingrese su consulta o problema"); 

if (problemaQueposee == "fiebre" ){
    alert("resolviendo su problema")
    alert("duerma 1/2 horas, pongasé hielo en la frente, tome ibupirac para calmar todo el dolor")
}
if (problemaQueposee == "resfrio" ){
    alert("resolviendo su problema")
    alert("ingiera un ibuprofeno 600, abriguese mucho, bañesé con baño a vapor")
}
if (problemaQueposee == "rotura" ){
    alert("visite un centro medico mas cercano a su localidad, no podemos resolver eso por aqui")
}

var finalizarConsulta= prompt("desea finalizar su consulta?");

if (finalizarConsulta === "no"){
    alert("diganos mas consultas")
}

else if (finalizarConsulta === "si"){
    alert("esperemos que le haya servido nuestras respuestas, que se mejore ! ")
    alert("finalizando chat con el robot automatico")
}

let contUsuario = prompt("deje un numero del 1 al 10, de cuanto esta satisfecho acerca de nuestra consulta")
let cont =1;
while(cont <=10){
    document.write(cont + " ");
    cont++;
}






