import Menu from "./Menu";
import { menuList } from "./MenuData";
import React, { useState } from "react";


export default function Container() {

    const [trashLoad,setTrashLoad] = useState(0); // this variable force update page when order quantity change in Menu.js
    const [mealOrder, setMealOrder] = useState([]);
    const [drinkOrder, setDrinkOrder] = useState([]);
    const [dessertOrder, setDessertOrder] = useState([]);

    const totalOrder = { mealOrder, drinkOrder, dessertOrder }

    menuList[0].order = { mealOrder, addOrder, removeOrder };
    menuList[1].order = { drinkOrder, addOrder, removeOrder };
    menuList[2].order = { dessertOrder, addOrder, removeOrder };
    const [sendStatus, setSendStatus] = useState("");

    function updateTrash (){
        setTrashLoad(trashLoad+1);
    }

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

    return (
        <main className="container">
            {menuList.map((menu, index) => <Menu menu={menu} key={index} trash={updateTrash} />)}
            <SendButton sendStatus={sendStatus} totalOrder={totalOrder}/>
        </main>
    );
}
function SendButton({ sendStatus, totalOrder }) {
    const { mealOrder, drinkOrder, dessertOrder } = totalOrder;
    function orderText(order) {
        if (order.quantity > 1) {
            return `${order.name} (${order.quantity}X)`;
        }
        return `${order.name}`;
    }
    function orderTotalPrice() {
        let totalPrice = 0;
        let thisPriceInNumber;
        for (let i = 0; i < mealOrder.length; i++) {
            thisPriceInNumber = Number(mealOrder[i].price.replace('R$', '').replace(',', '.'));
            totalPrice += thisPriceInNumber * mealOrder[i].quantity;
        }
        for (let i = 0; i < drinkOrder.length; i++) {
            thisPriceInNumber = Number(drinkOrder[i].price.replace('R$', '').replace(',', '.'));
            totalPrice += thisPriceInNumber * drinkOrder[i].quantity;
        }
        for (let i = 0; i < dessertOrder.length; i++) {
            thisPriceInNumber = Number(dessertOrder[i].price.replace('R$', '').replace(',', '.'));
            totalPrice += thisPriceInNumber * dessertOrder[i].quantity;
        }
        return `R$ ${totalPrice.toFixed(2)}`;
    }
    const message = `Olá, gostaria de fazer o pedido:
    - Prato: ${mealOrder.map((m) => orderText(m))}
    - Bebida: ${drinkOrder.map((m) => orderText(m))}
    - Sobremesa: ${dessertOrder.map((m) => orderText(m))}
    -Total: ${orderTotalPrice()}`;
    function sendMessage() {
        if (sendStatus) {
            const URI = "https://wa.me/5567992727452?text=" + encodeURIComponent(message);
            window.open(URI)
        }
    }
    return (
        <div className="button-bar" onClick={sendMessage}>
            <button className={"send-request " + sendStatus}>
                {sendStatus ? "Fechar pedido" : <h1>Selecione os 3 itens <br /> para fechar o pedido</h1>}
            </button>
        </div>
    );
}
