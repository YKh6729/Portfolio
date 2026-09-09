import { FC } from "react";
import styles from "./footer.module.css";
import { facebook, instagram, github, linkedIN } from "./icons";
import Logotype from "../../../shared/components/logos/logotype";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/y.kh6729",
    icon: facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/y_kh6729/",
    icon: instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yura-khachatryan-522895212/",
    icon: linkedIN,
  },
  {
    name: "GitHub",
    url: "https://github.com/YKh6729",
    icon: github,
  },
];

export const Footer: FC = () => {
  return (
    <footer>
      <div>
        <div className={styles.inTouch}>
          <div className={styles.helpText}>Get in Touch With Us</div>
          <div className={styles.mail}>
            <a href="mailto:yurakhachatryan3@gmail.com">
              yurakhachatryan3@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.logoName}>
            <Logotype />
          </div>
          <div className={styles.adress}>
            Shirakatsi St., 66 bld.,
            <br />
            Gyumri 3108, Armenia
          </div>

          <div className={styles.contact}>
            <div className={styles.contactNumber}>+374 93 04 73 77</div>
            <div className={styles.socialIcons}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} logo`}
                    className={styles.socialIconImg}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.copyright}>
          © 2024 YURIK. Let's create something amazing together! All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
