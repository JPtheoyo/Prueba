const gridViewButton = document.getElementById('gridView');
const listViewButton = document.getElementById('listView');
const productContainer = document.getElementById('product-container');

gridViewButton.addEventListener('click', () => {
    productContainer.classList.remove('list-view');
    productContainer.classList.add('grid-view');
});

listViewButton.addEventListener('click', () => {
    productContainer.classList.remove('grid-view');
    productContainer.classList.add('list-view');
});
