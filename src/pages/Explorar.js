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
      people: []
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

  render(){
    
  
    return (
        <div id="wrapper">
					<header id="header">
                      <div class="row">
						<div class="row" style={{"float":"right"}}>
                            <h3><a href="/home">Home</a></h3> 
                            <h3><a href="/seguidores">Seguidores</a></h3> 
                            <h3><a href="/seguindo">Seguindo</a></h3> 
                        </div>
					  </div>
                    <div class="row"><h1>Pesquisar pessoas no UTFitter: <input type="text"/></h1></div>
                    
                    <form action="/seguir" method="POST" accept-charset="utf-8">
                    {this.state.people.map((p) =>{
                        return(
                            <div>
                            <div className="row">
                            <span  className="avatar" style={{"text-align":"left", "padding": "2px;"}}>
                            <img src={p.avatar} alt=""></img>
                            </span>
                            <span style={{"text-align":"right;"}}>{p.nome}</span>
                            <span style={{"text-align":"right"}}><strong>{p.email}</strong></span>
                            <a  href="/seguir?{p.email}">Seguir</a>
                            </div>
                             <div style={{"border-top": "solid 1px rgba(255, 255, 255, 0.25);"}}>
                             </div>
                             </div>
                            )
                    })
                    }             
                    
                     </form>
					</header>

					<footer id="footer">
						<p>&copy; UTFitter. O twitter da UTFPR: <a href="http://utfpr.edu.br">UTFPR</a></p>
					</footer>

			</div>
  );
}
}

export default App;
