const counters = document.querySelector('.count');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const img = document.querySelector('img')

let count = 0;

function updateCount() {
    counters.textContent = count;
}

function addsub(action) {
    switch (action) {
        case 'add':
            count++;
            add.classList.add('img__scale');
            break;
        case 'subtract':
            if (count > 0) {
                count--;
                subtract.classList.add('img__scale');
            }
            break;

    }
    updateCount();
    setTimeout(() => {
        add.classList.remove('img__scale');
        subtract.classList.remove('img__scale');

    }, 300);
}

add.addEventListener('click', () => addsub('add'));
subtract.addEventListener('click', () => addsub('subtract'));

