import React, { Component } from 'react';
import '../index.css';
import Loader from './Loader';
import Table from './Table';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
      loading: false
    }
  }
  getRepos = () => {
    this.setState({
      loading: true
    })
    const name = this.refs.name.value;
      fetch(`https://api.github.com/search/repositories?q=${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      })
  }
  render() {   
    return (
      <div className="container-fluid app">
        <div className="container-fluid row app-head" id='header'>
            <div className="col-xs-12 col-sm-12 col-lg-12">
               <h1>GitHub Search</h1>
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 search-bar" id='search-bar'>
              <div className="input-group md-form form-sm form-2 pl-0">
                <input
                    className="form-control my-0 py-1 red-border"
                    type="text"
                    placeholder="Search With A Repository Name"
                    aria-label="Search" 
                    ref="name" 
                    onKeyPress={(key) => { 
                      if(key.which === 13){
                        this.getRepos();
                      }
                    }}
                />
                <div className="input-group-append">
                <button className='searchButton' onClick={this.getRepos}>
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
                </button>
                </div>
              </div>
          </div>
        </div>
        <div className="container-fluid ">
            <Loader loading={this.state.loading} />
            <Table searchData={this.state.data.items} /> 
       </div>
     </div>
    );
  }
}

export default App;
