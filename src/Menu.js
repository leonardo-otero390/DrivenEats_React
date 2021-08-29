import React, { useState } from "react";

function MenuOption(props) {
    const { name, img, description, price } = props.menu;
    const { src, alt } = img;
    const { mealOrder, drinkOrder, dessertOrder, addOrder ,removeOrder} = props.order;
    const type = props.type;
    const [selection, setSelection] = useState("");
    const [counter, setCounter] = useState(0);

    function initCount() {
        if (counter >= 1) return;
        setSelection("selected");
        setCounter(1);
        addOrder({ name, qtd: counter + 1 }, type);

    }
    function increment() {
        setCounter(counter + 1);
        let thisOption;
        switch (type) {
            case "meal":
                thisOption = mealOrder.find(option => option.name === name);
                break;
            case "drink":
                thisOption = drinkOrder.find(option => option.name === name);
                break;
            case "dessert":
                thisOption = dessertOrder.find(option => option.name === name);
                break;
            default: break;
        }

        thisOption.qtd = counter + 1;

    }
    function decrement() {
        if (counter === 1) setSelection("");
        setCounter(counter - 1);
        let thisOption;
        switch (type) {
            case "meal":
                thisOption = mealOrder.find(option => option.name === name);
                break;
            case "drink":
                thisOption = drinkOrder.find(option => option.name === name);
                break;
            case "dessert":
                thisOption = dessertOrder.find(option => option.name === name);
                break;
            default: break;
        }

        thisOption.qtd = counter - 1;
        if (thisOption.qtd === 0) removeOrder(thisOption,type);
    }
    return (
        <li className={"option " + selection} onClick={initCount}>
            <img src={src} alt={alt} />
            <h4 className="option-name"> <strong> {name}</strong></h4>
            <p className="option-description"> {description}</p>
            <footer>
                <h4 className="option-price"><strong> {price}</strong></h4>
                <div className="counter">
                    <button className="decrement" onClick={decrement}>-</button>
                    <h4><strong>{counter}</strong></h4>
                    <button className="increment" onClick={increment}>+</button>
                </div>
            </footer>
        </li>
    );
}
export default function Menu(props) {
    const { name, type, order } = props.menu;
    let menuTitle;
    if (type === 'meal') menuTitle = "Primeiro seu prato"; else if (type === 'drink') {
        menuTitle = "Agora a bebida";
    } else menuTitle = "Por fim um docinho";
    return (
        <section className="menu">
            <h2 className="menu-name">{menuTitle}</h2>
            <ul className="options">
                {name.map((option, index) => <MenuOption menu={option} order={order} type={type} key={index} />)}
            </ul>
        </section>
    );
}