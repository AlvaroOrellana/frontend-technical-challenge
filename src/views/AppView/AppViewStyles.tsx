// Styles
import makeStyles from "@material-ui/core/styles/makeStyles";

export const AppViewStyles = () => ({
  root: {},
});

export const useStyles = makeStyles(AppViewStyles, {
  name: "AppView",
});

export type AppViewStyledProps = typeof AppViewStyles;

export default AppViewStyles;
