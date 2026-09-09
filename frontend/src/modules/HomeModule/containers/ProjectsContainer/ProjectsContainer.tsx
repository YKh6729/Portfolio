import { FC } from "react";
import Button from "../../../../shared/components/button";
import Styles from "../../HomeModule.module.css";
import Icon from "../../components/buttonIcon";
import Rectangle from "../../components/rectangle";

const ProjectsContainer: FC = () => {
  return (
    <section className={Styles.myProjectsHighlight}>
      <h2 className={Styles.title3}>My Projects Highlight</h2>

      <div className={Styles.projectsList}>
        <Rectangle>
          <div className={Styles.project1}>Project 1</div>
        </Rectangle>
        <Rectangle>
          <div className={Styles.project2}>Project 2</div>
        </Rectangle>
        <Rectangle>
          <div className={Styles.project3}>Project 3</div>
        </Rectangle>
        <Rectangle>
          <div className={Styles.project4}>Project 4</div>
        </Rectangle>
      </div>
      <div className={Styles.button}>
        <Button
          buttonName={"EXPLORE WORKS"}
          backgroundColor="#FF9142"
          width="242px"
          height="65px"
          icon={<Icon />}
        />
      </div>
    </section>
  );
};

export default ProjectsContainer;
