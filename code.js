function itinerario() {
    var actividadesAcuaticas = ["Natación", "Waterpolo", "Buceo"];
    var deportesEquipo = ["Fútbol", "Pádel", "Balonmano"];

    
    var actividadesContainer = document.querySelector('.actividadesContainer');

   
    var botonActividades = document.querySelector('.button1');
    botonActividades.addEventListener('click', function() {
        toggleMostrarActividades(actividadesAcuaticas, deportesEquipo, actividadesContainer);
    });
}

function toggleMostrarActividades(actividadesAcuaticas, deportesEquipo, container) {

    if (container.innerHTML.trim() === '') {
       
        mostrarActividades(actividadesAcuaticas, deportesEquipo, container);
    } else {
        
        container.innerHTML = '';
    }
}

function mostrarActividades(actividadesAcuaticas, deportesEquipo, container) {
    
    container.innerHTML = '';

    imprimirLista("Actividades Acuáticas:", actividadesAcuaticas, container);
    imprimirLista("Deportes de equipo:", deportesEquipo, container);
}

function imprimirLista(titulo, lista, container) {
    var listaHTML = "<h3>" + titulo + "</h3><ul>";
    for (var i = 0; i < lista.length; i++) {
        listaHTML += "<li>" + lista[i] + "</li>";
    }
    listaHTML += "</ul>";

    container.innerHTML += listaHTML;
}

itinerario();  
