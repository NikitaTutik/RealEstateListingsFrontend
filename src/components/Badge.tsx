import { BadgeInterface } from "../types";
import styles from "./component_css/Badge.module.css";

const Badge = ({ text, filled }: BadgeInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <small className={`${styles.badge} uppercase ${filledClass}`}>{text}</small>
  );
};
export default Badge;
