import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Team.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles({
    root: {
      width: 345,
    },
    media: {
      height: 200,
    },
  });

const Team = (props) => {
    const classes = useStyles();
    const {idTeam,strTeam,strSport,strTeamBadge}=props.team;
    return (
        <div className="team">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={strTeamBadge}
          title={strTeam}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {strTeam}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sports Type: {strSport}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
                    <Link to={`/team/${idTeam}`} style={{textDecoration: 'none'}}>
                        <Button  variant="contained" color="primary" >Explore &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
                </CardActions>
    </Card>
        </div>
    );
};

export default Team;