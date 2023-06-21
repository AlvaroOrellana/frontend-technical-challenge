import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useStyles } from "./HeaderStyles";

const Header = () => {
  const loading = true;
  const styles = useStyles();
  return (
    <Grid
      direction="row"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 32,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h4">Podcaster</Typography>
      </Link>
      {!loading ? (
        <CircularProgress />
      ) : (
        <CheckCircleIcon classes={{ root: styles.successIcon }} />
      )}
    </Grid>
  );
};

export default Header;
