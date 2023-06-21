import makeStyles from "@material-ui/core/styles/makeStyles";

export const SidePanelStyles = () => ({
  root: {},
  image: {
    width: 128,
    height: 128,
  },
});

export const useStyles = makeStyles(SidePanelStyles, {
  name: "SidePanelStyles",
});

export type SidePanelStylesStyledProps = typeof SidePanelStyles;

export default SidePanelStyles;
