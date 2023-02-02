import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./components/Desktop1";
import TextStyles from "./components/TextStyles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
        <Route path="/text-styles">
          <TextStyles {...textStylesData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group12Data = {
    className: "group-2",
};

const group13Data = {
    className: "group-3",
};

const group14Data = {
    className: "group-4",
};

const navbar2Data = {
    className: "flex-col-1-item",
};

const navbar3Data = {
    className: "flex-col-1-item",
};

const navbar4Data = {
    className: "flex-col-1-item",
};

const navbar5Data = {
    className: "flex-col-1-item",
};

const navbar6Data = {
    className: "flex-col-1-item",
};

const navbar7Data = {
    className: "flex-col-1-item",
};

const navbar8Data = {
    className: "flex-col-1-item",
};

const navbar9Data = {
    className: "flex-col-1-item",
};

const navbar10Data = {
    className: "flex-col-1-item",
};

const navbar11Data = {
    className: "flex-col-1-item",
};

const navbar12Data = {
    className: "flex-col-1-item",
};

const navbar13Data = {
    className: "flex-col-1-item",
};

const navbar14Data = {
    className: "flex-col-1-item",
};

const navbar15Data = {
    className: "flex-col-1-item",
};

const navbar16Data = {
    className: "flex-col-1-item",
};

const navbar17Data = {
    className: "flex-col-1-item",
};

const navbar18Data = {
    className: "flex-col-1-item",
};

const desktop1Data = {
    steETGE: "STE E.T.G.E",
    number: "091834732572437574",
    listeDesBnficiairesDclars: "LISTE DES BÉNÉFICIAIRES DÉCLARÉS",
    ajoutBnficiaire: "Ajout bénéficiaire",
    domestique: "Domestique",
    international: "International",
    intitul: "Intitulé",
    type: "Type",
    numroDeCompte: "Numéro de compte",
    slectionnezUnStatut: "Sélectionnez un statut",
    adresse: "Adresse",
    codeBic: "Code BIC",
    rinitialiser: "Réinitialiser",
    recherher: "Recherher",
    navbarLinkIntitul: "INTITULÉ",
    navbarLinkNumroDeCompte: "NUMÉRO DE COMPTE",
    navbarLinkCodeBic: "CODE BIC",
    navbarLinkBanque: "BANQUE",
    navbarLinkType: "TYPE",
    navbarLinkAdresse: "ADRESSE",
    navbarLinkDevise: "DEVISE",
    navbarLinkStatut: "STATUT",
    navbarLinkActionS: "ACTION(S)",
    group11Props: group12Data,
    group12Props: group13Data,
    group13Props: group14Data,
    navbar1Props: navbar2Data,
    navbar2Props: navbar3Data,
    navbar3Props: navbar4Data,
    navbar4Props: navbar5Data,
    navbar5Props: navbar6Data,
    navbar6Props: navbar7Data,
    navbar7Props: navbar8Data,
    navbar8Props: navbar9Data,
    navbar9Props: navbar10Data,
    navbar10Props: navbar11Data,
    navbar11Props: navbar12Data,
    navbar12Props: navbar13Data,
    navbar13Props: navbar14Data,
    navbar14Props: navbar15Data,
    navbar15Props: navbar16Data,
    navbar16Props: navbar17Data,
    navbar17Props: navbar18Data,
};

const textStylesData = {
    title: "Text Styles",
    font1: "Font:",
    h11: "H1",
    price1: "67px",
    h21: "H2",
    price2: "51px",
    h31: "H3",
    price3: "38px",
    h41: "H4",
    price4: "28px",
    h51: "H5",
    price5: "22px",
    baseBody1: "Base (Body)",
    price6: "16px",
    caption1: "Caption",
    price7: "12px",
    spaceMono: "Space Mono",
    nftMarketplace1: "Nft Marketplace",
    nftMarketplace2: "Nft Marketplace",
    nftMarketplace3: "Nft Marketplace",
    nftMarketplace4: "Nft Marketplace",
    nftMarketplace5: "Nft Marketplace",
    nftMarketplace6: "NFT Marketplace",
    nftMarketplace7: "NFT Marketplace",
    font2: "Font:",
    workSans: "Work Sans",
    h12: "H1",
    price8: "67px",
    h22: "H2",
    price9: "51px",
    h32: "H3",
    price10: "38px",
    h42: "H4",
    price11: "28px",
    h52: "H5",
    price12: "22px",
    baseBody2: "Base (Body)",
    price13: "16px",
    caption2: "Caption",
    price14: "12px",
    nftMarketplace8: "Nft Marketplace",
    nftMarketplace9: "Nft Marketplace",
    nftMarketplace10: "Nft Marketplace",
    nftMarketplace11: "Nft Marketplace",
    nftMarketplace12: "Nft Marketplace",
    nftMarketplace13: "NFT Marketplace",
    nftMarketplace14: "NFT Marketplace",
};

