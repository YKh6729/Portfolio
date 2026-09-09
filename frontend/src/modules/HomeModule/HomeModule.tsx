import { FC, useEffect, useState, useRef } from "react";
import myLogo from "../../shared/components/logos/myLogo";
import image from "./components/image";
import aboutMe from "./components/aboutMe";

import styles from "./HomeModule.module.css";
import TitleContainer from "./containers/TitleContainer/TitleContainer";
import AboutMeContainer from "./containers/AboutMeContainer/AboutMeContainer";
import ProjectsContainer from "./containers/ProjectsContainer";

const HomeModule: FC = () => {
  const [, /*data*/ setData] = useState<string>("");
  const [, /*error*/ setError] = useState<string | null>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentPosition = 0;
    let animationFrame: number;

    const animate = () => {
      const targetPosition = window.scrollY * 0.4;

      currentPosition += (targetPosition - currentPosition) * 0.2;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${currentPosition}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/"); // Call the backend
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json(); // Parse JSON response
        setData(result.data); // Update state with the fetched data
      } catch (err) {
        setError((err as Error).message); // Handle any errors
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div ref={backgroundRef} className={styles.homeBackground}></div>
      <div className={styles.content}>
        <TitleContainer logoSrc={myLogo} />
        <AboutMeContainer aboutMe={aboutMe} image={image} />
        <ProjectsContainer />
      </div>
    </main>
  );
};

export default HomeModule;
