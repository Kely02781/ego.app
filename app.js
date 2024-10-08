window.addEventListener('load', () => {
    document.querySelector('#btnCargar').addEventListener('click', obtenerDatos);
});

function obtenerDatos() {
    const Nasa_api = 'G7CDqzWEskSHNCqjbuXGpdcYnIIlJJPBcZQ4bCXQ';
    const fechaSeleccionada = document.querySelector('#fechaSeleccionada').value;
    
    let ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_api}`;
    
    // Añadir la fecha seleccionada a la URL si existe
    if (fechaSeleccionada) {
        ruta += `&date=${fechaSeleccionada}`;
    }

    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado))
        .catch(error => console.error('Error al obtener los datos:', error));
}

function mostrarDatos({ date, explanation, media_type, title, url }) {
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;

    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;

    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;

    const multimedia = document.querySelector('#c_multimedia');
    if (media_type === 'video') {
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="Imagen del día de NASA APOD">`;
    }
}
