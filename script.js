
const form = document.getElementById('quadratic')
resultElement = document.getElementById('result')

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const a = parseFloat(form.elements['a'].value);
    const b = parseFloat(form.elements['b'].value);
    const c = parseFloat(form.elements['c'].value);
    const x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) /(2 * a);
    const x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) /(2 * a);

    resultElement.innerHTML = "For the equation <strong>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0</strong>, x can equal <strong>" + x1 + "</strong> OR <strong>" + x2 + "</strong>";


})