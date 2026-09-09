import { FC, ReactNode } from "react";
import styles from "./rectangle.module.css";

interface styleProps {
  children: ReactNode;
}

const Rectangle: FC<styleProps> = ({ children }) => {
  return <div className={styles.rectangle}>{children}</div>;
};

export default Rectangle;
