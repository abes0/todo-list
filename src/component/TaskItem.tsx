import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  title: {
    fontSize: 18,
  },
  date: {
    fontSize: 12,
  },
  text: {
    fontSize: 14,
  }
})

const TaskItem = (props: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" className={classes.title}>{props.title}</Typography>
        <Typography color="textSecondary" className={classes.date}>{props.date}</Typography>
        <Typography className={classes.date}>{props.text}</Typography>
      </CardContent>
    </Card>
  )
}
TaskItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
}

export default TaskItem;