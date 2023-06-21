import { formatReleaseDate, formatLength } from "@Utils/index";
import { TableRow, TableCell } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./EpisodeRowStyles";

type EpisodeRowType = {
  trackName: string;
  podcastId: string;
  trackId: number;
  releaseDate: string;
  trackTimeMillis: number;
};

const EpisodeRow = ({
  trackName,
  podcastId,
  trackId,
  releaseDate,
  trackTimeMillis,
}: EpisodeRowType) => {
  const styles = useStyles();

  return (
    <TableRow
      key={trackName}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        <Link
          to={`/podcast/${podcastId}/episode/${trackId}`}
          className={styles.noDecoration}
        >
          {trackName}
        </Link>
      </TableCell>
      <TableCell>{formatReleaseDate(releaseDate)}</TableCell>
      <TableCell align="right">{formatLength(trackTimeMillis)}</TableCell>
    </TableRow>
  );
};

export default EpisodeRow;
