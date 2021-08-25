function MenuOption(props) {
    const { name, img, description, price } = props.menu;
    const { src, alt } = img;
    return (
        <li className="option">
            <img src={src} alt={alt} />
            <h4 className="option-name"> <strong> {name}</strong></h4>
            <p className="option-description"> {description}</p>
            <h4 className="option-price"><strong> {price}</strong>
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </h4>
        </li>
    );
}
export default function Menu(props) {
    const {name,type} = props.menu;
    return (
        <section className={"menu " + type}>
            <h2 className="menu-name">Primeiro seu prato</h2>
            <ul className="options">
                {name.map((option,index) =><MenuOption menu={option} key={index}/>)}
            </ul>
        </section>
    );
}