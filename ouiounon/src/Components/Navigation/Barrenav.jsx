import { Button, makeStyles } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    barnav:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },

}));

export default function Barrenav(props) {
const classes = useStyles();
    return (
    <header>
        <div className={classes.barnav}>
        <img
        style={{ width:"200px", height:"100px" }}
        src="./images/oui-ou-non.png"
        alt="ok nok" />

        <Button href="/propos">A propos</Button>
        <Button href="/alimentation">Aliments</Button>
        <Button>Ajouter</Button>  
        </div>  
         
    </header>
    );
}

