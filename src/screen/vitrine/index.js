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
          title: "ONG 1",
          subtitle: "Subtitulo da ONG 1",
          description: "Descrição da ONG 1",
          imageURL: "https://d13q7w9s0p5d73.cloudfront.net/uploads/bvmf/aggregator/avatar/198/03886f0a-f86b-4ab7-9675-eb3e9fd8beaa.jpg"
        },
        {
          title: "ONG 2",
          subtitle: "Subtitulo da ONG 2",
          description: "Descrição da ONG 2",
          imageURL: "http://blog.crb6.org.br/wp-content/uploads/2014/11/NOTA-3.31.jpg"
        },
        {
          title: "ONG 3",
          subtitle: "Subtitulo da ONG 3",
          description: "Descrição da ONG 3",
          imageURL: ""
        }
      ],
        communities: [{
          title: "Comunidade 1",
          subtitle: "Subtitulo da Comunidade 1",
          description: "Descrição da Comunidade 1",
          imageURL: ""
        },
        {
          title: "Comunidade 2",
          subtitle: "Subtitulo da Comunidade 2",
          description: "Descrição da Comunidade 2",
          imageURL: ""
        },
        {
          title: "Comunidade 3",
          subtitle: "Subtitulo da Comunidade 3",
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
                  subtitle={ong.subtitle} 
                  description={ong.description} 
                  imageURL={ong.imageURL}
                  onClickDetails={() => this.props.history.push('/ong')} />
                ))}
            </div>
          </div>
          <div className="VitrineShelfContainer">
            <h1>Grupos e Comunidades</h1>
            <div className="VitrineShelf">
            {this.state.communities.map(community => (
              <CardCommunity 
                title={community.title}
                subtitle={community.subtitle} 
                description={community.description} 
                imageURL={community.imageURL}
                onClickDetails={() => this.props.history.push('/ong')}/>
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
  