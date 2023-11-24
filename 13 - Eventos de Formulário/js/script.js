let listaAnimais = [
    {
        idAnimal: 1,
        nome: "Barao",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequatur iusto ex similique nulla iste in eos eveniet repellat hic ",
        img: "./img/img1.webp",
    },
    {
        idAnimal: 2,
        nome: "big",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequatur iusto ex similique nulla iste in eos eveniet repellat hic ",
        img: "./img/img2.jpg",
    },
    {
        idAnimal: 3,
        nome: "Bob",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequatur iusto ex similique nulla iste in eos eveniet repellat hic ",
        img: "./img/img3.webp",
    },
    {
        idAnimal: 4,
        nome: "Boo",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequatur iusto ex similique nulla iste in eos eveniet repellat hic ",
        img: "./img/img4.jpg",
    },
    {
        idAnimal: 5,
        nome: "Bigbig",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequatur iusto ex similique nulla iste in eos eveniet repellat hic ",
        img: "./img/img5.webp",
    },

]


const criarCards = () => {
    let container = document.querySelector(".container");

    listaAnimais.forEach((elemento) => {
        let card = `<div class="card">
            <img class="card-img" src="${elemento.img}"/>
            <h2 class="card-titulo">${elemento.nome}</h2>
            <p class="card-descricao">${elemento.descricao}</p>
            <a class="card-botao" idAnimal="${elemento.idAnimal}">ADOTAR</a>
        </div>
        `;
        container.innerHTML += card;
    });
};

window.addEventListener("load", () => {
    criarCards();

    let cards = document.querySelectorAll(".card");
    cards.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add("change-scale");
        });
        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove("change-scale");
        });
        elemento.lastElementChild.addEventListener("click", (event) => {
            event.preventDefault();

            alert( elemento.lastElementChild.getAttribute("idAnimal"));
            window.location.href = "./adotar.html";
        });
    });
});


/*let container = document.querySelector(".container");
container.style.backgroundColor = "pink";  */
