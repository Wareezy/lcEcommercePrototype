let btnSort = document.querySelector('[data-sort]');
let purchasedJackets = [];
let main = document.querySelector('main');

// Retrieve items from localStorage or initialize an empty array
let items = JSON.parse(localStorage.getItem('jackets'));

// Call display() when the page loads
display();

main.addEventListener('click', function () {
    if (event.target.hasAttribute('data-add')) {
        add(event.target.value);
    }
});

// Sort function for organizing items alphabetically
function sortItems() {
    items.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

// Display function to render the tables
function display() {
    // Sort the items before displaying
    // sortItems();

    main.innerHTML = items.map(function (item, index) {
        return `
            <table class="tableProd">
                <tr>
                    <td><img src="${item.url}" width='300' height='300'/></td>
                </tr>
                <tr>
                    <td><h2>${item.name}</h2></td>
                </tr>
                <tr>
                    <td><p>${item.description}</p></td>
                </tr>
                <tr>
                    <td><p>${item.price}</p></td>
                </tr>
                <tr>
                    <td><button id="buttonProd" value='${index}' data-add>Add to cart</button></td> 
                </tr>
            </table>
        `;
    }).join('');
}

// Event listener for the Sort button
btnSort.addEventListener('click', () => {
    sortItems();
    display();
});
