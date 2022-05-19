// PLACE YOUR CODE HERE

let emphasis = document.querySelectorAll('.emphasis');
for (e of emphasis) {
    e.style.fontFamily = 'Verdana';
}

let finished = document.querySelectorAll('li.finished');
for (f of finished) {
    f.style.textDecoration = 'line-through';
}

let todo = document.querySelectorAll('ul#low-priority li.todo');
for (t of todo) {
    t.style.backgroundColor = 'blue';
}

let alert = document.querySelectorAll('.alert');
for (a of alert) {
    a.style.color = 'red';
}

