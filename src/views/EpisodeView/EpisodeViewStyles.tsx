import makeStyles from "@material-ui/core/styles/makeStyles";

export const EpisodeViewStyles = () => ({
  fontBold: {
    fontWeight: 600,
  },
  fontItalic: {
    fontStyle: "italic",
  },
  player: {
    width: "100%",
  },
});

export const useStyles = makeStyles(EpisodeViewStyles, {
  name: "EpisodeView",
});

export type EpisodeViewStyledProps = typeof EpisodeViewStyles;

export default EpisodeViewStyles;
