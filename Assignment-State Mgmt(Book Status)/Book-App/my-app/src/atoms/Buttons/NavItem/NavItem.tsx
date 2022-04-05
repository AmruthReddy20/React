import Button from '@mui/material/Button';
import React from 'react';
import Typography from '@mui/material/Typography';
import { TypographyVariants } from '../../../Types/Types';
interface Props {
  children?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  classes?: object;
  color?: string;
  endIcon?: React.ReactNode;
  size?: string;
  startIcon?: React.ReactNode;
  typo?: TypographyVariants;
  variant?: 'contained' | 'outlined' | 'text';
  component?: React.Component;
}

const NavItem = (props: Props) => {
  const {
    children,
    width,
    height,
    top,
    left,
    typo,
    classes,
    color,
    endIcon,
    size,
    startIcon,
    variant,
    component,
  } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: width,
        height: height,
      }}
    >
      <div data-testid="startIcon">{startIcon}</div>
      <Typography
        variant={typo}
        sx={{
          position: 'relative',
          left: left,
          color: `${color}.main`,
          textStyle: 'none',
          textTransform: 'none',
        }}
      >
        {children}
      </Typography>
      <div data-testid="endIcon">{endIcon}</div>
    </div>
  );
};

export default NavItem;
