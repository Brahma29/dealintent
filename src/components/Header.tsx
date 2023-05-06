import Image from 'next/image';
import React, { useState } from 'react';

//Icons Import
import Logo from '../assets/images/header_circles.svg';
import RightArrow from '../assets/images/right_arrow.svg';
import SearchIcon from '../assets/images/search_icon.svg';
import MailIcon from '../assets/images/mail_inbox.svg';
import NotificationIcon from '../assets/images/notification_icon.svg';
import HelpIcon from '../assets/images/help_circle.svg';
import UserImage from '../assets/images/user_image.svg';
import Link from 'next/link';

const Header: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="header__wrapper">
      <Link href="/" className="header__logo">
        <Image src={Logo} alt="header__logo" />
        <Image src={RightArrow} alt="right_arrow" />
      </Link>
      <ul className={`nav__menu ${isMenuOpen && 'open'}`}>
        <li className="menu__item">
          <Image
            src={SearchIcon}
            alt="search_icon"
            className="menu__item__icon"
          />
          <p className="menu__item__title">Search</p>
        </li>
        <li className="menu__item">
          <Image src={MailIcon} alt="mail_icon" className="menu__item__icon" />
          <p className="menu__item__title">Inbox</p>
        </li>
        <li className="menu__item">
          <Image
            src={NotificationIcon}
            alt="notification_icon"
            className="menu__item__icon"
          />
          <p className="menu__item__title">Notifications</p>
        </li>
        <li className="menu__item">
          <Image src={HelpIcon} alt="help_icon" className="menu__item__icon" />
          <p className="menu__item__title">Help</p>
        </li>
        <li className="menu__item">
          <Image src={UserImage} alt="help_icon" className="user__image" />
          <div className="user__details">
            <div className="user__name">Jane Smith</div>
            <div className="user__position">Sales Executive</div>
          </div>
        </li>
      </ul>
      <div className="menu__icon" onClick={menuToggle}>
        <div className={`menu__hamburger__bar ${isMenuOpen && 'open'}`}></div>
      </div>
    </div>
  );
};

export default Header;
