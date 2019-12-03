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
      publicacoes: [],
      usuario: {}
    }
  }

   configureModal(){
     alertify.confirm().setHeader("Atenção");
     alertify.alert().setHeader("Atenção");;
}

  componentDidMount(){
    
    axios.get('https://utfitter.herokuapp.com/home', {params: {email:'lipdiso@gmail.com'}}).then(response =>{
        const {usuario, publicacoes} =  response.data;
        
        this.setState({
            usuario: usuario,
            publicacoes: publicacoes,
            texto: '',
            autor: ''
        });
      });
    
  }

  post(){
    axios.post('https://utfitter.herokuapp.com/publicar', {texto:this.state.texto, autor: this.state.autor}).then(response =>{
        const {usuario, publicacoes} =  response.data;
        
        this.setState({
            texto:''
        });
      }); 
  }

  render(){
    
  
    return (
        <div id="wrapper">
            <header id="header">
                <div className="row">
                    <div className="row" style={{"float":"right"}}>
                        <h3><a href="/explorar">Explorar</a></h3> 
                        <h3><a href="/seguidores">Seguidores</a></h3> 
                        <h3><a href="/seguindo">Seguindo</a></h3> 
                        <h3><a href="/logout">Logout</a></h3> 
                    </div>
                </div>
                <span className="avatar"><img src={this.state.usuario.avatar} alt=""></img></span>
                <h1> <strong>{this.state.usuario.nome}</strong></h1>

                <span>No que está pensando?</span>
                {/* <form action="/publicar" method="POST" accept-charset="utf-8"> */}
                <input type="hidden" name="autor" value={this.state.usuario.email}/>
                <textarea name="texto" id="publish" maxlength="140"></textarea>
                <div style={{"text-align": "left;"}}>
                    <input type="submit" name="publicar" value="Publicar" id="publicar" onclick={this.post()} />
                </div>
                {/* </form> */}
               
            </header>

            <section id="main">
                
               {this.state.publicacoes.map((p) =>{
                        return(
                           <div>
                           <div className="row" style={{"margin-top": "15px;"}}>
                                <span  className="avatar" style={{"text-align":"left", "padding":"2px;"}}><img src={p.autor.avatar} alt="" /></span>
                                <span style={{"text-align":"right;"}}>{p.texto}</span><br></br>
                                <span style={{"text-align":"right"}}><strong>{p.data}</strong></span>
                             </div><br></br>
                   <div style={{"border-top": "solid 1px rgba(255, 255, 255, 0.25);"}}></div>
                   </div>
                   )
                })
            }
            </section>

            <footer id="footer">
                <p>&copy; UTFitter. O twitter da UTFPR: <a href="http://utfpr.edu.br">UTFPR</a></p>
            </footer>

    </div>
    );
}
}

export default App;
