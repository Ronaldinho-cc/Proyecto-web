// Obtener elementos del DOM
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var closeBtn = document.getElementById("close-btn");
var imgClickable = document.querySelectorAll(".galeria");

// Función para mostrar el modal con la imagen seleccionada
function showModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Agregar evento click a las imágenes clickeables
imgClickable.forEach(function(img) {
    img.addEventListener("click", function() {
        showModal(this.src);
    });
});

// Agregar evento click al botón de cierre
closeBtn.addEventListener("click", closeModal);

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});