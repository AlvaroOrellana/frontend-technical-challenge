import makeStyles from "@material-ui/core/styles/makeStyles";

export const HomeViewStyles = () => ({
  floatRight: {
    float: "right" as const,
  },
});

export const useStyles = makeStyles(HomeViewStyles, {
  name: "HomeView",
});

export type HomeViewStyledProps = typeof HomeViewStyles;

export default HomeViewStyles;
