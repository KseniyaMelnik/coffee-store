import React from "react";
import RSschool from "./../../assets/images/rs_school_js.svg"
import gitHub from "./../../assets/images/GitHub-Mark-64px.png"
import style from "./styles.module.scss"
import commonContainer from "./../../common/styles/style.module.scss"


        
export const Footer = () => {
    return  <footer className={style.container}>
        <div className={commonContainer.container}>
            <div className={style.logo}> 
            <a href="https://rs.school/js/">
                <img src={RSschool} alt="RSschool" />
            </a>
            </div>
            <div className={style.github}>
                <a href="https://github.com/KseniyaMelnik">
                <img src={gitHub} alt="gitHub" />
                </a>
            </div>
            <div className={style.copyright}>
            © Rolling Scopes School, 2022
            </div>
        </div>
        
    </footer>
}