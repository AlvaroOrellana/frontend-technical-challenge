import makeStyles from "@material-ui/core/styles/makeStyles";

export const EpisodeTableStyles = () => ({
  fontBold: {
    fontWeight: 600,
  },
});

export const useStyles = makeStyles(EpisodeTableStyles, {
  name: "EpisodeTableStyles",
});

export type EpisodeTableStylesStyledProps = typeof EpisodeTableStyles;

export default EpisodeTableStyles;
