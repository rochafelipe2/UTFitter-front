import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/assets/css/main.css';
import './alertify/css/themes/default.css';
import './alertify/css/alertify.css';
class App extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      usuarios: []
    }
  }

  getUsuarios = async() =>{
    
    const response = await fetch('https://utfitter.herokuapp.com/usuarios');

  
    return response.json();
  }

  componentDidMount(){
    this.getUsuarios().then(_usuarios => {
      const {usuarios} = _usuarios
      this.setState({
        usuarios: usuarios
      });
      console.log(this.state.usuarios);
    })
  }

  render(){
    const {usuarios} = this.state;
  
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
                        {
      usuarios.map((usuario) =>{
        return(
        <tr>
          <td>{usuario.nome}</td>
        </tr>
        )
      })
    }
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
