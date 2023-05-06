import Image from 'next/image';
import React from 'react';

import BannerImage from '../assets/images/banner_image.png';
import SalesForceIcon from '../assets/images/salesforce_logo.svg';
import WeIcon from '../assets/images/we_logo.svg';

const Banner: React.FC<{}> = () => {
  return (
    <div className="banner">
      <div className="banner__heading">
        <h1>WeWork + Salesforce</h1>
        <button>Publish/Share</button>
      </div>
      <div className="image__container">
        <Image src={BannerImage} alt="banner_image" className="banner__image" />
        <div className="image__container__heading">
          <h1>
            Workspace
            <br /> Proposal
          </h1>
        </div>
        <div className="salesforce_we_logo_container">
          <Image src={WeIcon} alt="we_icon" className="we_icon" />
          +
          <Image
            src={SalesForceIcon}
            alt="salesforce_icon"
            className="salesforce_icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
