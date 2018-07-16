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
          title: "Comunidade 1",
          description: "Descrição da Comunidade 1",
          imageURL: ""
        },
        {
          title: "Comunidade 2",
          description: "Descrição da Comunidade 2",
          imageURL: ""
        },
        {
          title: "Comunidade 3",
          description: "Descrição da Comunidade 3",
          imageURL: ""
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
                  imageURL={ong.imageURL}/>
                ))}
            </div>
          </div>
          <div className="VitrineShelfContainer">
            <h1>Grupos e Comunidades</h1>
            <div className="VitrineShelf">
            {this.state.communities.map(community => (
              <CardCommunity 
                title={community.title}
                description={community.description} 
                imageURL={community.imageURL}/>
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
  