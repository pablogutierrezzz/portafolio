let parrafo = document.getElementById('p');
let btn = document.getElementById('dark-mode');

let title_1 = document.getElementById('first-title');
let title_2 = document.getElementById('second-title');
let title_3 = document.getElementById('contact');
let a_1 = document.getElementById('first-a');
let a_2 = document.getElementById('second-a');
let a_3 = document.getElementById('third-a');
let nav = document.querySelector('nav');

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

maquinadeescribir("Hola me llamo Pablo Gutierrez, tengo 17 años y soy desarrollador full-stack Trainee, este es mi portafolio personal, espero que sea agradable a la vista.", 50, parrafo);

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

window.addEventListener('scroll', () => {
    let pos_title_1 = title_1.getBoundingClientRect().top;
    let background_nav = getComputedStyle(nav);

    if(pos_title_1 == 270 && background_nav.getPropertyValue("background").slice(0, 15) == "rgb(38, 37, 38)"){
        a_1.classList.add('expand-dark');
    } else if(pos_title_1 == 270 && background_nav.getPropertyValue("background").slice(0, 15) != "rgb(38, 37, 38)"){
        a_1.classList.add('expand-light');
    } else if(pos_title_1 != 270){
        a_1.classList.remove('expand-light');
        a_1.classList.remove('expand-dark');
    }
})

window.addEventListener('scroll', () => {
    let pos_title_2 = title_2.getBoundingClientRect().top;
    let background_nav = getComputedStyle(nav);

    if(pos_title_2 == 270 && background_nav.getPropertyValue("background").slice(0, 15) == "rgb(38, 37, 38)"){
        a_2.classList.add('expand-dark');
    } else if(pos_title_2 == 270 && background_nav.getPropertyValue("background").slice(0, 15) != "rgb(38, 37, 38)"){
        a_2.classList.add('expand-light');
    } else if(pos_title_2 != 270){
        a_2.classList.remove('expand-light');
        a_2.classList.remove('expand-dark');
    }
})

window.addEventListener('scroll', () => {
    let pos_title_3 = title_3.getBoundingClientRect().top;
    let background_nav = getComputedStyle(nav);

    if(pos_title_3 <= 246 && background_nav.getPropertyValue("background").slice(0, 15) == "rgb(38, 37, 38)"){
        a_3.classList.add('expand-dark');
    } else if(pos_title_3 <= 246 && background_nav.getPropertyValue("background").slice(0, 15) != "rgb(38, 37, 38)"){
        a_3.classList.add('expand-light');
    } else if(pos_title_3 != 246){
        a_3.classList.remove('expand-light');
        a_3.classList.remove('expand-dark');
    }
})

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
});

