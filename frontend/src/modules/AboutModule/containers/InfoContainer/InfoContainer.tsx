import { FC } from "react";
import styles from "../../AboutModule.module.css";

const InfoContainer: FC = () => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.slogan}>
                from initial design concepts to scalable server architecture
            </div>
            <div className={styles.infoText}>
                I am a passionate and dedicated software engineer with a strong background in web development. I have experience in building responsive and user-friendly web applications using modern technologies such as React, TypeScript, and Node.js. I am always eager to learn new skills and stay up-to-date with the latest industry trends. My goal is to create innovative solutions that make a positive impact on users' lives.
            </div>
            <div className={styles.photos}>
                <img className={styles.photo1} src="" />
                <img className={styles.photo2} src="" />
            </div>
        </section>
    );
};

export default InfoContainer;