import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./PodcastStyles";
import { Link } from "react-router-dom";

export type PodcastProps = {
  imgSrc: string;
  title: string;
  author: string;
  podcastId: string;
};

const Podcast: React.FC<PodcastProps> = ({
  imgSrc,
  title,
  author,
  podcastId,
}: PodcastProps) => {
  const styles = useStyles();

  return (
    <Link to={`/podcast/${podcastId}`} className={styles.noDecoration}>
      <Grid container className={styles.root}>
        <img
          src={imgSrc}
          className={styles.image}
          alt={`podcast-${podcastId}`}
        />
        <Grid item className={styles.infoBox}>
          <Typography
            variant="body1"
            color="textPrimary"
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className={styles.typo}
          >
            Author: {author}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Podcast;
