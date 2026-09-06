// =========================
// GALERÍA DE PROYECTOS
// =========================

const projects = [

    {
        image: "img/proyecto1.jpg",
        category: "DESARROLLO WEB",
        title: "Proyecto Web Corporativo",
        description:
            "Sitio web moderno y profesional diseñado para mejorar la presencia digital de una empresa.",
        link: "#"
    },

    {
        image: "img/proyecto2.jpg",
        category: "E-COMMERCE",
        title: "Tienda Online",
        description:
            "Tienda online diseñada para mostrar productos y facilitar las ventas de manera sencilla y profesional.",
        link: "#"
    }

];


// Proyecto actual

let currentProject = 0;


// =========================
// ELEMENTOS DEL DOM
// =========================

const image =
    document.getElementById("project-image");

const category =
    document.getElementById("project-category");

const title =
    document.getElementById("project-title");

const description =
    document.getElementById("project-description");

const link =
    document.getElementById("project-link");

const thumbnails =
    document.querySelectorAll(".thumbnail");


// =========================
// MOSTRAR PROYECTO
// =========================

function showProject(index) {

    const project = projects[index];

    currentProject = index;


    // Animación de salida

    image.style.opacity = "0";


    setTimeout(() => {

        image.src = project.image;

        image.alt = project.title;

        category.textContent = project.category;

        title.textContent = project.title;

        description.textContent = project.description;

        link.href = project.link;

        image.style.opacity = "1";

    }, 200);


    // Actualizar miniaturas

    thumbnails.forEach((thumbnail, i) => {

        thumbnail.classList.toggle(
            "active",
            i === index
        );

    });

}


// =========================
// PROYECTO ANTERIOR
// =========================

document
    .getElementById("gallery-prev")
    .addEventListener("click", () => {

        let index = currentProject - 1;

        if (index < 0) {
            index = projects.length - 1;
        }

        showProject(index);

    });


// =========================
// PROYECTO SIGUIENTE
// =========================

document
    .getElementById("gallery-next")
    .addEventListener("click", () => {

        let index = currentProject + 1;

        if (index >= projects.length) {
            index = 0;
        }

        showProject(index);

    });


// =========================
// MINIATURAS
// =========================

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        const index =
            Number(thumbnail.dataset.index);

        showProject(index);

    });

});
```
