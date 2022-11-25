var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}


//  WhatsApp Joyas
document.querySelector("#joyas").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono2 = "51918610299";
    let asunto = document.querySelector("#asunto").value;

    let url = `https://api.whatsapp.com/send?phone=${telefono2}&text=
    Hola, me interesa el producto%0A
    con código "${asunto}".%0A
    `;

    window.open(url);
});