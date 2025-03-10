// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista_amigos= [];   
let lista_numero_secreto = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = Estructura_Correcta(input.value); 
   
    if (nombre !== "") {
        if (lista_amigos.includes(nombre)) {
            // Pregunta al usuario si desea agregar el nombre duplicado
            if (confirm("Este nombre ya ha sido agregado. ¿Deseas agregarlo igualmente?")) {
                    lista_amigos.push(nombre);

            }
            
        } else {
            lista_amigos.push(nombre);

        }

        input.value = ""; // Borra el input después de agregar el amigo 
        input.focus(); // Mantiene el cursor en el input

        actualizarLista(); // Llama a la función para actualizar la lista en la página        
                          
    } else {
        alert("No has ingresado un nombre, verifica y reintenta");

    }    
}

function Estructura_Correcta(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
           //primera letra en mayúscula (indice 0), segunda letra (indice 1) y siguientes en minúscula     
}

// Función para mostrar los amigos en la lista
function actualizarLista() {
    let ul_HTML = document.getElementById("lista_amigos");
    ul_HTML.innerHTML = ""; // Limpia la lista antes de volver a llenarla

    lista_amigos.forEach((amigo) => {   //recorro la lista en javascript
        let li = document.createElement("li");  //creo un nodo de la lista del HTML
        li.textContent = amigo; //asigno al nodo creado el nombre 
        ul_HTML.appendChild(li);    //referencio el nodo a la lista del HTML 

    })
}

function sortearAmigo(){
    if (lista_amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;

    }else{
        if(lista_amigos.length===lista_numero_secreto.length){
            alert("Todos los amigos fueron sorteados una vez");

            if(confirm("¿Deseas reiniciar el juego?")){
                lista_amigos=[];
                lista_numero_secreto=[];

                let ul_HTML = document.getElementById("lista_amigos");
                ul_HTML.innerHTML = ""; // Limpia la lista en el HTML
                
                let resultado_HTML = document.getElementById("resultado");
                resultado_HTML.innerHTML = ""; // Limpia el resultado en el HTML

                alert("Vuelve a empezar.");
                
            }else{
                alert("Gracias por jugar.");

            }

        }else{
            let numero_aleatorio = buscar_Numero();
            let amigo_sorteado = lista_amigos[numero_aleatorio];

            let resultado_HTML = document.getElementById("resultado");
            resultado_HTML.innerHTML = `<li>${amigo_sorteado}</li>`; // Mostrar el nombre en la lista

        }        
    }    
};

function buscar_Numero(){
    let encontrado=false;
        
    var numeroSecreto = Math.floor(Math.random() * lista_amigos.length);

    while(encontrado==false && numeroSecreto!==null){
        if (lista_numero_secreto.includes(numeroSecreto)){        
            numeroSecreto = Math.floor(Math.random() * lista_amigos.length);

        }else{        
            lista_numero_secreto.push(numeroSecreto);
            encontrado=true;

        }
    }
    
    return numeroSecreto;
};