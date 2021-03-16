import React, { Component } from 'react'

export default class Dictionary extends Component {
    constructor()
    {
        super();
        this.state = {
            wiki: 'Python'
        }
    }
    searchWiki = async(e) =>
    {
        e.preventDefault();
        const linkToWiki = 'https://es.wikipedia.org/wiki/' + e.target.elements.word.value;
        this.setState({
            wiki: linkToWiki
        })
        window.open(linkToWiki, '_blank');
    }

    render() {
        return (
            <div className="background-dictonary">
                <div className='container-dictionary'>
                    <h1>Wikipedia </h1>
                    <form onSubmit={this.searchWiki}>
                        <input type="text" name='word' placeholder='Escribe el tema aquí'/> <br/>
                        <button value="">Buscar</button>
                    </form>
                </div>
            </div>
        )
    }
}
