let respuesta = parseInt(prompt("Ingresa el numero de colores que tiene la bandera de Ukrania"));

for (let i = 3; i != 1; i--){
  
    if(respuesta === 2){
        alert("Respuesta correcta felicitaciones!!!");
        {break}; 
      
    } else{
        respuesta = parseInt(prompt(`Respuesta incorrecta, tienes ${i-1} intentos mas, ingresa nuevamente el numero de colores que tiene la bandera de Ukrania`)); 
    }

}
let respuesta2 = prompt("Ingresa el primer nombre de Maradona").toLowerCase();
let u = 3;
while(u != 1){
    if(respuesta2 ==="diego"){
        alert("Respuesta correcta felicitaciones!!!");
        {break};
    }
    else{
        respuesta2 = prompt(`Respuesta incorrecta, tienes ${u-1} intentos mas, ingresa nuevamente el primer nombre de Maradona`).toLowerCase(); 
        u--;
    }

}
alert("Gracias, terminaste la prueba, en las proximas 24 horas recibiras tu calificación");