import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";

import YURIK from "../../../shared/components/logos/logotype";
import Button from "../../../shared/components/button";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div>
        <YURIK />
        <div
          className={`${styles.pagesLists} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <div className={styles.pages}>
            <div className={styles.home} onClick={() => navigate("/")}>
              HOME
            </div>

            <div className={styles.aboutMe} onClick={() => navigate("/about")}>
              ABOUT ME
            </div>

            <div
              className={styles.myWorks}
              onClick={() => navigate("/Works")}
            >
              MY WORKS
            </div>
          </div>

          <Button className={styles.contactButton} buttonName={"CONTACT"} />
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};
