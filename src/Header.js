import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import { name } from './Login';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  const styles = {
    textDecoration: "none"
  };

  const handleCartButton = () => {
    if (user) {
      history.push('/checkout')
    } else {
      alert('you need to sign in to add to cart');
      history.push('/login');
    }
  };

  return (
    <div className="header">
      <Link to="/" >
        <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
    
      <div className= "header-search">
        <input className="header-searchInput" type= "text" />
        <SearchIcon className="header-searchIcon" />
        {/* Logo */}
      </div>
      
      <div className="header-nav">
        <Link to={!user && "/login"} style={styles}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne"> Hello {!user ? 'Guest' : user.email }</span>
            <span className="header-optionLineTwo">{user ? "Sign Out" : "Sign In" }</span>
          </div>
        </Link>
        
        <Link to='/orders' style={styles}>
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo"> & Orders</span>
          </div>
        </Link>

        {/* <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div> */}

        {/* <Link to={'/checkout'} style={styles}> */}
          <div className="header-optionBasket" onClick={handleCartButton}>
            <ShoppingCartIcon />
            <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
          </div>
        {/* </Link> */}

      </div>
      
    </div>
  )
}

export default Header;
