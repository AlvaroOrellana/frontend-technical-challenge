import EpisodeRow from "@Components/EpisodeRow/EpisodeRow";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from "@mui/material";
import { PodcastDetailType } from "types";
import { useStyles } from "./EpisodeTableStyles";

type EpisodeTableType = {
  podcastDetails: PodcastDetailType[];
  podcastId: string;
};

const EpisodeTable = ({ podcastDetails, podcastId }: EpisodeTableType) => {
  const styles = useStyles();
  const episodeRowItems = podcastDetails?.map(
    ({
      trackId,
      trackName,
      releaseDate,
      trackTimeMillis,
    }: PodcastDetailType) => (
      <EpisodeRow
        trackId={trackId}
        podcastId={podcastId!}
        trackName={trackName}
        releaseDate={releaseDate}
        trackTimeMillis={trackTimeMillis}
      />
    )
  );

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5" className={styles.fontBold}>
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5" className={styles.fontBold}>
                Date
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5" className={styles.fontBold}>
                Duration
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{episodeRowItems}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeTable;
