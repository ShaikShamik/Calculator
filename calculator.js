let del = document.getElementById('delete');
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

del.addEventListener('click', function () {
   display.value = display.value.toString().slice(0, -1); 
});

clear.addEventListener('click', function () {
    display.value = '';
});

equal.addEventListener('click', function () {
    try {
        let expression = display.value;
        expression = expression.replace(/÷/g, '/');
        let result = eval(expression);
        if (Number.isFinite(result)) {
            display.value = result.toFixed(2);
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
});