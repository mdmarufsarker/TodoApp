import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Box } from "@stacklearner/spark-ui";

const Navbar = () => {
  return (
    <Box color="white" p="4" bgColor="success.dark">
      <Box className={styles.navbar}>
        <h3>Todo App</h3>
        <div className={styles.navItem}>
          <Link to="/">Home</Link>
          <Link to="/task">TodoApp</Link>
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
