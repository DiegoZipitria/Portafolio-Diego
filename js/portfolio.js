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


// =========================
// CHATBOT STUDIO PERSA
// =========================


// Elementos


const chatbotButton =
    document.getElementById("chatbot-button");

const chatbotWindow =
    document.getElementById("chatbot-window");

const chatbotClose =
    document.getElementById("chatbot-close");

const chatbotMessages =
    document.getElementById("chatbot-messages");

const chatbotQuestions =
    document.querySelectorAll(
        "#chatbot-questions button"
    );


// =========================
// RESPUESTAS
// =========================

const answers = {

    precio:
        "El precio depende del tipo de página, la cantidad de secciones y las funcionalidades que necesites. Podés contactarnos para solicitar una cotización personalizada.",

    tiempo:
        "El tiempo de desarrollo depende del proyecto. Una página web sencilla o informativa puede estar lista en días, mientras que proyectos más completos pueden requerir más tiempo.",

    servicios:
        "Ofrecemos diseño y desarrollo de páginas web corporativas, landing pages, portfolios, tiendas online y soluciones web personalizadas.",

    responsive:
        "Sí. Todas nuestras páginas se diseñan para adaptarse a computadoras, tablets y celulares.",

    dominio:
        "Nosotros ofrecemos el servicio de compra y configuracion de dominio en nuestro producto te ofrecemos una lista de dominios disponibles y seleccionas el que desees para tu negocio, tambien podemos adaptar el servicio a un dominio ya comprado. La contratación de estos servicios puede variar según las necesidades del proyecto.",

    mantenimiento:
        "Sí. Podemos realizar modificaciones, actualizaciones y mantenimiento de tu página después de su lanzamiento.",

    contacto:
        "Podés solicitar una cotización desde la sección de Contacto de nuestra página. Contanos qué necesitás y nos pondremos en contacto contigo."

};


// =========================
// ABRIR CHATBOT
// =========================

chatbotButton.addEventListener("click", () => {

    chatbotWindow.classList.add("active");

});


// =========================
// CERRAR CHATBOT
// =========================

chatbotClose.addEventListener("click", () => {

    chatbotWindow.classList.remove("active");

});


// =========================
// AGREGAR MENSAJE
// =========================

function addMessage(text, type) {

    const message =
        document.createElement("div");

    message.classList.add(
        type === "bot"
            ? "bot-message"
            : "user-message"
    );

    message.textContent = text;

    chatbotMessages.appendChild(message);


    // Bajar automáticamente

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;

}


// =========================
// PREGUNTAS
// =========================

chatbotQuestions.forEach((button) => {

    button.addEventListener("click", () => {

        const question =
            button.textContent.trim();

        const answer =
            answers[button.dataset.question];


        // Mostrar pregunta del usuario

        addMessage(
            question,
            "user"
        );


        // Pequeño retraso para que parezca
        // una conversación real

        setTimeout(() => {

            addMessage(
                answer,
                "bot"
            );

        }, 400);

    });

});

const projects = [
    
    {
        image: "img/proyecto1.PNG",
        category: "DESARROLLO WEB",
        title: "Proyecto Web Corporativo",
        description:
            "Sitio web moderno y profesional diseñado para mejorar la presencia digital de una empresa.",
        link: "https://diegozipitria.github.io/Aurora.github.io/ "
    },

    {
        image: "img/proyecto2.PNG",
        category: "E-COMMERCE",
        title: "Tienda Online",
        description:
            "Tienda online diseñada para mostrar productos y facilitar las ventas de manera sencilla y profesional.",
        link: "https://nehlulu.com/"
    }

];


