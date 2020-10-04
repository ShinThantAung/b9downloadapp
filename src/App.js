import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import logo from "./assets/big9tv.png";
import poster from "./assets/login-bg.png";
import playstoredownload from "./assets/downloadplaystore-logo.gif";
import directdownload from "./assets/downloadbig9image.png";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  media: {
    paddingTop: "50px",
    height: 100,
  },
  buttommedia: {
    width: "200px",
    height: "150px",
  },
  rootmedia: {
    maxWidth: 500,
    textAlign: "center",
  },
  logo: {
    maxWidth: 60,
  },
  customizeToolbar: {
    minHeight: 36,
  },
  buttomsize: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(200 + theme.spacing.unit * 1 * 2)]: {
      width: 200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "red",
  },

  text: {
    textAlign: "center",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#f7f8fa" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={logo} alt="logo" className={classes.logo} />
            BIG9TV
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <Card className={classes.main} maxWidth="xs">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={poster}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.text}
            >
              အိန္ဒိယ၊ တရုတ်၊ ကိုရီးယား ရုပ်သံဇာတ်လမ်းတွဲများ၊ အဆိုတော်များစွာ၏
              MTV များ၊ Live Show များ၊ သီချင်းအသစ်များ၊
              မြန်မာ့ရုပ်ရှင်ဇာတ်ကားကောင်းများ၊ ခရီးသွားအစီစဉ်များ၊ အစရှိသော
              ကဏ္ဍအစုံအလင်အား ကြည့်ရူလိုက်ပါ။
            </Typography>
          </CardContent>
          <img
            src={directdownload}
            alt="logo"
            className={classes.buttomsize}
            onClick={() => window.open("https://bit.ly/3bWLkfz")}
          />
          <Typography
            variant="body3"
            color="primary"
            component="p"
            className={classes.text}
          >
            ပလေးစတိုးမရှိသူများအတွက်
            <br></br>
            <br></br>
            <img
              src={playstoredownload}
              alt="logo"
              className={classes.buttomsize}
              onClick={() =>
                window
                  .open(
                    "https://play.google.com/store/apps/details?id=tv.big9.otg",
                    "_blank"
                  )
                  .focus()
              }
            />
            <Typography
              variant="body2"
              color="primary"
              component="p"
              className={classes.text}
            >
              ပလေးစတိုးမှ ဒေါင်းလုပ်ပြုလုပ်ရန်အတွက်
            </Typography>
            <br></br>
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}
