let box = document.querySelector('#box');
box.innerHTML = 0;
let increment = document.querySelector('#increment').addEventListener('click', () => {
    box.innerHTML++;
    if (box.innerHTML > 10) {
        box.innerHTML = 10;
    }

    colorChanger();
});

let decrement = document.querySelector('#decrement').addEventListener('click', () => {
    box.innerHTML--;
    if (box.innerHTML < 0) {
        box.innerHTML = 0;
    }

    colorChanger();
})

let reset = document.querySelector('#reset').addEventListener('click', () => {
    box.innerHTML = 0;
})

// change the color
const colorChanger = () => {
    if (box.innerHTML%2 == 0) {
        box.style.backgroundColor = 'green';
    } else {
        box.style.backgroundColor = 'red';
    }
}

// make the backgroundcolor green by default
box.style.backgroundColor = 'green'
