import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route path="/podcast/:podcastId" />
      <Route path="/podcast/:podcastId/episode/:episodeId" />
    </Routes>
  </BrowserRouter>
);

const AppView = () => {
  return <Router />;
};

export default AppView;
