import React, { useState } from "react";

function MenuOption(props) {
    const { name, img, description, price } = props.menu;
    const { src, alt } = img;
    const [selection, setSelection] = useState("");
    return (
        <li className={"option " + selection} onClick={() => setSelection("selected")}>
            <img src={src} alt={alt} />
            <h4 className="option-name"> <strong> {name}</strong></h4>
            <p className="option-description"> {description}</p>
            <footer>
                <h4 className="option-price"><strong> {price}</strong></h4>
                <div className="counter">
                    <button className="decrement">-</button>
                    <h4><strong>1</strong></h4>
                    <button className="increment">+</button>
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