import makeStyles from "@material-ui/core/styles/makeStyles";

export const HeaderStyles = () => ({
  root: {},
  successIcon: {
    color: "green",
    height: "44px !important",
    width: "44px !important",
  },
});

export const useStyles = makeStyles(HeaderStyles, {
  name: "HeaderStyles",
});

export type HeaderStylesStyledProps = typeof HeaderStyles;

export default HeaderStyles;
