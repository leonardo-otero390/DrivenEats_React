import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function ReviewComponent({ order }) {
    const { name, price, quantity } = order;
    const priceInNumber = (price.replace('R$', '').replace(',', '.') * quantity).toFixed(2);
    return (
        <div>
            <h2>{name}</h2>
            <h2>R${priceInNumber.replace('.', ',')}</h2>
        </div>
    );
}

function Review({ sendStatus, totalOrder }) {
    const phoneNumber = 5567992727452;
    const wppURLBasic = `https://wa.me/${phoneNumber}?text=`;
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
        return `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }
    const message = `Olá, gostaria de fazer o pedido:
    - Prato: ${mealOrder.map((m) => orderText(m))}
    - Bebida: ${drinkOrder.map((m) => orderText(m))}
    - Sobremesa: ${dessertOrder.map((m) => orderText(m))}
    -Total: ${orderTotalPrice()}`;

    function sendMessage() {

        if (sendStatus === "send-ready") {
            const URI = wppURLBasic + encodeURIComponent(message);
            window.open(URI)
        }
    }
    return (
        <div className={sendStatus ? "confirm-screen" : "hidden"}>
            <div className="confirm-background"></div>
            <div className="confirm-square">
                <h2 className="confirm-title"><strong>confirme seu pedido</strong></h2>
                <div className="review">
                    {mealOrder.map(order => <ReviewComponent order={order} />)}
                    {drinkOrder.map(order => <ReviewComponent order={order} />)}
                    {dessertOrder.map(order => <ReviewComponent order={order} />)}
                    <div class="total">
                        <h2> <strong> TOTAL</strong></h2>
                        <h2> <strong> {orderTotalPrice()}</strong></h2>
                    </div>
                    <button onClick={sendMessage}> <strong> Tudo certo, pode pedir! </strong></button>
                    <Link to="/">
                        <h1 className="cancel">Cancelar</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function SendButton({ sendStatus, totalOrder }) {

    return (

        <Router>
            <Route>
                <Link to="/revisao" onClick={e => sendStatus ? e : e.preventDefault()}>
                    <div className="button-bar">
                        <button className={"send-request " + sendStatus}>
                            {sendStatus ? "Fechar pedido" : <h1>Selecione os 3 itens <br /> para fechar o pedido</h1>}
                        </button>
                    </div>
                </Link>
            </Route>
            <Switch>
                <Route path="/revisao">
                    <Review sendStatus={sendStatus} totalOrder={totalOrder} />
                </Route>
            </Switch>
        </Router>




    );
}
