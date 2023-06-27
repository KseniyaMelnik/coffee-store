import {useState} from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer"
import style from "./style.module.scss"
import commonStyles from "./../../common/styles/style.module.scss"
import backgroundImage from "./../../assets/images/wooden-texture.jpg"
import mainImage from "./../../assets/images/pngwing.com.png"
import { Basket } from "../Basket";
const mainBackground = {
    backgroundImage: `url(${backgroundImage})`,
};


export const App = () => {
    const [basketActive, setBasketActive] = useState(false);


    return <div>
        
        <div style={mainBackground} className={style.mainImage}>
            <Header openModal={()=>setBasketActive(true)}/>
            <div className={style.content}>
            <h1 className={style.title}>
                    Coffee Market
            </h1>

            <a className={`${commonStyles.button} ${style.mainButton}`}
            href="#main"
            > View products </a>
            </div>
            <div className={style.image}>
                <img src={mainImage} alt="a cup of coffee" />
            </div>
        </div>
        <Main />
        <Footer />
        <Basket setActive={setBasketActive} active={basketActive}/>
    </div>
}