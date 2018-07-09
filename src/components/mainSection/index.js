import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class MainSection extends Component {

render() {
    return (
        <div className="MainSection">
            <div className="MainSectionContent">
            <h1> VOLUNTARIZE </h1>
            <h4>A maior plataforma de ONGs e Comunidades do Brasil!</h4>

            <Form className="Form">
                <FormGroup>
                    <Input type="search" name="search" id="main_search" placeholder="Ex: Greenpeace" />
                </FormGroup>
                <Button color="primary">Buscar</Button>
            </Form>
            </div>
        </div>
    );
}
};