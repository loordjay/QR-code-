let image = document.getElementById('image');
let content = document.getElementById('content'); // added closing parenthesis
let btnCreate = document.getElementById('btnCreate');

btnCreate.onclick = () => {
    if (content.value == '') return;
    let linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
    image.src = linkQR + '?size=500x500&data=' + encodeURIComponent(content.value); // added encodeURIComponent
}