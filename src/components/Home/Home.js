import React, { useState } from 'react';
import { useEffect } from 'react';
import Team from '../Team/Team';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
  }));

const Home = () => {
    let [teams,setTeams]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=England`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    teams=teams.slice(0,12);

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    console.log(teams);
    return (
    <Grid container className={classes.root} spacing={spacing}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
                {
                    teams.map(t=><Team key={t.idTeam} team={t}></Team>)
                }
            </Grid>
        </Grid>
    </Grid>
    );
};

export default Home;