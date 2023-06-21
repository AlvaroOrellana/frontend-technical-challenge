import SidePanel from "@Components/SidePanel";
import usePodcastDetails from "@Hooks/usePodcastDetails";
import { Grid, Skeleton, Typography, Divider } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./EpisodeViewStyles";
import { PodcastDetailType } from "types";

const EpisodeView: React.FC = () => {
  const styles = useStyles();
  const { podcastId, episodeId } = useParams();
  const { podcastDetails, podcastData } = usePodcastDetails();
  const episodeData = useMemo(
    () =>
      podcastDetails?.find(
        ({ trackId }: PodcastDetailType) => trackId.toString() === episodeId
      ),
    [episodeId, podcastDetails]
  );

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
      <Grid display="flex" direction="column" flex={1} gap={4} item>
        <Grid
          display="flex"
          flexDirection="column"
          direction="column"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          padding={2}
          borderRadius={2}
          gap={3}
        >
          <Typography variant="h5" className={styles.fontBold}>
            {episodeData?.trackName}
          </Typography>
          <Typography variant="body1" className={styles.fontItalic}>
            {episodeData?.description}
          </Typography>
          <Divider />
          <audio
            controls
            src={episodeData?.episodeUrl}
            className={styles.player}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EpisodeView;
