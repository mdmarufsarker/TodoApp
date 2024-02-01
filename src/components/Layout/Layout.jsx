import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { Box, Container } from "@stacklearner/spark-ui";

const Layout = ({ children }) => {
  return (
    <Box className={styles.container}>
      <Navbar />
      <Container p="md">{children}</Container>
      <Footer />
    </Box>
  );
};

export default Layout;
