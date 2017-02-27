import {
  AppBar,
  Button,
  Checkbox,
  Link,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Brightness2, WbSunny } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <AppBar
      position="static"
      inputProps={{ "aria-label": "search" }}
      color="secondary"
    >
      <Toolbar>
        <Typography variant="h6" className={classes.typographyStyles}>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Mini
            <span
              style={{
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              {props.checked ? "Crowdcube" : " Seedrs"}
            </span>
          </a>
        </Typography>

        <Checkbox
          checked={props.checked}
          onChange={props.onChange}
          icon={<WbSunny style={{ fill: theme.palette.primary.main }} />}
          checkedIcon={
            <Brightness2 style={{ fill: theme.palette.primary.main }} />
          }
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
