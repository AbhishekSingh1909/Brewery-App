import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";

export const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Button component={Link} to="/breweries-list">
        Get Breweries List
      </Button>
      <Outlet />
    </div>
  );
};
