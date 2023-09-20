import { AppBar, Typography, Toolbar, Button, Icon } from "@mui/material";
import SportsBarTwoToneIcon from "@mui/icons-material/SportsBarTwoTone";
import { Link } from "react-router-dom";

import { NavButtonGroup } from "../Styles/component-style";

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1">
            Breweries
            <span>
              <Icon component={SportsBarTwoToneIcon} fontSize="inherit" />
            </span>
          </Typography>

          <NavButtonGroup variant="contained">
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/breweries-list">
              Brewery list
            </Button>
          </NavButtonGroup>
        </Toolbar>
      </AppBar>
    </header>
  );
};
