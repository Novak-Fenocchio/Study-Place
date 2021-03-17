import React, { Component } from 'react';
import Module from './module';

export default class Dictionary extends Component {
    constructor()
    {
        super();
        this.state = {
            wiki: false,
            on: undefined
        }
    }
    searchWiki = async(e) =>
    {
        e.preventDefault();
/*         const linkToWiki = 'https://es.wikipedia.org/wiki/' + e.target.elements.word.value; */
        const target = e.target.elements.word.value;
        const linkToWiki = 'https://es.wikipedia.org/wiki/' + e.target.elements.word.value;
        this.setState({
            wiki: target,
            on: 'search'
        })
    }
    deleteSearch = (e) =>
    {
        e.preventDefault();
        if(this.state.on !== undefined)
        {
           this.setState({
               wiki: false
           })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="background-dictonary">
                    <div className='container-dictionary'>
                        <h1>Wikipedia </h1>
                        <form onSubmit={this.searchWiki}>
                            <input type="text" name='word' placeholder='Escribe el tema aquí'/> <br/>
                            <button value="">Buscar</button>
                        </form>
                    </div>
                </div>
                {this.state.wiki !== false &&
                    <Module alert={this.state.on} pr={this.state.on} delete={this.deleteSearch} message={this.state.wiki}/>
                }
            </React.Fragment>
        )
    }
}
