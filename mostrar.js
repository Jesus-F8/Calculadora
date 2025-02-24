document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display"); // Pantalla de la calculadora
    const buttons = document.querySelectorAll(".botones button"); // Todos los botones de la calculadora

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = this.innerText;

            if (buttonText === "=") {
                try {
                    display.value = eval(display.value); // Calcula el resultado
                } catch {
                    display.value = "Error";
                }
            } else if (buttonText === "C") {
                display.value = ""; // Limpia la pantalla
            } else if (buttonText === "←") {
                display.value = display.value.slice(0, -1); // Borra el último carácter
            } else {
                display.value += buttonText; // Agrega el número u operador al display
            }
        });
    });
});
