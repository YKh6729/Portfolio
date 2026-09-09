import { FC } from "react";
import Button from "../../../../shared/components/button";
import styles from "../../HomeModule.module.css";

interface IAboutMeContainerProps {
  aboutMe: string;
  image: string;
}

const AboutMeContainer: FC<IAboutMeContainerProps> = ({ aboutMe, image }) => {
  return (
    
      <section className={styles.aboutMeInformation}>
        <div className={styles.information}>
          <div>
            <h2 className={styles.title2}>Let's get know about me closer</h2>
            <div className={styles.aboutMeText}>{aboutMe}</div>
          </div>
          <Button
            buttonName={"Discover More About Me"}
            backgroundColor="var(--primary-color)"
            width="288px"
            height="59px"
            fontSize="15px"
            padding="20px 50px 20px 50px"
            fontWeight="600"
          />
        </div>
        <div className={styles.myImage}>
          <img src={image} />
        </div>
      </section>
   
  );
};

export default AboutMeContainer;
