//llamamos a los botones y el div en donde se ven los numeros del html
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

//metodo forEach para el array de los botones que se genera con el querySelectorAll
botones.forEach(boton => {

    boton.onclick = () => {
        //esta constante imprime el contenido de cada boton al que le damos click
        const botonApretado = boton.textContent;

        //condicional para que el boton C borre todo el contenido de "pantalla"
        if (boton.id === "c") {
            pantalla.textContent = "";
            return;
        }

        //condicional para que la flechita borre el ultimo numero que pusimos y si esta la palabra error y tocamos la flecha va a vaciar el div
        if (boton.id === "borrar") {

            if (pantalla.textContent === "Error") {
                pantalla.textContent = "";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //condicional para que cuando tocamos el boton igual trate de resolver lo que esta en "pantalla" y sino tira error
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }

        //condicional para que si esta la palabra error y tocamos un boton se reemplace por la palabra error, y sino simplemente muestra el boton presionado
        if (pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        
    };
});