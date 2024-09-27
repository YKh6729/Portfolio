import { FC } from "react"
import "./header.css"
import myLogo from "../../components/logos"
import HomePage from "../../home-page"

export const Header: FC = () => {
    return (<>
        <header>
            <img src={myLogo} />
            <div className="pages">
                <div className="home">
                    <a href="#" onClick={() => { <HomePage /> }}>
                        HOME
                    </a>
                </div>
                <div className="about-me">ABOUT ME</div>
                <div className="my-works">MY WORKS</div></div>
            <button><div className="button-name">CONTACT</div></button>
        </header>
    </>)
} 