const numbers = document.getElementById('numbers');
const result = document.getElementById('result');
let currentInput = ''; // Para almacenar la entrada actual
let expression = ''; // Para almacenar la expresión completa

numbers.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
    const button = event.target;
    const buttonValue = button.textContent;
    console.log(button)

    // Ignorar clics que no sean en botones
    if (button.tagName !== 'BUTTON') return;

    // Manejar el botón DEL
    if (buttonValue === 'DEL') {
        currentInput = currentInput.slice(0, -1);
        result.textContent = currentInput;
        return;
    }

    // Manejar el botón RESET
    if (button.classList.contains('reset')) {
        currentInput = '';
        expression = '';
        result.textContent = '';
        return;
    }

    // Manejar el botón =
    if (button.classList.contains('equals')) {
        try {
            // Reemplazar x por * para realizar la multiplicación
            expression = expression.replace(/x/g, '*');
            // Evaluar la expresión y mostrar el resultado
            const evalResult = eval(expression);
            result.textContent = evalResult;
            // Reiniciar la entrada y la expresión para nuevas operaciones
            currentInput = evalResult.toString();
            expression = evalResult.toString();
        } catch (error) {
            result.textContent = 'Error';
        }
        return;
    }

    // Agregar el valor del botón a la entrada actual y a la expresión
    currentInput += buttonValue;
    expression += buttonValue;
    result.textContent = currentInput;
}
