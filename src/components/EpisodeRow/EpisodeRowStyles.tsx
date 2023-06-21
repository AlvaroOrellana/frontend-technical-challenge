import makeStyles from "@material-ui/core/styles/makeStyles";

export const EpisodeRowStyles = () => ({
  noDecoration: {
    textDecoration: "none",
  },
});

export const useStyles = makeStyles(EpisodeRowStyles, {
  name: "EpisodeRowStyles",
});

export type EpisodeRowStylesStyledProps = typeof EpisodeRowStyles;

export default EpisodeRowStyles;
