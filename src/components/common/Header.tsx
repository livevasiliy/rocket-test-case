import React from "react";
import logo from '../../assets/logo.svg';
import githubLogo from "../../assets/github.svg";

const Header: React.FC = () => {
    return (
        <nav className={"navbar navbar-dark bg-dark"}>
            <a className={"navbar-brand flex-wrap"}
               href="/"
            >
                <img
                    src={logo}
                    width="50"
                    height="60"
                    className={"d-inline-block align-middle"}
                    alt="Rocket Test Case"
                    loading="lazy"
                />
                <span>Rocket Test Case</span>
            </a>
            <a
                className={"ml-auto"}
                href="https://github.com/livevasiliy/rocket-test-case"
                title={"Посмотреть исходный код"}
            >
                <img
                    src={githubLogo}
                    width="50"
                    height="60"
                    className={"d-inline-block align-middle"}
                    alt="Ссылка на репозитории проекта"
                    loading="lazy"
                />
            </a>
        </nav>
    )
}

export default Header
