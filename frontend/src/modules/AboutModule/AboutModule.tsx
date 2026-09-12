import { FC } from "react";
import styles from "./AboutModule.module.css";

import TitleContainer from "./containers/TitleContainer";
import InfoContainer from "./containers/InfoContainer";
import FollowContainer from "./containers/FollowContainer";


const AboutModule: FC = () => {
  return <main className={styles.main}>
    <TitleContainer />
    <InfoContainer />
    <FollowContainer />
  </main>;
};

export default AboutModule;
