import { styled } from "@mui/material/styles";
// import { NoEncryption } from '@material-ui/icons';

const Feature1Style = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  width: "100%",
  height: "fit-content",
  alignItems: "center",
  textAlign: "center",
  "& .CommonPaddingInComponents-extention": {
    padding: "4rem 3rem",
  },
  "& .owl-item": {
    width: "auto",
  },

  "& .MuiGrid-container": {
    justifyContent: "center",
  },
  " & .owl-carousel .owl-stage-outer": {
    // overflow: 'revert !important',
  },
  //    ' & .owl-custom .active.center':{
  //     overflow: 'revert !important',
  // },
  //   "& .owl-custom .owl-item.active.center": {
  //     transform: "scale(1.3)",
  //     marginBottom: "60px",
  //     zIndex: "1",
  //     "& .MuiPaper-root": { color: "#0077B3" },
  //   },
  "& .owl-custom .owl-stage": {
    overflow: "hidden",
  },
  "& .cardStyle": {
    display: "flex",
    alignItems: "center",
    maxWidth: "345",
    // marginTop:'3rem'
  },

  [theme.breakpoints.only("md")]: {
    backgroundColor: theme.palette.grey[400],
    "& .cardStyle": {
      width: "100%",
      height: "100%",
      marginTop: "2rem",
    },
  },

  [theme.breakpoints.up("lg")]: {
    // backgroundImage: "url(/images/BgImages/Feature1bg.png)",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100%",
    //   backgroundColor: "pink",

    //   "& .cardStyle": {
    //     minWidth: "300px",
    //     minHeight: "300px",
    //   },
    "& .img": {
      maxHeight: "100%",
      maxWidth: "100%",
    },
  },

  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.grey[400],
    "& .cardStyle": {
      minHeight: "200px",
    },
    "& .mainHeading": {
      fontSize: "36px",
      lineHeight: "40px",
      paddingBottom: "0px",
    },
  },
}));

export default Feature1Style;
