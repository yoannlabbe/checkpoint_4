import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    //minWidth: 275,
    height: "600px",
    width: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function Propos(props) {
  const classes = useStyles();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Card className={classes.root}>
        Pendant la grossesse de nombreuses interrogations surviennent dans
        l'esprit des femmes enceintes comme de leurs compagnons.
        <br />
        Est-ce-que je peux manger du foie gras ? J’ai envie de sushis, est-ce
        risqué pour mon bébé ? Mes petites envies de fraises peuvent-elles me
        donner la toxoplasmose ? <br />
        La plupart des femmes enceintes apprennent grâce à leur gynécologue que
        consommer certains aliments pendant la grossesse risque de causer des
        maladies néfastes au bon développement du bébé.
        <br />
        Toutefois, on se trouve parfois bien démunis lorsque, sur le point de
        commander son déjeuner, on se demande si tel aliment contenu dans le
        plat choisi présente un risque. Si les deux maladies les plus répandues
        sont la listériose et la toxoplasmose, d'autres pathologies peuvent
        survenir suite de l'ingestion de certaines substances (alcool, foie…).
      </Card>
    </div>
  );
}
