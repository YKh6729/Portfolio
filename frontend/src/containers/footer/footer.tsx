import { FC } from "react"
import "./footer.css"
import { facebook, instagram, github, linkedIN } from "./icons"
import myLogo from "../../components/logos";

const socialLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/y.kh6729',
        icon: facebook,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/y_kh6729/',
        icon: instagram,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yura-khachatryan-522895212/',
        icon: github,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/YKh6729',
        icon: linkedIN,
    },
];

export const Footer: FC = () => {
    return (<>
        <footer>
            <div className="help-text">Get in Touch With Us</div>
            <div className="mail">
                <a href="mailto:yurakhachatryan3@gmail.com">yurakhachatryan3@gmail.com</a>
            </div>
            <div className="info">
                <div className="logo"><img src={myLogo} className="logo-icon"/></div>
                <div className="adress">
                    Shirakatsi St., 66 bld.,<br />
                    Gyumri 3108, Armenia</div>
                <div className="contact">+374 93 04 73 77
                    <div className="social-icons">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                                <img src={link.icon} alt={`${link.name} logo`} className="social-icon" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <div className="line"></div>
            <div className="copyright">© 2024 YURIK. Let's create something amazing together! All rights reserved.</div>
        </footer>
    </>)
} 