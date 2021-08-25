
export default function Container() {
    return (
        <main className="container">
            <MenuMeal />
            <MenuDrink />
            <MenuDessert />
            <SendButton/>
        </main>
    );
}
function SendButton() {
    return (
        <div className="button-bar">
            <button className="send-request">
                Selecione os 3 itens <br /> para fechar o pedido
            </button>
        </div>
    );
}
function MenuMeal() {
    return (
        <section className="menu meal">
            <h2 className="menu-name">Primeiro seu prato</h2>
            <ul className="options">
                <li className="option">
                    <img src="/images/meal/Sponge-Bob-Burguer.png" alt="siri-burguer" />
                    <h4 className="option-name"> <strong> Hamburguer de siri</strong></h4>
                    <p className="option-description"> Uma fórmula secreta de sabor. </p>
                    <h4 className="option-price"><strong> R$ <span>35,90</span></strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/meal/scooby.jpg" alt="scooby-sandwich" />
                    <h4 className="option-name"> <strong> Scooby Sandwich</strong></h4>
                    <p className="option-description"> Um sanduíche monstruoso </p>
                    <h4 className="option-price"><strong> R$ <span>17,00</span></strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/meal/spinach.jpg" alt="spinach" />
                    <h4 className="option-name"> <strong> Espinafre do po-pye</strong></h4>
                    <p className="option-description"> Espinafre dos fortes </p>
                    <h4 className="option-price"><strong> R$ <span>4,20</span></strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/meal/Ramen.webp" alt="naruto-ramen" />
                    <h4 className="option-name"> <strong> Ramem naruto</strong></h4>
                    <p className="option-description"> Um ramen saboroso com narutos </p>
                    <h4 className="option-price"><strong> R$ <span>30,25</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
            </ul>
        </section>
    );
}
function MenuDrink() {
    return (
        <section className="menu drink">
            <h2 className="menu-name">Agora, sua bebida</h2>
            <ul className="options">
                <li className="option">
                    <img src="/images/drinks/fanta.jpg" alt="fanta-laranja" />
                    <h4 className="option-name"> <strong> Refrigerante de laranja</strong></h4>
                    <p className="option-description"> O Kel ama Refrigerante de laranja e você? </p>
                    <h4 className="option-price"><strong> R$ <span>3,99</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/drinks/duff.jpg" alt="duff-beer" />
                    <h4 className="option-name"> <strong> Cerveja duff</strong></h4>
                    <p className="option-description"> A melhor de Springfield </p>
                    <h4 className="option-price"><strong> R$ <span>7,00</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/drinks/voss.jpg" alt="voss-water" />
                    <h4 className="option-name"> <strong> Água voss</strong></h4>
                    <p className="option-description"> Não tem gosto, nem cheiro e nem cor</p>
                    <h4 className="option-price"><strong> R$ <span>150,00</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/drinks/mana-health.jpg" alt="mana-health-potions" />
                    <h4 className="option-name"> <strong> Poção de vida e mana</strong></h4>
                    <p className="option-description"> Depois de bebê-las ficará pronto para a próxima batalha </p>
                    <h4 className="option-price"><strong> R$ <span>10,00</span></strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
            </ul>
        </section>
    );
}
function MenuDessert() {
    return (
        <section className="menu dessert">
            <h2 className="menu-name">Por fim, sua sobremesa</h2>
            <ul className="options">
                <li className="option">
                    <img src="/images/desserts/Biscoitos_Scooby.png" alt="Biscoitos_Scooby" />
                    <h4 className="option-name"> <strong> Biscoitos Scooby</strong></h4>
                    <p className="option-description"> Um docinho para dividir com seu amiguinho de quatro patas </p>
                    <h4 className="option-price"><strong> R$ <span>6,99</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/desserts/book-gum.jpg" alt="book-gum" />
                    <h4 className="option-name"> <strong> Chiclé-livro</strong></h4>
                    <p className="option-description"> É só mascar e começar a codar </p>
                    <h4 className="option-price"><strong> R$ <span>0,42</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/desserts/donut.jpg" alt="donut" />
                    <h4 className="option-name"> <strong> Donut</strong></h4>
                    <p className="option-description"> Perfeito para comer em rondas </p>
                    <h4 className="option-price"><strong> R$ <span>4,50</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
                <li className="option">
                    <img src="/images/desserts/jelly-bean.jpg" alt="mana-health-potions" />
                    <h4 className="option-name"> <strong> Feijãozinho de todos os sabores</strong></h4>
                    <p className="option-description"> Tem gosto de meleca ou limonada? </p>
                    <h4 className="option-price"><strong> R$ <span>50,00</span> </strong>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </h4>
                </li>
            </ul>
        </section>
    );
}