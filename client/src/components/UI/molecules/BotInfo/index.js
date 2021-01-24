import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BotAvatar from '../../atoms/BotAvatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  paper: {
    minWidth: 280,
    padding: theme.spacing(1),
  },
  colorContrast: {
    color: 'rgb(51, 71, 91)',
  },
}));

const message = `Lorem Ipsum Dolor `;

export default function BotInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <BotAvatar  />
          </Grid>
          <Grid item xs container direction="column" justify="center" alignItems="flex-start">
            <Typography variant="h6" className={classes.colorContrast}>
                <Box lineHeight="normal" m={0}>
                    Bot Name
                </Box>
            </Typography>
            <Typography variant="subtitle1" className={classes.colorContrast} gutterBottom mb={0}>{message}</Typography>
          </Grid>
        </Grid>
    </div>
  );
}
