import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function CampoTextual(props) {
    return (<Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField value={props.valor} label={props.label} />
          </Grid>
    </Grid>)
};
