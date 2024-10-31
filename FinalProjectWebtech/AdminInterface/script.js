
/////Menu bar code
document.addEventListener('DOMContentLoaded', function () {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    const menu = document.querySelector('.menu-bar');
    let logo = document.querySelector('.shop-logo');


    menu.onclick = function () {
        main.classList.toggle('active');
        navigation.classList.toggle('active');
        logo.classList.toggle('active');
    }

    //add  event listener to the navigation bar
    let listOfnavigation = document.querySelectorAll('.navigation  li a');
    let loadDynamic = document.querySelector('.loadContent');


    function activenavigation() {
        listOfnavigation.forEach((navigation) => {
            navigation.classList.remove('active');
        });

        this.classList.add("active")

        //  // Load content based on the active link

        if (this.classList.contains('products active')) {
            loadDynamic.innerHTML = '';
            $('.loadContent').load('products.html');
        }


    }

    //event handler for adding active to list
    listOfnavigation.forEach((nav) => nav.addEventListener('click', activenavigation))

    // When the "products" menu item is clicked
    document.querySelector('.Products').addEventListener('click', function (event) {
        event.preventDefault();
        fetch('productPage/products.html')
            .then(response => response.text())
            .then(products => {
                document.getElementById('contentForm').innerHTML = products;
                // Attach event listeners to buttons in the new content
                attachButtonListeners();
            })
            .catch(error => console.error('Error loading products:', error));
    });
    
    function attachButtonListeners() {
        const buttons = document.querySelectorAll('#contentForm .your-button-class');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Your button click logic here
                console.log('Button clicked!');
            });
        });
    }

});