import { Link } from "react-router-dom";
import { useStyles } from "./SidePanelStyles";
import { Divider, Grid, Typography } from "@mui/material";

type SidePanelProps = {
  imgUrl: string;
  title: string;
  author: string;
  summary: string;
  podcastId: string;
};

const SidePanel = ({
  imgUrl,
  title,
  author,
  summary,
  podcastId,
}: SidePanelProps) => {
  const styles = useStyles();

  return (
    <Grid
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      borderRadius={2}
      padding={4}
      gap={2}
      display="flex"
      direction="column"
      xs={3}
    >
      <Grid style={{ textAlign: "center" }}>
        <Link to={`/podcast/${podcastId}`}>
          <img src={imgUrl} className={styles.image} alt={imgUrl} />
        </Link>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <Link to={`/podcast/${podcastId}`} style={{ textDecoration: "none" }}>
          <Typography variant="body1" style={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Link>
        <Typography variant="body1" style={{ fontStyle: "italic" }}>
          by {author}
        </Typography>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <Typography variant="body1" style={{ fontWeight: 600 }}>
          Description
        </Typography>
        <Typography
          variant="body1"
          style={{ fontStyle: "italic", lineBreak: "anywhere" }}
        >
          {summary}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SidePanel;
