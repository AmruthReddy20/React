import React from 'react';
import { Typography } from '@mui/material';
import Lists from '../../../atoms/Buttons/Lists/Lists';

const SideData = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // height: '500px',
      }}
    >
      <img
        src="/Images/logo.png"
        alt="logo"
        style={{ width: '99.1px', marginTop: '0px' }}
      />
      <Typography
        variant="betaSubtitle1"
        sx={{ marginTop: '20px', display: 'flex' }}
      >
        <div style={{display:'flex',flexDirection:'column',alignItems:'left'}}>
        <div > Big ideas in small packages </div>
        <div style={{display:'flex'}}>Start learning now</div>
        </div>
      </Typography>
      <Typography variant="caption" sx={{ marginTop: '150px' }}>
        © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
        Policies
      </Typography>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        //height: '370px',
        backgroundColor: '#F1F6F4',
        padding: '0px',
        marginTop: '0px',
        // paddingTop:'0px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F1F6F4',
          height: '320px',
          width: '952px',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            paddingTop: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0px auto 0px auto',
            height: '280px',
          }}
        >
          <SideData />
          <Lists />
        </div>
      </div>
    </div>
  );
};

export default Footer;
