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
      usuarios: []
    }
  }

   configureModal(){
     alertify.confirm().setHeader("Atenção");
     alertify.alert().setHeader("Atenção");;
}

  componentDidMount(){
    
    var status = "{{status}}";
				
				if(status != "")
				{
					if(status != "false"){
					alertify.success("Usuário logado");
					}else{
					alertify.error("Usuário não logado");
					}
				}

				 var serverMessage = "{{serverMessage}}";

				if(serverMessage){
					alertify.success(serverMessage);
				}
    
  }

  render(){
    
  
    return (
        <div id="wrapper">

       
            <header id="header">
                <div class="row">
                    <div class="row" style={{"float":"right"}}>
                        <h3><a href="/cadastro">Cadastrar-se</a></h3>                   
                    </div>
                </div>
                
                <h1> <strong>Bem vindo</strong> Este é o UTFitter</h1>
                
                <div class="jumbotron">
                    <form action="/login" method="POST" accept-charset="utf-8">
                   
                        <div>
                            <input type="hidden" name="status" id="status"/>
                        </div>
                        <div className="form-control">
                        E-mail<input type="email" name="email" id="email"/>
                    </div>
                    <div className="form-control">
                        Senha<input type="password" name="senha" id="senha"/>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Logar" onclick="return validarLogin()"/>
                    </div>
                    </form>
                     
                    <div className="form-control">
                         <ul className="icons">
                    <li><a href="#" class="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" class="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" class="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" class="icon style2 fa-500px"><span className="label">500px</span></a></li>
                    <li><a href="#" class="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
                    </div>
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
