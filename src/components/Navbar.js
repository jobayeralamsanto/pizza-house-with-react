import React from "react";
import SearchField from "react-search-field";
import AddShoppingCart from '@material-ui/icons/AccessAlarms';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="category">
          <img src="/img/category_link.png" alt="category" />
        </div>
        <a className="course" href="">Explore Course</a>
        <SearchField
            placeholder="Search..."
            searchText="search course"
            classNames="test-class"
          />
          <div className="dropdwon">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              BDT
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>BDT</MenuItem>
              <MenuItem onClick={handleClose}>EURO</MenuItem>
              <MenuItem onClick={handleClose}>USD</MenuItem>
            </Menu>
          </div>
          <div className="shopping card">
          <a className="shop card" href="">  < AddShoppingCart/></a>
       </div>
       <div className="button">
       <Button variant="contained" color="primary1" href="#contained-buttons">
          LOGIN
        </Button>
            </div>
            <div className="button">
       <Button variant="contained" color="primary2" href="#contained-buttons">
          REGISTER
        </Button>
            </div>
          
        
        
      </div>
     
    </nav>
  );
};

export default Navbar;
