import React from "react";

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    }
});

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                {/* <div className="">
                    <a href="/">Conecta Dev</a>
                    <input type="text" />
                </div>
                <div className="">
                    <Button color="primary" variant="contained">New Post</Button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;