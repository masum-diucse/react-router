import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import male from '../../image/gender/male.png';
import female from '../../image/gender/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faFlag,faFutbol,faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import './TeamDetails.css';
import facebook from '../../image/icon/facebook.png';
import twitter from '../../image/icon/twitter.png';
import youtube from '../../image/icon/youtube.png';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
      },
   
   
  }));

const TeamDetails = () => {
    const classes = useStyles();
    const {idTeam}=useParams();
    const [teamDetails,setTeamDetails]=useState({});
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeamDetails(data.teams[0]));
    },[])
    const {intFormedYear,strDescriptionEN,strGender,strSport,strTeam,strCountry,strTwitter,strFacebook,strYoutube}=teamDetails;
    const urlHeader="https://www.";
    return (
        <div>
            <div className="detailHeadline">
                <Grid container className={classes.root} spacing={2}>
                    <Grid  item xs={6} className="detail-headline-row">
                        <Grid className="detail-headline-row">
                            <h2>{strTeam}</h2>
                            <h4><FontAwesomeIcon icon={faCalendar}/> Founded: {intFormedYear}</h4>
                            <h4><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h4>
                            <h4><FontAwesomeIcon icon={faFutbol}/> Sport Type: {strSport}</h4>
                            <h4><FontAwesomeIcon icon={faVenusMars}/> Gender: {strGender}</h4>
                        </Grid>
                    </Grid>
                    <Grid  item xs={6} className="detail-headline-row">
                        <Grid className="detail-headline-row">
                            <img src={(strGender==="Male")?male:female} alt=""/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div className="details-description">
                    <p>{strDescriptionEN}</p>
            </div>
            <div className="details-footer">
                    <a href={urlHeader+strFacebook} target="_blank"><img src={facebook} alt=""/></a>
                    <a href={urlHeader+strTwitter} target="_blank"><img src={twitter} alt=""/></a>
                    <a href={urlHeader+strYoutube} target="_blank"><img src={youtube} alt=""/></a>
            </div>
        </div>
            

    );
};



export default TeamDetails;