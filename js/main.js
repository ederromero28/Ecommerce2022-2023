const bar = document.getElementById('bar');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (cerrar) {
    cerrar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//  WhatsApp
document.querySelector("#principal").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "51946502602";

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		¡Hola!, me interesa tu producto.%0A`;

    window.open(url);
});

