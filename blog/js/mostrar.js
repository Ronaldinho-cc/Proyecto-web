const verMasButtons = document.querySelectorAll('.ver-mas');
verMasButtons.forEach(button => {
button.addEventListener('click', function () {
    const section = this.parentElement;
    const content = section.querySelector('.description');

    if (content.style.display === 'none' ) {
        content.style.display = 'block';
        this.textContent = 'Ver menos';
    } else {
        content.style.display = 'none';
        this.textContent = 'Ver más';
    }
});
});