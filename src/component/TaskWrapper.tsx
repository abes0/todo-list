import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      padding: '1vw',
      display: "flex",
      flexWrap: "wrap",
    }
  })
)

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
