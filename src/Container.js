import Menu from "./Menu";
import { menuList } from "./MenuData";

export default function Container() {
    return (
        <main className="container">
            {menuList.map((menu,index) => <Menu menu={menu} key={index}/>)}
            <SendButton />
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
