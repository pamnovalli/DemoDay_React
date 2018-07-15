import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class GroupSingup extends Component {
    render() {
        return (
            <div className="GroupRegistrationForm">
                <h1>Cadastre seu grupo em nossa plataforma:</h1>
                <Form>
                    <FormGroup className="Campos">
                        <Label for="group-name">Nome do grupo</Label>
                        <Input type="text" placeholder="" />
                    </FormGroup>
                    <FormGroup className="Campos">
                        <Label for="owner">Nome do responsável pelo grupo:</Label>
                        <Input type="text" placeholder="" />
                    </FormGroup>
                    <FormGroup className="Campos">
                        <Label for="description">Descrição do grupo</Label>
                        <Input type="textarea" placeholder="Nos conte sobre o que é, e quais são os objetivos do grupo que você está criando:" />
                    </FormGroup>
                    <FormGroup className="Campos">
                        <Label for="profile-pic">Foto de perfil do grupo</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">Escolha uma foto com resolução de 300X300 pixels</FormText>
                    </FormGroup>
                    <FormGroup className="Campos">
                        <Label for="profile-pic">Contatos do grupo</Label>
                        <br />
                        <Input type="email" placeholder="E-mail:*" />
                        <br />
                        <Input type="url" placeholder="Link para grupo de whatsapp:*" />
                        <br />
                        <Input type="url" placeholder="Link para página em rede social:" />
                        <br />
                        <Input type="text" placeholder="Telefone/Celular:" />
                        <FormText color="muted">(os campos assinalados com * são obrigatórios)</FormText>
                    </FormGroup>
                    <br />
                    <Label for="profile-pic">Selecione os assuntos relacionados com seu grupo, para ajudar a busca dos usuários:</Label>
                    <FormGroup className="Campos" check>
                        <Input type="checkbox" /> Língua Estrangeira <br />
                        <Input type="checkbox" /> Tecnologia <br />
                        <Input type="checkbox" /> Ambientalismo <br />
                        <Input type="checkbox" /> Esporte <br />
                        <Input type="checkbox" /> Culinária <br />
                        <Input type="checkbox" /> Proteção Animal <br />
                        <Input type="checkbox" /> Assistência à moradores de rua <br />
                        <Input type="checkbox" /> Alfabetização de adultos <br />
                        <Input type="checkbox" /> Crianças carentes <br />
                        <Input type="checkbox" /> Idosos <br />
                        <Input type="checkbox" /> Outros <br />
                    </FormGroup>
                </Form>
                <Button id="submit-registration-form" color="primary">Registrar Grupo</Button>
            </div>
        )
    }
}

export default class CriarGrupo extends React.Component {
    render() {
        return (
            <div>
                <div className="GroupRegistrationContainer">
                <Menu />
                <div className="GroupRegistrationFormContainer">
                    <GroupSingup />
                </div>
                </div>
            <Footer />
            </div>
        );
    }
}