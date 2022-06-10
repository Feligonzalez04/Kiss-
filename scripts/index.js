let nombreUsuario = prompt("ingresar un nombre de usuario para realizar una consulta médica");

if (nombreUsuario == "") {
    console.log("no ingresaste ningun nombre de usuario");
}
else {
    console.log("nombre de usuario ingresado " + nombreUsuario);
}

let consultaPrecio = 150.5;

if (consultaPrecio < 20 ) {
    console.log("el precio es mayor a 20")
}
else if (precio < 60) {
    console.log("el precio es mayor a 60")
}
else if (precio < 100) {
    console.log("el precio es mayor a 100")
}
else (precio >= 150.5); {
    console.log("el precio es correcto")
} 

let hablarConunarespuestaautomatica = prompt("desea hablar con un robot automatico que le dara su respuesta a todo?");
if (nombreUsuario = "si") {
    console.log("dirigiendote con un robot automatico")
}

let problemaQueposee = prompt("ingrese su consulta o problema"); 

if (problemaQueposee = fiebre ){
    console.log("resolviendo su problema")
    console.log("duerma 1/2 horas, pongasé hielo en la frente, tome ibupirac para calmar todo el dolor")
}
if (problemaQueposee = resfrio ){
    console.log("resolviendo su problema")
    console.log("ingiera un ibuprofeno 600, abriguese mucho, bañesé con baño a vapor")
}
if (problemaQueposee = rotura ){
    console.log("visite un centro medico mas cercano a su localidad, no podemos resolver eso por aqui")
}

var finalizarConsulta= prompt("desea finalizar su consulta?");

if (nombreUsuario = "no"){
    console.log("diganos mas consultas")
}

else if (nombreUsuario = "si"){
    console.log("esperemos que le haya servido nuestras respuestas, que se mejore ! ")
    console.log("finalizando chat con el robot automatico")
}



