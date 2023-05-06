import Image from 'next/image';
import React from 'react';

//Icons
import SortIcon from '../assets/images/arrow_sort_down.svg';
import EyeOff from '../assets/images/eye_off.svg';
import DeleteIcon from '../assets/images/delete_icon.svg';
import PanelImage from '../assets/images/office_setup.png';
import ChatIcon from '../assets/images/chat_icon.svg';
import ShareIcon from '../assets/images/android_share_icon.svg';
import WeWorkLogo from '../assets/images/weWork_logo.png';
import PdfIcon from '../assets/images/pdf_icon.svg';
import DownloadIcon from '../assets/images/download_arrow.svg';
import ZoomIn from '../assets/images/zoom_in_icon.svg';
import ZoomOut from '../assets/images/zoom_out_icon.svg';
import OpenIcon from '../assets/images/open_icon.svg';

const BasicInfoTab: React.FC<{}> = () => {
  return (
    <div className="basic__info__panel">
      <div className="side__menu">
        <div className="side__menu__item">Overview</div>
        <div className="side__menu__item">Welcome</div>
        <div className="side__menu__item">Product Capabilities</div>
        <div className="side__menu__item">Customer Success Stories</div>
        <div className="side__menu__item">File Sharing</div>
        <div className="side__menu__item">Our Deck</div>
      </div>
      <div className="panel__screen">
        <div className="panel__screen__header">
          <h3>Company Profile</h3>
          <div className="action__buttons">
            <div className="action__buttons__icon">
              <Image src={SortIcon} alt="sort_icon" />
            </div>
            <div className="action__buttons__icon">
              <Image src={EyeOff} alt="eye_off_icon" />
            </div>
            <div className="action__buttons__icon">
              <Image src={DeleteIcon} alt="delete_icon" />
            </div>
          </div>
        </div>
        <div className="panel__screen__content">
          <div className="panel__toolbar">
            <div className="pdf__page__count">
              <Image src={PdfIcon} alt="pdf_icon" />
              1/5
            </div>
            <div className="panel__toolbar__icon">
              <Image src={DownloadIcon} alt="download_icon" />
            </div>
            <div className="panel__toolbar__icon">
              <Image src={ZoomOut} alt="zoom_out_icon" />
            </div>
            <div className="panel__toolbar__icon">
              <Image src={ZoomIn} alt="zoom_in_icon" />
            </div>
            <div className="panel__toolbar__icon">
              <Image src={OpenIcon} alt="open_icon" />
            </div>
          </div>
          <Image src={PanelImage} alt="panel_image" />
          <div className="panel__screen_label">
            <Image src={WeWorkLogo} alt="we_work_logo" />
            <p>For all the ways you work, we&apos;re here</p>
          </div>
        </div>
        <div className="panel__screen__icons">
          <div className="panel__screen__icon">
            <Image src={ChatIcon} alt="chat__icon" />
          </div>
          <div className="panel__screen__icon">
            <Image src={ShareIcon} alt="share__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoTab;
