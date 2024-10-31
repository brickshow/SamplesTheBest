document.addEventListener('DOMContentLoaded', function () {

    let addProd = document.querySelector('.addProducts');
    let showProd = document.getElementById("showAddProducts");

    showProd.onclick =  function () {
        addProd.classList.add('show');
    }

});