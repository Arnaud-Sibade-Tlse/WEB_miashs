import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

classAppextendsComponent{state={taric:[]}

componentDidMount(){
  fetch('/').then(res=>taric.json()).then(taric=>this.setState({taric}));
}

class App extends Component {
  render() {
    return (
      <div class="tout">
         <div class="container">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
             </button>
             <a class="navbar-brand" href="#">Taric le plus beau #NoHomo</a>
             </div>
             <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div class="container">
            <div class="row" >


            {this.state.users.map(user => <div key={taric.id}>{taric.image}</div>)}


            <article class="col-sm-4 thumbnail" id="ivern1">
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg"/>
              <p class="textMem">Ivern le hippy</p>
            </article>
            <article class="col-sm-4 thumbnail" id="taric1">
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg"/>
              <p class="textMem">Taric le plus beau</p>
            </article>
            <article class="col-sm-4 thumbnail" id="garen1">
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"/>
              <p class="textMem">Garen best champ</p>
            </article>

            <article class="col-sm-4 thumbnail" id="ivern2">
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_1.jpg"/>
              <p class="textMem">Ivern le hippy</p>
            </article>
            <article class="col-sm-4 thumbnail" id="taric2">
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_2.jpg"/>
              <p class="textMem">Taric le plus beau</p>
            </article>
            <article class="col-sm-4 thumbnail" id="garen2">
              <img  src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_4.jpg"/>
              <p class="textMem">Garen best champ</p>
            </article>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
