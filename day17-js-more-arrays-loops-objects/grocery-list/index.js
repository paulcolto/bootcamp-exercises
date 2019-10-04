const groceryList = [
    ['apples', '1kg'],
    ['bananas', '1kg'],
    ['cakes', '5'],
    ['donuts', '6']
];

document.addEventListener('DOMContentLoaded', () => {
    const listElm = document.querySelector('.list');

    for (const item of groceryList) {
        const html = (
            `<div class="list">
            <span>${item[0]}</span>
            <span>${item[1]}</span>
            </div>
            <div class="btn">
            <button class="my-btn">Order</button>
            </div>`
        );
        listElm.innerHTML += html;
    }



    /* let newElement = document.createElement('input');
    document.body.appendChild(newElement); */
})