import React from "react";
import { BasketIcon } from "../BasketIcon";
import { Logo } from "../Logo";
import { Search } from "../Search";
import commonContainer from './../../common/styles/style.module.scss'
import style from './styles.module.scss';

type HeaderProps = {
    openModal: (active: boolean) => void
}

export const Header = ({openModal}: HeaderProps) => {
    return  <header className={style.container}>
        <div className={commonContainer.container}>
        <Logo />
        <Search />
        <BasketIcon openModal={openModal}/>
        </div>
    </header>
}