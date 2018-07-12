import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Cadastro extends React.Component {
    render() {
        return (
            
            <div>
            <Menu />
            <br/>
            <br/>
            <h1>Cadastre-se</h1>
            <Form>
            <FormGroup className="Input">
            <p>Nome</p>
            <Input type="text" name="nome" id="Nome" placeholder="Insira nome e sobrenome:" />
            </FormGroup>
            <FormGroup className="Input">
            <p>E-mail</p>
            <Input type="email" name="email" id="Email" placeholder="Insira seu e-mail:" />
            </FormGroup>
            <FormGroup className="Input">
            <p>RG</p>
            <Input type="text" name="rg" id="RG" placeholder="Insira somente números:" />
            </FormGroup>
            <div id="senha"> 
            <FormGroup className="Input">
            <p>Senha</p>
            <Input type="password" name="senha" id="Senha" placeholder="Crie sua senha:" />
            <p id="obs">*use de 6 a 20 caracteres</p>
            </FormGroup>
            <FormGroup className="Input">
            <Input type="password" name="csenha" id="Csenha" placeholder="Confirme sua senha:" />
            </FormGroup>
            </div>
            <FormGroup className="Input">
            <p>Sexo</p>
            <Input type="select" name="select" id="exampleSelect">
            <option>Feminino</option>
            <option>Masculino</option>
            <option>Outro</option>
            <option>Prefiro não informar</option>
            </Input>
            </FormGroup>
            <FormGroup className="Input">
            <p>Foto de Perfil</p>
            <FormText color="muted">
            Escolha uma foto com resolução de 300X300 pixels
            </FormText>
            <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
            <br/>
            <p className="Input">Selecione seus interesses:</p>
            <FormGroup className="Input" check>
            <Input type="checkbox" />{' '}
            Língua Estrangeira
            <br/>
            <Input type="checkbox" />{' '}
            Tecnologia
            <br/>
            <Input type="checkbox" />{' '}
            Ambientalismo
            <br/>
            <Input type="checkbox" />{' '}
            Esporte
            <br/>
            <Input type="checkbox" />{' '}
            Culinária
            <br/>
            <Input type="checkbox" />{' '}
            Proteção Animal
            <br/>
            <Input type="checkbox" />{' '}
            Assistência à moradores de rua
            <br/>
            <Input type="checkbox" />{' '}
            Alfabetização de adultos
            <br/>
            <Input type="checkbox" />{' '}
            Crianças carentes
            <br/>
            <Input type="checkbox" />{' '}
            Idosos
            <br/>
            <Input type="checkbox" />{' '}
            <Input type="text" name="nome" id="Outro" placeholder="Outros" />
            <br/>
            <br/>
            </FormGroup>
            <FormGroup className="Input">
            <p>Nos conte sobre seus objetivos ao se cadastrar em nossa plataforma:</p>
            <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Enviar</Button>
            </Form>  
            <Footer />
            </div>
        );
    }
}