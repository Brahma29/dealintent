import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//Components
import BasicInfoTab from './BasicInfoTab';

const TabsContainer: React.FC<{}> = () => {
  return (
    <div className="tabs__container">
      <div className="tabs__container__heading">
        <h3>Project Scope Recap</h3>
        <div className="progress">
          <div className="progress__heading">
            <p>Mutual Action Plan</p>
            <span>3%</span>
          </div>
          <div className="progress__bar__container">
            <div className="progress__bar"></div>
          </div>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Basic Info</Tab>
          <Tab>Files</Tab>
          <Tab>Mutual Action Plan</Tab>
          <Tab>Contact</Tab>
          <Tab>Internal Actions</Tab>
        </TabList>

        <TabPanel>
          <BasicInfoTab />
        </TabPanel>
        <TabPanel>
          <BasicInfoTab />
        </TabPanel>
        <TabPanel>
          <BasicInfoTab />
        </TabPanel>
        <TabPanel>
          <BasicInfoTab />
        </TabPanel>
        <TabPanel>
          <BasicInfoTab />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsContainer;
