import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../style/assets/css/main.css';
import '../alertify/css/themes/default.css';
import '../alertify/css/alertify.css';
import axios from 'axios';
import alertify from 'alertifyjs'

class App extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      people: [],
      nome: '',
      email:'',
      senha:''
    }
  }

   configureModal(){
     alertify.confirm().setHeader("Atenção");
     alertify.alert().setHeader("Atenção");;
}

  componentDidMount(){
    axios.get('https://utfitter.herokuapp.com/explorar').then(response =>{
        const {people} =  response.data;
        this.setState({
            people: people
        });
      });
    
  }

   validarCadastro(){
    const {nome, email, senha} = this.state;
    
    
    if(nome && email && senha){
        
        return this.validarSenha(senha);
    }
    alertify.error("Todos os campos são obrigatórios.");
 return false;
}

 validarSenha(senha){
    if(senha.length < 6){
        alertify.error("Senha inválida. A senha precisa conter 6 ou mais caracteres.");
        return false;
    }
    return true;
}

  render(){
    
  
    return (
        <div id="wrapper">
					<header id="header">
                        <div className="jumbotron">
							<form action="/cadastro" method="POST" accept-charset="utf-8">
								<div>
									<input type="hidden" name="status" id="status"/>
								</div>
                                 <div className="form-control">
                                   Nome<input type="text" name="nome" id="nome"/>
                                </div>
                                <div className="form-control">
                                    E-mail<input type="email" name="email" id="email"/>
                                </div>
                                <div className="form-control">
                                    Senha<input type="password" name="senha" id="senha"/>
                                </div>
                            <div className="form-control">
                                <input type="submit" value="Cadastrar" onclick={this.validarCadastro()}/>
                            </div>
							</form>
                            </div>
					</header>
					<section id="main">
					</section>
					<footer id="footer">
						<p>&copy; UTFitter. O twitter da UTFPR: <a href="http://utfpr.edu.br">UTFPR</a></p>
					</footer>
			</div>
  );
}
}

export default App;
