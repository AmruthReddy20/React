import React from 'react';
import { Typography } from '@mui/material';
import BookGrid from '../BookGrid/BookGrid';
import Buttons from '../../../atoms/Buttons/Buttons/Buttons';
import { AddIcon } from '../../../Icons';

const allProps = {
  width: '100%',
  height: '52px',
  children: 'Add to library',
  startIcon: (
    <AddIcon
      sx={{
        height: '24px',
        display: 'flex',
        position: 'relative',
        top: '5px',
      }}
    />
  ),
};

interface Props {
  title: string;
}
const BooksGroup = ({ title }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
      }}
    >
      <div style={{ width: '100%', marginLeft: '280px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold',textAlign:'left',paddingLeft:'140px' }}>
          {title}
        </Typography>
      </div>
      <BookGrid
        children={
          <Buttons
            variant="contained"
            {...allProps}
            color="secondary"
          />
        }
      />
    </div>
  );
};

export default BooksGroup;
