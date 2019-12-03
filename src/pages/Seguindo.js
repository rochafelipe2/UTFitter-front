import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../style/assets/css/main.css';
import '../alertify/css/themes/default.css';
import '../alertify/css/alertify.css';
import axios from 'axios';
import alertify from 'alertifyjs'

class Seguindo extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      seguidores: []
    }
  }

   configureModal(){
     alertify.confirm().setHeader("Atenção");
     alertify.alert().setHeader("Atenção");;
}

  componentDidMount(){
    axios.get('https://utfitter.herokuapp.com/seguindo').then(response =>{
        const {seguidores} =  response.data;
        this.setState({
            seguidores: seguidores
        });
      });
    
  }

  render(){
    
  
    return (
        <div id="wrapper">
            <header id="header">
              <div class="row">
                <div class="row" style="float:right">
                    <h3><a href="/home">Home</a></h3> 
                    <h3><a href="seguidores">Seguidores</a></h3> 
                </div>
              </div>
            </header>

            <section id="main">
                <div class="row"><h1>Seguindo:</h1></div>
                     
                {this.state.seguidores.map((s) =>{
                     return(
                <div class="row">
                   <span  class="avatar" style="text-align:left; padding:2px;"><img src={s.avatar} alt="" /></span>
                     <span style="text-align:right;">{s.nome}</span><br></br>
                     <span style="text-align:right"><strong>{s.email}</strong></span>
                    
                   </div>
             
             )
                })
            }
            </section>


    </div>

  );
}
}

export default Seguindo;
