import { BaseSyntheticEvent, useMemo, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import usePodcastList from "@Hooks/usePodcastList";
import Podcast from "@Components/Podcast";
import { PodcastDataType } from "types";
import { useStyles } from "./HomeViewStyles";

const HomeView: React.FC = () => {
  const styles = useStyles();
  const podcastList = usePodcastList();
  const [filteredEntries, setFilteredEntries] = useState<PodcastDataType[]>();
  const entriesItems = useMemo(
    () =>
      (filteredEntries || podcastList)?.map((element: PodcastDataType) => {
        return (
          <Grid item xs={3}>
            <Podcast
              imgSrc={element["im:image"][2].label}
              title={element["im:name"].label}
              author={element["im:artist"].label}
              podcastId={element.id.attributes["im:id"]}
            />
          </Grid>
        );
      }),
    [filteredEntries, podcastList]
  );

  const handleChange = (evt: BaseSyntheticEvent) => {
    const filterQuery = evt.target.value.toLowerCase();
    const filteredEntries = podcastList?.filter(
      (element: PodcastDataType) =>
        element["im:artist"].label.toLowerCase().includes(filterQuery) ||
        element["im:name"].label.toLowerCase().includes(filterQuery)
    );
    setFilteredEntries(filteredEntries);
  };

  return (
    <Box>
      <TextField
        placeholder="Filter podcasts..."
        onChange={handleChange}
        className={styles.floatRight}
      />
      <Grid item container xs={12} spacing={10} style={{ padding: 32 }}>
        {entriesItems}
      </Grid>
    </Box>
  );
};

export default HomeView;
