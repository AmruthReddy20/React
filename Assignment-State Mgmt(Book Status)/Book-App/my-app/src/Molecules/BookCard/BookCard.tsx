import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Link,
} from '@mui/material';

import { TimeIcon, UserIcon } from '../../Icons';
import { StateProps } from '../../Types/Types';

interface Props {
  children?: React.ReactNode;
  img: StateProps;
  status?: 'lib';
}

const CardComponent = ({ children, img }: Props) => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={img.image} alt="" />
        </CardMedia>

        <CardContent>
          <Typography
            variant="subtitle1"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
          
            {img.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{display: 'flex',
              justifyContent: 'flex-start',}}>
            {img.author}
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TimeIcon
                fontSize="large"
                sx={{
                  position: 'relative',
                  top: '2px',
                  width: '22px',
                  height: '22px',
                  color: '#6D787E',
                }}
              />
              <Typography
                variant="caption3"
                sx={{ color: 'text3.main' }}
              >
                {img.minutes}
              </Typography>
            </div>
            {img.reads !== '' ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <UserIcon
                  fontSize="large"
                  sx={{
                    position: 'relative',
                    top: '2px',
                    width: '22px',
                    height: '22px',
                    color: '#6D787E',
                  }}
                />
                <Typography
                  variant="caption3"
                  sx={{ color: 'text3.main' }}
                >
                  1.9k reads
                </Typography>
              </div>
            ) : undefined}
          </div>
        </CardContent>
        <CardActions sx={{ padding: '0px' }}>{children}</CardActions>
      </Card>
    </div>
  );
};

const BookCard = ({ children, img, status }: Props) => {
  return (
    <div>
      {status === undefined ? (
         <Link href={`/bookdetails/${img.id}`}>
        <CardComponent children={children} img={img} />
        </Link>
      ) : (
        <CardComponent children={children} img={img} />
      )}
    </div>
  );
};

export default BookCard;
