import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Tags from '../../components/tags';
import { Container, Button, ButtonGroup, NavLink, Card, CardImg} from 'reactstrap';

class Ong extends Component {

    groupDetails = () => (
      <div className="GroupDetailContainer">
        <div className="GroupDetailHeaderContainer">
          <div className="GroupDetailHeaderContentContainer">
            <div className="GroupNameLabel">
              Nome da Organização
            </div>
          </div>
        </div>
        <div className="GroupTagsContainer">
          <Tags tags={["culinaria", "tecnologia", "lingua estrangeira", "artesanato"]} />
        </div>
        <div className="GroupDescriptionContainer">
          Texto descritivo da Comunidade.
        </div>
      </div>
    )

    render() {
        return (
          <div>
             <Menu />  
              <div className="GroupContainer">
                {this.groupDetails()}
              </div>
            <Footer />
          </div>
        );
      }
}
           
         




export default Ong;
    