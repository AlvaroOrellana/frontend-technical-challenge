import makeStyles from "@material-ui/core/styles/makeStyles";

export const AppViewStyles = () => ({
  root: {
    flex: 1,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: 4,
    margin: 96,
    padding: 48,
  },
});

export const useStyles = makeStyles(AppViewStyles, {
  name: "AppView",
});

export type AppViewStyledProps = typeof AppViewStyles;

export default AppViewStyles;
