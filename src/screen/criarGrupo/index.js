import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class CriarGrupo extends React.Component {
    render() {
        return (
            
            <div>
            <Menu />
            <br/>
            <br/>
            <h1>Cadastre seu grupo em nossa plataforma:</h1>
            <Form>
            <FormGroup className="Campos">
            <p>Nome do grupo</p>
            <Input type="text" placeholder="" />
            </FormGroup>
            <FormGroup className="Campos">
            <p>Nome do responsável pelo grupo:</p>
            <Input type="text" placeholder="" />
            </FormGroup>
            <FormGroup className="Campos">
            <p>Descrição do grupo</p>
            <Input type="textarea" placeholder="Nos conte sobre o que é, e quais são os objetivos do grupo que você está criando:" />
            </FormGroup>
            <FormGroup className="Campos">
            <p>Foto de perfil do grupo</p>
            <FormText color="muted">
            Escolha uma foto com resolução de 300X300 pixels
            </FormText>
            <Input type="file" name="file" id="exampleFile" />
            </FormGroup>

            <FormGroup className="Campos">
            <p>Contatos do grupo</p>
            <p id="obs">(os campos assinalados com * são obrigatórios)</p>
            <br/>
            <Input type="email" placeholder="E-mail:*" />
            <br/>
            <Input type="url" placeholder="Link para grupo de whatsapp:*" />
            <br/>
            <Input type="url" placeholder="Link para página em rede social:" />
            <br/>
            <Input type="text" placeholder="Telefone/Celular:" />
            </FormGroup>
            <br/>
            <p className="Campos">Selecione os assuntos relacionados com seu grupo, para ajudar a busca dos usuários:</p>
            <FormGroup className="Campos" check>
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
            <Button id="b">Criar</Button>
            </Form>
            
            <Footer />
            </div>
        );
    }
}