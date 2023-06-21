import EpisodeTable from "@Components/EpisodeTable/EpisodeTable";
import SidePanel from "@Components/SidePanel";
import usePodcastDetails from "@Hooks/usePodcastDetails";
import { Grid, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useStyles } from "./DetailsViewStyles";

const DetailsView: React.FC = () => {
  const styles = useStyles();
  const { podcastDetails, podcastData } = usePodcastDetails();
  const { podcastId } = useParams();

  return (
    <Grid container xs={12} gap={8}>
      {podcastData && podcastId ? (
        <SidePanel
          imgUrl={podcastData["im:image"][2].label}
          title={podcastData["im:name"].label}
          author={podcastData["im:artist"].label}
          summary={podcastData.summary.label}
          podcastId={podcastId}
        />
      ) : (
        <Skeleton variant="rectangular" height={256} width={192} />
      )}
      {podcastDetails && (
        <Grid item display="flex" flex={1} gap={4} direction="column">
          <Grid className={styles.styledGrid}>
            <Typography variant="h5" className={styles.fontBold}>
              Episodes: {podcastDetails.length}
            </Typography>
          </Grid>
          <Grid className={styles.styledGrid}>
            <EpisodeTable
              podcastDetails={podcastDetails}
              podcastId={podcastId!}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DetailsView;
