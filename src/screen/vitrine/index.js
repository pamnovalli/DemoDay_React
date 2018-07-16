import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import CardCommunity from '../../components/cardCommunity'
import { Button, Form, Input } from 'reactstrap';
 
  class Vitrine extends Component {

    constructor(props) {
      super(props)
      this.state = {
        ongs: [{
          title: "Amigos do Bem",
          description: "Promovem desenvolvimento \ne inclusão social, \ncombate a fome e a miséria por \n meio de ações educacionais e projetos\n autossustentáveis",
          imageURL: "https://d13q7w9s0p5d73.cloudfront.net/uploads/bvmf/aggregator/avatar/198/03886f0a-f86b-4ab7-9675-eb3e9fd8beaa.jpg"
        },
        {
          title: "Abrace",
          description: "Assistência social a \ncrianças e adolescentes\ncom câncer e hemopatias, e suas famílias,\n visando à qualidade de vida\n e acesso a tratamento. ",
          imageURL: "http://blog.crb6.org.br/wp-content/uploads/2014/11/NOTA-3.31.jpg"
        },
        {
          title: "Teto",
          description: "Trabalham em comunidades\n precárias para superar a pobreza\n por meio da formação e ação\n conjunta dos moradores e,\n jovens voluntários",
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaX32cRTse9CEdAKhApLKLzHk7LSIHN0_qswSNPYyY1n3zMUBSiw"
        }
      ],
        communities: [{
          title: "Idiomas para Todos",
          description: "Grupo que se reúne com objetivo de\n ensinar inglês e outros idiomas para\n pessoas que não tem acesso a\n oportunidades pagas de curso.",
          imageURL: "http://www.radiozero.cl/static/2015/08/lenguaje-1200x500.jpg"
        },
        {
          title: "Protege",
          description: "Grupo que se reune para alimentar e\n cuidar de animais que vivem em situação de\n rua, e resgatando animais para adoção.",
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvpCwZe1PbhERpFT7T_Jgfqx2anUzwPBK7PlpFSUnLqM8x3LK"
        },
        {
          title: "Capacita",
          description: "Grupo que oferece minicursos com objetivo\n de capacitação profissional da população\n carente. São ofertadas aulas em diversas\n áreas que possibilitam o surgimento de\n melhores oportunidades.",
          imageURL: "data:image/jpeg;base64,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"
        }]
      }
    }

    vitrine = () => (
        <div className="VitrineShelfsContainer">
          <div className="VitrineShelfContainer">
            <h1>Organizações Não-Governamentais - ONGs</h1>
            <div className="VitrineShelf">
              {this.state.ongs.map(ong => (
                <CardCommunity 
                  title={ong.title} 
                  description={ong.description} 
                  imageURL={ong.imageURL}
                  onClickDetails={() => this.props.history.push('/ong')} />
                ))}
            </div>
          </div>
          <div className="VitrineShelfContainer">
            <h1>Grupos</h1>
            <div className="VitrineShelf">
            {this.state.communities.map(community => (
              <CardCommunity 
                title={community.title}
                description={community.description} 
                imageURL={community.imageURL}
                onClickDetails={() => this.props.history.push('/grupo')}/>
              ))}
            </div>
          </div>
        </div >
      )

    render() {
      return (
        <div>
          <Menu />
          <div className="VitrineContainer">
            <div>
              <Form className="VitrineSearchContainer" action="/vitrine">
                <Input type="search" name="search" id="main_search" placeholder="Ex: Greenpeace"/>
                <Button id="buscar" type="submit" color="primary">Buscar</Button>
              </Form>
            </div>
            {this.vitrine()}
          </div>
          <Footer />
        </div>
    );
  }
}
 
  
  export default Vitrine;
  