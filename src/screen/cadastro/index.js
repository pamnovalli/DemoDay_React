import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class SingUpForm extends Component {
    render() {
        return (
            <div>
                <Form className="SingUpFormContainer">
                    <h1>Cadastre-se</h1>
                    <FormGroup className="SignUpFormGroup">
                        <Label for="name">Nome</Label>
                        <Input type="text" name="nome" id="Nome" placeholder="Insira nome e sobrenome:" />
                    </FormGroup>
                    <FormGroup className="SignUpFormGroup">
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="Insira seu e-mail:" />
                    </FormGroup>
                    <FormGroup className="SignUpFormGroup">
                        <Label for="password">Password</Label>
                        <Input type="password" name="senha" id="Senha" placeholder="Crie sua senha:" />
                        <FormText color="muted">*use de 6 a 20 caracteres</FormText>
                    </FormGroup>
                        <FormGroup className="SignUpFormGroup">
                        <Label for="password-confirmation">Confirmação de senha</Label>
                        <Input type="password" name="csenha" id="Csenha" placeholder="Confirme sua senha:" />
                    </FormGroup>
                    <FormGroup className="SignUpFormGroup">
                        <Label for="gender">Genero</Label>
                        <Input type="select" name="select" id="gender-field">
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Outro</option>
                            <option>Prefiro não informar</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="SignUpFormGroup">
                        <Label for="profile-pic">Foto do perfil</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted"> Escolha uma foto com resolução de 300X300 pixels </FormText>
                    </FormGroup>
                    
                    <p className="SignUpFormGroup">Selecione seus interesses:</p>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Língua Estrangeira
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Tecnologia
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Ambientalismo
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Esporte
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Culinária
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Culinária
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Culinária
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Proteção Animal
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Assistência à moradores de rua
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Alfabetização de adultos
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Crianças carentes
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Idosos
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" /> Outros
                        </Label>
                    </FormGroup>
                    <FormGroup className="SignUpFormGroup">
                        <Label for="profile-pic">Nos conte sobre seus objetivos ao se cadastrar em nossa plataforma:</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button id="registration-button" color="primary" onClick={this.props.onSingup}>Registrar</Button>
                </Form>
            </div>
        )
    }
}

export default class Cadastro extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="SingUpContainer">
                    <SingUpForm onSingup={() => {
                        this.props.history.push('/perfil')
                    }}/> 
                </div>
                <Footer />
            </div>
        );
    }
}