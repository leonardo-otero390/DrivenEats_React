import React, { useState } from "react";

function MenuOption(props) {
    const { name, img, description, price } = props.menu;
    const { src, alt } = img;
    const [selection, setSelection] = useState("");
    const [counter,setCounter] = useState(0);
    function initCount(){
        if (counter >= 1) return;
        setSelection("selected")
        setCounter(1);
    }
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        if (counter===1) setSelection("");
        setCounter(counter-1);
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
    const { name, type } = props.menu;
    let menuTitle;
    if (type === 'meal') menuTitle = "Primeiro seu prato"; else if (type === 'drink') {
        menuTitle = "Agora a bebida";
    } else menuTitle = "Por fim um docinho";
    return (
        <section className={"menu " + type}>
            <h2 className="menu-name">{menuTitle}</h2>
            <ul className="options">
                {name.map((option, index) => <MenuOption menu={option} key={index} />)}
            </ul>
        </section>
    );
}