import React from 'react';
import Button from '@material-ui/core/Button';
import propTypes from "prop-types";

const ButttonComponent = (props: any) => {
  return (
    <Button variant="contained" color="primary" href={props.href}>
      {props.children}
    </Button>
  )
}

ButttonComponent.propTypes = {
  href: propTypes.string,
  children: propTypes.string,
}

export default ButttonComponent;