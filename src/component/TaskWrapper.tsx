import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '1vw',
  }
})

const TaskWrapper = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

TaskWrapper.propTypes = {
  children: PropTypes.node
}

export default TaskWrapper;
