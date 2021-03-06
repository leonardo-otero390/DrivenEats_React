const menuDessert = [
    {
        name: "Biscoitos Scooby",
        img: {
            src: "./assets/images/desserts/Biscoitos_Scooby.png",
            alt: "Caixa de Biscoitos"
        },
        description: "Um docinho para dividir com seu amiguinho de quatro patas",
        price: "R$6,99"
    },
    {
        name: "Chiclé-livro",
        img: {
            src: "./assets/images/desserts/book-gum.jpg",
            alt: "Desenho de livrinhos"
        },
        description: "É só mascar e começar a codar",
        price: "R$0,42"
    },
    {
        name: "Donut",
        img: {
            src: "./assets/images/desserts/donut.jpg",
            alt: "Rosquinha com cobertura rosa"
        },
        description: "Perfeito para comer em rondas",
        price: "R$4,50"
    },
    {
        name: "Feijãozinho de todos os sabores",
        img: {
            src: "./assets/images/desserts/jelly-bean.jpg",
            alt: "Caixinha de balas"
        },
        description: "Tem gosto de meleca ou limonada?",
        price: "R$50,00"
    },
]
const menuDrink = [
    {
        name: "Refrigerante de laranja",
        img: {
            src: "./assets/images/drinks/fanta.jpg",
            alt: "Lata de refrigerante"
        },
        description: "O Kel ama Refrigerante de laranja e você?",
        price: "R$3,99"
    },
    {
        name: "Cerveja duff",
        img: {
            src: "./assets/images/drinks/duff.jpg",
            alt: "Desenho logo duff"
        },
        description: "A melhor de Springfield",
        price: "R$7,00"
    },
    {
        name: "Água voss",
        img: {
            src: "./assets/images/drinks/voss.jpg",
            alt: "Aguinha garrafa"
        },
        description: "Não tem gosto, nem cheiro e nem cor",
        price: "R$150,00"
    },
    {
        name: "Poção de vida e mana",
        img: {
            src: "./assets/images/drinks/mana-health.jpg",
            alt: "Garrafinha de mana e de vida"
        },
        description: "Depois de bebê-las ficará pronto para a próxima batalha",
        price: "R$10,00"
    },
]
const menuMeal = [
    {
        name: "Hamburguer de siri",
        img: {
            src: "./assets/images/meal/Sponge-Bob-Burguer.png",
            alt: "Desenho de hamburguer"
        },
        description: "Uma fórmula secreta de sabor",
        price: "R$35,90"
    },
    {
        name: "Scooby Sandwich",
        img: {
            src: "./assets/images/meal/scooby.jpg",
            alt: "Foto de sanduíche"
        },
        description: "Um sanduíche monstruoso",
        price: "R$17,00"
    },
    {
        name: "Espinafre do po-pye",
        img: {
            src: "./assets/images/meal/spinach.jpg",
            alt: "Desenho de espinafre"
        },
        description: "Espinafre dos fortes",
        price: "R$4,20"
    },
    {
        name: "Ramen naruto",
        img: {
            src: "./assets/images/meal/Ramen.webp",
            alt: "Desenho de Ramen"
        },
        description: "Um ramen saboroso com narutos",
        price: "R$30,25"
    }
];
export const menuList = [
    {
        name: menuMeal,
        type: "meal"
    },
    {
        name: menuDrink,
        type: "drink"
    },
    {
        name: menuDessert,
        type: "dessert"
    },
]
