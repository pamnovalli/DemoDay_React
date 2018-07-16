import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Tags from '../../components/tags';

class Grupo extends Component {

    groupDetails = () => (
      <div className="GroupDetailContainer">
        <div className="GroupDetailHeaderContainer">
          <div className="GroupDetailHeaderContentContainer">
            <div className="GroupNameLabel">
              Idiomas para Todos
            </div>
          </div>
        </div>
        <div className="GroupTagsContainer">
          <Tags tags={["educação", "solidariedade", "lingua estrangeira", "população carente"]} />
        </div>
        <div className="GroupDescriptionContainer">
        <p>Grupo voltado para o ensino de idiomas para pessoas que não tem acesso a cursos de pagos.</p>
        <p>Utilizamos os idiomas para transpor barreiras culturais e possibilitar a jovens carentes melhores vagas de trabalhos </p>
        <p>Dispomos de aulas presenciais e virtuais com materiais didaticos da Universidade de Cambridge</p>
        </div>
        <div className="MidiasSociais">
        <p>Redes Sociais</p>
        <p>www.facebook.com/IdiomasParaTodos</p>
        <p>https://twitter.com/idiomasparatodos</p>
        <p>https://plus.google.com/u/0/+idiomasparatodos</p>
        <p>https://chat.whatsapp.com/invite/7dxEedtAuBHK2cVUpQuSj0</p>
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
           
        
export default Grupo;
  