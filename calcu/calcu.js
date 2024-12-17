const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('#screen');
const clear = document.querySelector("#C");
const ceButton = document.querySelector('#CE');
const btnHex = document.querySelector("#btnHex");
const btnOct = document.querySelector("#btnOct");
const btnDec = document.querySelector("#btnDec");
const btnBin = document.querySelector("#btnBin");
const equalButton = document.querySelector('#equal');

const Pi = document.querySelector("#Pi");

const clear_memory = document.querySelector("#clear");
const recall_memory = document.querySelector("#recall");
const add_memory = document.querySelector("#add");
const subtract_memory = document.querySelector("#subtract");
const save_memory = document.querySelector("#save");

let memory = 0;


// Listen for button clicks
// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        // Replace special symbols with JavaScript-friendly ones
        if (btnText === '×') screen.value += '*';
        else if (btnText === '÷') screen.value += '/';
        else if (btnText === 'x²') screen.value += '**2';  // Handle square
        else if (btnText !== 'CE' && btnText !== 'C') screen.value += btnText;
    });
});

Pi.addEventListener('click', ()=>{
    screen.value += Math.PI;
})

//MC, MR, M+, M-, and MS

clear_memory.addEventListener('click', () =>{
    memory = 0;
    console.log("Memory Cleared")
})

recall_memory.addEventListener('click', () =>{
    screen.value = memory;
    console.log("Memory Recalled: " + memory);
})

add_memory.addEventListener('click', () =>{
    memory += parseFloat(screen.value) || 0;
    console.log("Memory Added: " + memory);
});

// M- - Memory Subtract
subtract_memory.addEventListener('click', () => {
    memory -= parseFloat(screen.value) || 0;
    console.log("Memory Subtracted: " + memory);
});

// MS - Memory Store
save_memory.addEventListener('click', () => {
    memory = parseFloat(screen.value) || 0;
    console.log("Memory Stored: " + memory);
});

// Function for sine calculation
function sin() {
    screen.value = Math.sin(parseFloat(screen.value));
}

// Function for cosine calculation
function cos() {
    screen.value = Math.cos(parseFloat(screen.value));
}

// Function for tangent calculation
function tan() {
    screen.value = Math.tan(parseFloat(screen.value));
}

// Function to handle backspace
function bckspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

// Function to clear 
clear.addEventListener('click', ()=>{
    screen.value = '';
})

// Function to CE 
ceButton.addEventListener('click', () => {
    // Match and remove the last operand/operator/parenthesis (including whitespace)
    screen.value = screen.value.replace(/(\s*[\d.]+|\s*[+\-×÷*\/()]|\s*\))\s*$/, '');
});

btnHex.addEventListener('click', () => {
    const number = parseInt(screen.value, 10);
    screen.value = number.toString(16).toUpperCase();
});


btnOct.addEventListener('click', ()=>{
    const number = parseInt(screen.value, 10);
    screen.value = number.toString(8).toUpperCase();    
})

btnDec.addEventListener('click', ()=>{
    const number = parseInt(screen.value, 10);
    screen.value = number.toString(10).toUpperCase();
})

btnBin.addEventListener('click', ()=>{
    const number = parseInt(screen.value, 10);
    screen.value = number.toString(2).toUpperCase();
})


equalButton.addEventListener('click', () => {
    try {
        screen.value = eval(screen.value);  // Compute the result
    } catch {
        screen.value = 'Error';  // Handle errors
    }
});






