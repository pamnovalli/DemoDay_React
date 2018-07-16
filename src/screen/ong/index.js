import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Tags from '../../components/tags';

class Ong extends Component {

    ongDetails = () => (
      <div className="OngDetailContainer">
        <div className="OngDetailHeaderContainer">
          <div className="OngDetailHeaderContentContainer">
            <div className="OngNameLabel">
              Teto
            </div>
          </div>
        </div>
        <div className="OngTagsContainer">
          <Tags tags={["moradia", "qualidade de vida", "população carente", "construção"]} />
        </div>
        <div className="OngDescriptionContainer">
        <p>Um Teto para meu País é uma organização latino-americana que nasce no Chile, em 1997.</p>
        <p> Depois de concluir uma atividade social construindo uma capela, um grupo de jovens universitários, apoiados pelo sacerdote jesuíta Felipe Berríos, decidiu denunciar a situação de pobreza extrema em que vivem milhares de pessoas a partir da construção de casas emergenciais e a realização de planos de habilitação social.</p>
        <p> Para a expansão do projeto iniciou-se a angariação de voluntários para tentar emponderar ou ao menos dar o primeiro impulso para a ajuda dos 200 milhões de latino-americanos que estão em situação de extrema pobreza.</p>
        <p>Em 2001 começou a expansão da iniciativa pela América Latina. Hoje a organização já está presente em 19 países: Argentina, Bolívia, Brasil, Chile, Colômbia, Costa Rica, Equador, El Salvador, Honduras, Guatemala, Haiti, México, Nicarágua, Panamá, Paraguai, Peru, República Dominicana, Uruguai e Venezuela se unem por meio do trabalho de milhares de jovens voluntários e comunidades que lutam por um continente mais justo.</p>
        </div>
        <div className="RedesSociais">
        <p>Redes Sociais</p>
        <p>www.facebook.com/TETObra</p>
        <p>https://twitter.com/tetobra</p>
        <p>https://plus.google.com/u/0/+TechoOrg</p>
        </div>
      </div>
    )

    render() {
        return (
          <div>
             <Menu />  
              <div className="OngContainer">
                {this.ongDetails()}
              </div>
            <Footer />
          </div>
        );
      }
}
           
        


export default Ong;
    