import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface Props {
  children?: string;
}

const Lists = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <List sx={{ display: 'flex', flexDirection: 'row',
    marginLeft:'40px' }}>
        <List
          sx={{
            font: 'Cera Pro',
            //margin: '20px',
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D787E',
          }}
        >
          <ListItem
            sx={{ fontFamily: 'Cera Pro', fontStyle: 'normal' }}
          >
            <Typography
              variant="body1"
              sx={{ color: '#03314B', fontWeight: '700' }}
            >
              Editorial
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>Book lists</Typography>
          </ListItem>
          <ListItem>
            <Typography>What is Nonfiction?</Typography>
          </ListItem>
          <ListItem>
            <Typography>What to read next?</Typography>
          </ListItem>
          <ListItem>
            <Typography>Benefits of reading</Typography>
          </ListItem>
        </List>

        <List
          sx={{
            font: 'Cera Pro',
           // margin: '16px 0px',
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D787E',
          }}
        >
          <ListItem
            sx={{ fontFamily: 'Cera Pro', fontStyle: 'normal' }}
          >
            <Typography
              variant="body1"
              sx={{ color: '#03314B', fontWeight: '700' }}
            >
              Useful links
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>Pricing</Typography>
          </ListItem>
          <ListItem>
            <Typography>Blinkist business</Typography>
          </ListItem>
          <ListItem>
            <Typography>Gift cards</Typography>
          </ListItem>
          <ListItem>
            <Typography>Blinkist magaine</Typography>
          </ListItem>
          <ListItem>
            <Typography>Contact & help</Typography>
          </ListItem>
        </List>

        <List
          sx={{
            font: 'Cera Pro',
           // margin: '16px 0px',
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D787E',
          }}
        >
          <ListItem
            sx={{ fontFamily: 'Cera Pro', fontStyle: 'normal' }}
          >
            <Typography
              variant="body1"
              sx={{ color: '#03314B', fontWeight: '700' }}
            >
              Company
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>About</Typography>
          </ListItem>
          <ListItem>
            <Typography>Careers</Typography>
          </ListItem>
          <ListItem>
            <Typography>partners</Typography>
          </ListItem>
          <ListItem>
            <Typography>Code of Conduct</Typography>
          </ListItem>
        </List>
      </List>
    </div>
  );
};

export default Lists;
