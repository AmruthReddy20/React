import React from 'react';
import { Button } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import { StandardLonghandProperties } from 'csstype';
import * as CSS from 'csstype';
import { Color, TypographyVariants } from '../../../Types/Types';

interface Props {
  variant?: 'contained' | 'text' | 'outlined';
  color?: Color;
  typoColor?: Color;
  children: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  width?: StandardLonghandProperties<
    string | number,
    string
  >['width'];
  height?: StandardLonghandProperties<
    string | number,
    string
  >['height'];
  typo?: TypographyVariants;
  border?: CSS.Property.Border | number;
  id?: string;
}

const Buttons = (props: Props) => {
  const {
    children,
    startIcon,
    endIcon,
    width,
    height,
    variant,
    typo,
    color,
    typoColor,
    id,
  } = props;
  return (
    <div style={{ width: width, height: height }}>
      <Button
        variant={variant}
        color={color}
        sx={{ width: '100%', alignItems: 'center' }}
      >
        <h2 test-id="id-2"> Hello </h2>
        <h3 title="Header">There</h3> 
        <NavItem
          children={children}
          startIcon={startIcon}
          endIcon={endIcon}
          typo={typo}
          color={typoColor}
        />
      </Button>
    </div>
  );
};

export default Buttons;
