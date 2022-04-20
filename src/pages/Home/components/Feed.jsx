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
    {
        id: 1,
        author: {
            id: 1,
            name: 'Lucas Weirich',
            username: 'lucasWeirich',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando um App do zero utilizando React.js",
        date: "April 20, 2022",
        description: 'Fala pessoal! Qual o framework favorito de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post9.jpeg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Lucas Weirich',
            username: 'lucasWeirich',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Comparativo entre React.js e Vue.js - Performance",
        date: "April 20, 2022",
        description: 'Fala pessoal! Qual o framework favorito de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post8.jpeg"
    }
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