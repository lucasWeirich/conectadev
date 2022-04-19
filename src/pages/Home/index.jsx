import React from "react";

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import Feed from "./components/Feed"

// import "./style.css"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24
    },
    toolbar: {
        minHeight: 64

    }
})

function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box>
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>

               {/*  <Container>
                    <div>
                        <NavBar/>
                        <Feed/>
                    </div>
                </Container> */}

            </main>
        </div>
    );
}

export default Home;