import React from "react";
import Group1 from "../Group1";
import Navbar from "../Navbar";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    steETGE,
    number,
    listeDesBnficiairesDclars,
    ajoutBnficiaire,
    domestique,
    international,
    intitul,
    type,
    numroDeCompte,
    slectionnezUnStatut,
    adresse,
    codeBic,
    rinitialiser,
    recherher,
    navbarLinkIntitul,
    navbarLinkNumroDeCompte,
    navbarLinkCodeBic,
    navbarLinkBanque,
    navbarLinkType,
    navbarLinkAdresse,
    navbarLinkDevise,
    navbarLinkStatut,
    navbarLinkActionS,
    group11Props,
    group12Props,
    group13Props,
    navbar1Props,
    navbar2Props,
    navbar3Props,
    navbar4Props,
    navbar5Props,
    navbar6Props,
    navbar7Props,
    navbar8Props,
    navbar9Props,
    navbar10Props,
    navbar11Props,
    navbar12Props,
    navbar13Props,
    navbar14Props,
    navbar15Props,
    navbar16Props,
    navbar17Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="flex-row">
          <img className="icon-mail" src="/img/frame.svg" alt="icon-mail" />
          <img className="icon-user" src="/img/frame-1.svg" alt="icon-user" />
          <img className="frame" src="/img/frame-2.svg" alt="Frame" />
          <img className="frame-1" src="/img/frame-3.svg" alt="Frame" />
          <div className="flex-col">
            <div className="ste-etge inter-bold-martinique-11px">{steETGE}</div>
            <div className="number">{number}</div>
          </div>
        </div>
        <div className="flex-col-1">
          <div className="flex-row-1">
            <div className="liste-des-bnficiaires-dclars">{listeDesBnficiairesDclars}</div>
            <div className="overlap-group3">
              <div className="ajout-bnficiaire inter-bold-white-12px">{ajoutBnficiaire}</div>
            </div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group1">
              <div className="domestique">{domestique}</div>
            </div>
            <div className="overlap-group2">
              <div className="international">{international}</div>
            </div>
          </div>
          <div className="flex-col-2">
            <div className="flex-row-2">
              <div className="overlap-group-container-1">
                <div className="overlap-group6">
                  <div className="intitul inter-bold-steel-blue-10px">{intitul}</div>
                </div>
                <div className="overlap-group4">
                  <div className="type inter-bold-steel-blue-10px">{type}</div>
                  <div className="group-container">
                    <Group1 />
                    <Group1 className={group11Props.className} />
                  </div>
                </div>
              </div>
              <div className="overlap-group-container-2">
                <div className="overlap-group11">
                  <div className="numro-de-compte inter-bold-steel-blue-10px">{numroDeCompte}</div>
                </div>
                <div className="overlap-group5">
                  <div className="slectionnez-un-statut inter-bold-steel-blue-10px">{slectionnezUnStatut}</div>
                  <Group1 className={group12Props.className} />
                </div>
              </div>
              <div className="overlap-group9">
                <div className="adresse inter-bold-steel-blue-10px">{adresse}</div>
              </div>
              <div className="overlap-group7">
                <div className="code-bic inter-bold-steel-blue-10px">{codeBic}</div>
                <Group1 className={group13Props.className} />
              </div>
            </div>
            <div className="overlap-group-container-3">
              <div className="overlap-group10">
                <div className="rinitialiser">{rinitialiser}</div>
              </div>
              <div className="overlap-group8">
                <div className="recherher inter-bold-white-12px">{recherher}</div>
              </div>
            </div>
          </div>
          <div className="navbar-link-container inter-bold-martinique-11px">
            <div className="navbar-link-intitul">{navbarLinkIntitul}</div>
            <div className="navbar-link-numro-de-compte">{navbarLinkNumroDeCompte}</div>
            <div className="navbar-link-code-bic">{navbarLinkCodeBic}</div>
            <div className="navbar-link-banque">{navbarLinkBanque}</div>
            <div className="navbar-link-type">{navbarLinkType}</div>
            <div className="navbar-link-adresse">{navbarLinkAdresse}</div>
            <div className="navbar-link-devise">{navbarLinkDevise}</div>
            <div className="navbar-link-statut">{navbarLinkStatut}</div>
            <div className="navbar-link-actions">{navbarLinkActionS}</div>
          </div>
          <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
          <Navbar />
          <Navbar className={navbar1Props.className} />
          <Navbar className={navbar2Props.className} />
          <Navbar className={navbar3Props.className} />
          <Navbar className={navbar4Props.className} />
          <Navbar className={navbar5Props.className} />
          <Navbar className={navbar6Props.className} />
          <Navbar className={navbar7Props.className} />
          <Navbar className={navbar8Props.className} />
          <Navbar className={navbar9Props.className} />
          <Navbar className={navbar10Props.className} />
          <Navbar className={navbar11Props.className} />
          <Navbar className={navbar12Props.className} />
          <Navbar className={navbar13Props.className} />
          <Navbar className={navbar14Props.className} />
          <Navbar className={navbar15Props.className} />
          <Navbar className={navbar16Props.className} />
          <Navbar className={navbar17Props.className} />
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
