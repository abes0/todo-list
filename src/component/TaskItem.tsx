import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles, Card, CardContent, CardActionArea, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      width: 'calc(92% / 4)',
      textAlign: 'left',
      margin: '1%',
      [theme.breakpoints.down('md')]: {
        width: 'calc(94% / 3)',
      },
      [theme.breakpoints.down('sm')]: {
        width: 'calc(96% / 2)',
      }
    },
    wrap: {
      padding: 15,
      height: 'calc(92% / 4)',
      [theme.breakpoints.down('md')]: {
        height: 'calc(94% / 3)',
      },
      [theme.breakpoints.down('sm')]: {
        height: 'calc(96% / 2)',
      }
    },
    title: {
      fontSize: 24,
    },
    date: {
      fontSize: 12,
    },
    text: {
      fontSize: 16,
      marginTop: 20,
    }
  })
)

const TaskItem = (props: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.wrap}>
          <Typography color="textPrimary" className={classes.title}>{props.title}</Typography>
          <Typography color="textSecondary" className={classes.date}>{props.date}</Typography>
          <Typography className={classes.text}>{props.text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
TaskItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
}

export default TaskItem;