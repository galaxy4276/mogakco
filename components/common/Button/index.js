import React from 'react';
import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';

import * as S from './style';

const Button = React.forwardRef(
  ({ children, color, size, fullWidth, outline, underline, ...rest }, ref) => {
    const theme = {
      palette: {
        white: '#ffffff',
        black: '#000000',
        yellow: '#fdc500',
        blue: '#003f88',
      },
    };

    return (
      <ThemeProvider theme={theme}>
        <S.Button
          ref={ref}
          color={color}
          size={size}
          fullWidth={fullWidth}
          outline={outline}
          underline={underline}
          {...rest}
        >
          {children}
        </S.Button>
      </ThemeProvider>
    );
  },
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'yellow', 'white', 'black']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  outline: PropTypes.bool,
  underline: PropTypes.bool,
};
Button.defaultProps = {
  color: 'blue',
  size: 'medium',
  fullWidth: false,
  outline: false,
  underline: false,
};

export default Button;
