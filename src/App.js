import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/assets/css/main.css';
import './alertify/css/themes/default.css';
import './alertify/css/alertify.css';
import axios from 'axios';
class App extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      usuarios: []
    }
  }



  componentDidMount(){
    
    axios.get('https://utfitter.herokuapp.com/usuarios').then(response =>{
      const {usuarios} =  response.data;
      this.setState({
        usuarios: usuarios
      });
    });
     
      console.log(this.state.usuarios);
    
  }

  render(){
    
  
    return (
			<div id="wrapper">

				{/* <!-- Header -->*/}
					<header id="header">
						
 <div class="col-lg-12">
            <div class="card card-fullheight">
                <div class="card-body">
                        <table className="table table-striped" style={{'vertical-align':'middle'}}>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {
      this.state.usuarios.map((usuario) =>{
        return(
        <tr>
          <td>{usuario.nome}</td>
        </tr>
        )
      })
    } */}
                        </tbody>
						    </table>	
                </div>
            </div>
 </div>					
					</header>

				{/* <!-- Main --> */}
					<section id="main">


					</section>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<p>&copy; UTFitter. O twitter da UTFPR: <a href="http://utfpr.edu.br">UTFPR</a></p>
					</footer>

			</div>
  );
}
}

export default App;
