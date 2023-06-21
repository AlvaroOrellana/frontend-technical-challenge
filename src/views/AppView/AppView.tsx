import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomeView from "@Views/HomeView";
import DetailsView from "@Views/DetailsView";
import EpisodeView from "@Views/EpisodeView";
import Header from "@Components/Header";
import { Box } from "@mui/material";
import { useStyles } from "./AppViewStyles";

const Router = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <MemoryRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomeView} />
          <Route path="/podcast/:podcastId" Component={DetailsView} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            Component={EpisodeView}
          />
        </Routes>
      </MemoryRouter>
    </Box>
  );
};

const AppView = () => <Router />;

export default AppView;
