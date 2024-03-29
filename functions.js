let parrafo = document.getElementById('p');
let btn = document.getElementById('dark-mode');

let e_label = document.getElementById('email_id-label');
let n_label = document.getElementById('from_name-label');
let from_name = document.getElementById('from_name');
let email_id = document.getElementById('email_id');

let nav = document.getElementById('nav-two');

const btn_s = document.getElementById('button');

const maquinadeescribir = (text = "", tiempo = 200, etiqueta = "") => {
    let array_caracteres = text.split("");
    let cont = 0;
    etiqueta.innerHTML = "";
    let escribir = setInterval(function(){
        etiqueta.innerHTML += array_caracteres[cont];
        cont++;
        if(cont == array_caracteres.length){
            clearInterval(escribir);
        }
    }, tiempo)
}

maquinadeescribir("Hola me llamo Pablo Gutierrez, tengo 18 años y soy desarrollador full-stack Trainee, este es mi portafolio personal, espero que sea agradable a la vista.", 50, parrafo);

btn.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    btn.classList.toggle('cambios');

    if(localStorage.getItem('theme') == 'false'){
        localStorage.setItem('theme', 'true');
    } else if(localStorage.getItem('theme') == 'true') {
        localStorage.setItem('theme', 'false');
    } else if(localStorage.getItem('theme') == null){
        localStorage.setItem('theme', 'true');
    }
})

if(localStorage.getItem('theme') == 'true'){
    document.body.classList.add('dark');
    btn.classList.add('cambios');
} else if(localStorage.getItem('theme') == 'false'){
    document.body.classList.remove('dark');
    btn.classList.remove('cambios');
}

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_kihid7f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      console.log('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      console.log(JSON.stringify(err));
    });

    document.getElementById('from_name').value = '';
    document.getElementById('email_id').value = '';
    document.getElementById('message').value = '';
    n_label.classList.remove('up');
    from_name.classList.remove('borders');
    e_label.classList.remove('up');
    email_id.classList.remove('borders');
});

from_name.addEventListener('focus', () => {
    n_label.classList.add('up');
    from_name.classList.add('borders');
})

from_name.addEventListener('blur', () => {
    if(from_name.value == ""){
        n_label.classList.remove('up');
        from_name.classList.remove('borders');
    }
})

email_id.addEventListener('focus', () => {
    e_label.classList.add('up');
    email_id.classList.add('borders');
})

email_id.addEventListener('blur', () => {
    if(email_id.value == ""){
        e_label.classList.remove('up');
        email_id.classList.remove('borders');
    }
})

if(window.innerWidth <= 460){

    window.addEventListener('scroll', () => {
        setTimeout(() =>{
            nav.classList.add('filtro');
        }, 4000)
    })

}

