import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Header>
      <div className="logo">
        <Link to="home">glasse<span>s</span></Link>
      </div>

      <div className="menu-mobile" onClick={handleClick}>
        {click ? <MenuIcon /> : <CloseIcon />}
      </div>

      <ul>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li className="icon">
          <Link to="/contacts">
            <PhoneIcon />
          </Link>
        </li>
        <li className="icon">
          <Link to="/">
            <ShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default Navbar;
