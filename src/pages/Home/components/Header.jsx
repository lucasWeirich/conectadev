import React from "react";

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import SvgIcon from "@material-ui/core/SvgIcon";
import Avatar from "@material-ui/core/Avatar";

import { Bell } from "react-feather";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    },
    userSession: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
});

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="Logo" className={classes.img}/>

                <div className={classes.grow}></div>
                <div className={classes.userSession}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        New Post
                    </Button>

                    <SvgIcon className={classes.bell}>
                        <Bell />
                    </SvgIcon>

                    <Avatar alt="Avatar" src="/" />
                </div>

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