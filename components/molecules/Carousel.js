import Box from "components/atoms/Box";
import Grid from "components/atoms/Grid";
import styles from "./Carousel.module.css";

const Carousel = ({ children, mobileCarousel = false }) => (
  <Box className={styles.container}>
    <Grid
      columns={2}
      gapSize="default"
      className={styles.track}
      carousel={mobileCarousel}
    >
      {children}
    </Grid>
  </Box>
);

export default Carousel;
