import React from 'react';
import TabsBar from '../../Molecules/TabsBar/TabsBar';
import NavItem from '../../atoms/Buttons/NavItem/NavItem';
import Template from '../Template';
const MyLibrary = () => {
  return (
    <Template>
		  <div style={{width:'100%',padding:'30px 0px 0px 280px ',color:'#03314B',margin:'0px'}}>
        <NavItem
          children="My Library"
          typo="h1"
        
        />
      </div>
      <TabsBar />
    </Template>
  );
};

export default MyLibrary;
