import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import PostCard from "../../../components/PostCard";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {id: 1, description: 'teste 01'},
    {id: 2, description: 'teste 02'},
    {id: 3, description: 'teste 03'},
    {id: 4, description: 'teste 04'},
    {id: 5, description: 'teste 05'},
];

function Feed() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Feed;