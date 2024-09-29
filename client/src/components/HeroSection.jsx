import { Link, Outlet } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <Link className={styles.link} to="/user/login">
        login
      </Link>
      <Link className={styles.link} to="/user/register">
        Register User
      </Link>
      <Link className={styles.link} to="/serviceProvider/login">
        login serviceProvider
      </Link>
      <Link className={styles.link} to="/serviceProvider/register">
        Register serviceProvider
      </Link>
      <Outlet />
    </>
  );
};

export default HeroSection;
