import makeStyles from "@material-ui/core/styles/makeStyles";

export const PodcastStyles = () => ({
  root: {
    justifyContent: "center",
  },
  image: {
    position: "absolute" as const,
    width: 128,
    height: 128,
    borderRadius: "50%",
  },
  title: {
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
    fontWeight: 600,
  },
  infoBox: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: 4,
    flex: 1,
    marginTop: 72,
    padding: 16,
    paddingTop: 64,
  },
  typo: {
    textAlign: "center" as const,
  },
  noDecoration: {
    textDecoration: "none",
  },
});

export const useStyles = makeStyles(PodcastStyles, {
  name: "PodcastStyles",
});

export type PodcastStylesStyledProps = typeof PodcastStyles;

export default PodcastStyles;
