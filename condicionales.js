alert("Bienvenido a la pagina web");
var nom = prompt("Ingrese su nombre");
var res1= prompt("¿Como se llama el primer dia de la primavera? \n A: Primer Día de la Primavera \n B: Equinoccio de Primavera \n C: Equinoccio de Invierno");
if(res1=="B"){
    res1 = 25;
}else{
    res1 = 0;
}

var res2= prompt("¿Qué sucede en el polo Norte cuando llega la Primavera? \n A: 6 meses de luz diurna interrupida \n B: 6 meses de oscuridad ininterrumpida \n C: 6 meses de alternancia de luz y oscuridad");
if(res2=="A"){
    res2 = 25;
}else{
    res2 = 0;
}

var res3= prompt("¿En que me empieza la Primavera en el Hemisferio Norte? \n A: Septiembre \n B: Junio \n C: Marzo");
if(res3=="C"){
    res3 = 25;
}else{
    res3 = 0;
}

var res4= prompt("¿Qué es la Fiesta de la Primavera en China? \n A: La Navidad \n B: el Año Nuevo \n C: Fiestas patrias de China ");
if(res4=="C"){
    res4 = 25;
}else{
    res4 = 0;
}

var total= res1+res2+res3+res4
document.write("<h1>Condicionales</h1>")
document.write("Respuestas <br>")
document.write(nom +"tus resultados son <br>");
document.write(total + "% de respuestas correctas")