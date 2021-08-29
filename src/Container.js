import Menu from "./Menu";
import { menuList } from "./MenuData";
import React, { useState } from "react";


export default function Container() {

    const [mealOrder, setMealOrder] = useState([]);
    const [drinkOrder, setDrinkOrder] = useState([]);
    const [dessertOrder, setDessertOrder] = useState([]);

    menuList[0].order = { mealOrder, addOrder, removeOrder };
    menuList[1].order = { drinkOrder, addOrder, removeOrder };
    menuList[2].order = { dessertOrder, addOrder, removeOrder };
    const [sendStatus, setSendStatus] = useState("");

    function isReady(param, type) {
        let mealLength = mealOrder.length;
        let drinkLength = drinkOrder.length;
        let dessertLength = dessertOrder.length;
        if (param) {
            switch (type) {
                case "meal":
                    mealLength++;
                    break;
                case "drink":
                    drinkLength++;
                    break;
                case "dessert":
                    dessertLength++;
                    break;
                default: break;
            }
            if (mealLength && drinkLength && dessertLength && !sendStatus) {
                setSendStatus("send-ready");
            }
        } else {
            switch (type) {
                case "meal":
                    mealLength--;
                    break;
                case "drink":
                    drinkLength--;
                    break;
                case "dessert":
                    dessertLength--;
                    break;
                default: break;
            }
            if ((!mealLength || !drinkLength || !dessertLength) && sendStatus === "send-ready") {
                setSendStatus("");
            }
        }
    }
    function addOrder(order, type) {
        switch (type) {
            case "meal":
                setMealOrder([...mealOrder, order]);
                break;
            case "drink":
                setDrinkOrder([...drinkOrder, order]);
                break;
            case "dessert":
                setDessertOrder([...dessertOrder, order]);
                break;
            default: break;
        }
        isReady(true, type);
    }
    function removeOrder(order, type) {
        switch (type) {
            case "meal":
                setMealOrder(mealOrder.filter(option => option !== order));
                break;
            case "drink":
                setDrinkOrder(drinkOrder.filter(option => option !== order))
                break;
            case "dessert":
                setDessertOrder(dessertOrder.filter(option => option !== order))
                break;
        }
        isReady(false, type);
    }
    console.log(mealOrder, drinkOrder, dessertOrder);
    return (
        <main className="container">
            {menuList.map((menu, index) => <Menu menu={menu} key={index} />)}
            <SendButton sendStatus={sendStatus} />
        </main>
    );
}
function SendButton({ sendStatus }) {
    return (
        <div className="button-bar ">
            <button className={"send-request " + sendStatus}>
                {sendStatus ? "Fechar pedido" : <h1>Selecione os 3 itens <br /> para fechar o pedido</h1>}
            </button>
        </div>
    );
}
