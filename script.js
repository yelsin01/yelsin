let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sqlmysql");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("office");
        habilidades[5].classList.add("soporte");
        habilidades[6].classList.add("photoshop");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("amabilidad");
        habilidades[12].classList.add("puntualidad");
        habilidades[13].classList.add("responsabilidad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 