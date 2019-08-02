import React, { Component } from 'react'
import BlogCards from './BlogCards';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: '6%',
        marginLeft: '1%',
        marginRight: '1%',

    },
});

export default function Blog() {
    const classes = useStyles();
    const title1 = "Creat navigation bar using Material UI and React Router"
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}>
            <Grid item xs={4}>
                <BlogCards
                    image="https://miro.medium.com/max/700/1*PQB6732TNNPaTda_twwhIA.jpeg"
                    title="The Ten Most Important Books To Expand Your Brain"
                    blogText ="Books suck. No question about it, almost everyone who writes a book is a crappy writer.
                    And this is a good thing. It’s because the writer spent his life getting GOOD at what he was writing about. 
                    He didn’t spend his life being good at writing.It’s because the writer spent his life getting GOOD at what he was writing about. 
                    He didn’t spend his life being good at writing."
                    link="https://medium.com/the-mission/the-ten-most-important-books-to-expand-your-brain-a387cc0c5db6" />
            </Grid>
            <Grid item xs={4}>
                <BlogCards
                image ="https://miro.medium.com/max/700/1*NTss7CLrp1vT9I5cTZFn6A.png"
                    title="THE DAILY 1%: make more friends, is watching TV romantic?, how to persuade…and more!"
                    blogText = "I go through about 100+ articles to find ten that I think can help people improve 1% per day. I’m a firm believer that most people stay flat in their lives. They give up on improvement. But 1% a day, compounded, equals 3780% a year. Trust me: this is a fun way to live."
                    link="https://medium.com/@jaltucher/the-daily-1-make-more-friends-is-watching-tv-romantic-how-to-persuade-and-more-b6f89d25c853"
                     />
            </Grid>
            <Grid item xs={4}>
            <BlogCards
                image ="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/youvegotthisquotesforgettingwhatyouwant.jpg"
                    title="THE INTROVERT’S GUIDE TO HITCHHIKING FOR LOVE AND FORTUNE"
                    blogText = "“Not getting what you want either means you don’t want it enough, or you have been dealing too long with the price you have to pay.” —Rudyard Kipling, “To get what you want, you have to deserve what you want. The world is not yet a crazy enough place to reward a whole bunch of undeserving people.” —Charles T. Munger"
                    link="https://medium.com/@jaltucher/the-introverts-guide-to-hitchhiking-for-love-and-fortune-11d62b6fb473"
                     />

            </Grid>

        </Grid>
    )
}
