import makeStyles from "@material-ui/core/styles/makeStyles";

export const DetailsViewStyles = () => ({
  fontBold: {
    fontWeight: 600,
  },
  styledGrid: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: 2,
    borderRadius: 2,
  },
});

export const useStyles = makeStyles(DetailsViewStyles, {
  name: "DetailsView",
});

export type DetailsViewStyledProps = typeof DetailsViewStyles;

export default DetailsViewStyles;
