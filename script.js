
/*BOTOES DA PÁGINA PROMOÇÕES */
const btCunhado = document.querySelector('#btCunhado')
const btVegano = document.querySelector('#btVegano')
const btColesterol = document.querySelector('#btColesterol')
const btIlusao = document.querySelector('#btIlusao')

const msgCunhado = document.querySelector('#msg-cunhado')
const msgVegano= document.querySelector('#msg-vegano')
const msgcolesterol = document.querySelector('#msg-colesterol')
const msgcoIlusao = document.querySelector('#msg-ilusao')


if (btCunhado) {
    btCunhado.addEventListener('click', function() {
       
       if (msgCunhado.textContent == ""){ 
        msgCunhado.innerHTML = `<img src="fone.png" alt="Kit-cunhado" style="width: 600px; max-width: 90%; margin-top: 15px; border-radius: 12px; 
        border: 2px solid #d4af37"> 
       <br> 
       ✅ Seu fone abafador já está garantido.`;
     }
        else {
            msgCunhado.textContent = "";}
    });
}



if (btVegano) {
    btVegano.addEventListener('click', function() {
     if (msgVegano.textContent == ""){
        msgVegano.innerHTML = ` <img src="vegano.png" alt="Vegano-imagem" style="width: 600px; max-width: 90%; margin-top: 15px; border-radius: 12px; 
        border: 2px solid #d4af37"> 
        
        <br>
        ✅ Resgate agendado! Prepare o cupim para converter seu amigo.`;
    }else{
        msgVegano.textContent = "";
    }
 });
}


if (btColesterol) {
    btColesterol.addEventListener('click', function() {
     if (msgcolesterol.textContent == ""){
        msgcolesterol.innerHTML = ` <img src="colesterol.png" alt="Colesterol-img" style="width:600px; max-width:90%;
         border-radius: 12px; border: 2px solid #d4af37">
        <br>
        ✅ Desconto liberado! Traga seu exame de sangue na retirada.`;
    }else{
        msgcolesterol.textContent = "";
    }
 });
}



if (btIlusao) {
    btIlusao.addEventListener('click', function() {
     if (msgcoIlusao.textContent == ""){
        msgcoIlusao.innerHTML = `<img src="ilusao.png" alt="calculadora ilusão-img" style="width:600px; max-width:90%;
         border-radius: 12px; border: 2px solid #d4af37">
        <br>
        ✅ Parabéns pela compra! Nossos matemáticos agradecem a preferência.`;
    }else{
        msgcoIlusao.textContent = "";
    }
 });
}

/*BOTOES DA PÁGINA PROMOÇÕES */


/*FORMULÀRIO Página cliente */





const btFormulario = document.querySelector('#btn-formulario');
const msgFormulario = document.querySelector('#msg-formulario');
const textoRelato = document.querySelector('#texto-relato');
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoTelefone = document.querySelector('#telefone');

if (btFormulario) {
    btFormulario.addEventListener('click', function() {
        if (campoNome.value.trim() === "") {
            msgFormulario.textContent = "⚠️ Por favor, informe seu nome!";
        } 
        else if (campoEmail.value.trim() === "") {
            msgFormulario.textContent = "⚠️ Por favor, informe seu e-mail!";
        } 
        else if (campoTelefone.value.trim() === "") {
            msgFormulario.textContent = "⚠️ Por favor, informe seu telefone!";
        } 
        else if (textoRelato.value.trim() === "") {
            msgFormulario.textContent = "⚠️ Escreva seu relato antes de enviar!";
        }
        else {
            msgFormulario.textContent = `✅ Relato enviado com sucesso, ${campoNome.value}! Agradecemos sua participação.`;
            campoNome.value = "";
            campoEmail.value = "";
            campoTelefone.value = "";
            textoRelato.value = "";
        }
    })};



    /*CALCULADORA CHUIRRASCO*/ 

    const qtdPessoas = document.querySelector('#qtd-pessoas');
    const btCalculo = document.querySelector('#bt-calculator');
    const avisoCalculo = document.querySelector('#Resultado-churrasco')

    if(btCalculo){
        btCalculo.addEventListener('click', function(){
         const pessoas = Number(qtdPessoas.value);
         if (pessoas <= 0){
            avisoCalculo.textContent = "Digite pelo menos 1  pessoa para calcular"
         }else{
            const totalKg = pessoas * 0.5;
            avisoCalculo.textContent= `🥩 Para ${pessoas} carnívoro(s), você vai precisar de ${totalKg} kg de carne da Jubilous Steaks!`
         }
           });
    }