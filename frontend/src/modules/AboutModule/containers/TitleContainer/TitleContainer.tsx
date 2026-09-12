import { FC } from "react";
import styles from "../../AboutModule.module.css";

const TitleContainer: FC = () => {
    return (
        <section className={styles.titleSection}>
            <div className={styles.title}>
                ABOUT ME
            </div>
            <div className={styles.subtitle}>
                Little Brief About Myself
            </div>
            <div className={styles.line}>
            </div>
        </section>
    );
};

export default TitleContainer;