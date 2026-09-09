import { FC } from "react";
import styles from "../../HomeModule.module.css";

interface ITitleContainerProps {
  logoSrc: string;
}

const TitleContainer: FC<ITitleContainerProps> = ({ logoSrc }) => {
  return (
    <section className={styles.title1}>
      <img className={styles.myLogo} src={logoSrc} />
    </section>
  );
};

export default TitleContainer;


