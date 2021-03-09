import React, { Component } from 'react'

import quote from '../assets/img/quoteSimbol.png';

export default class Quotes extends Component {

    constructor()
    {
        super();
        this.state = {
            quote: false
        }
    }

    getQuote = async() =>
    {  
        const quoteGived = await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(res => res.json());

        this.setState({
            quote: quoteGived.quoteText
        })
    }

    

    render() {
        return (
            <React.Fragment>
                <div className='container-quotes'>
                    <div className="quote-container">
                        <div className="container-quote-image">
                            <img src={quote} alt=""/> 
                        </div>
                        <div className="container-text-quote">
                        {
                        this.state.quote == false &&
                        <div className="container-button">
                            <button className='btn btn-black btn-quote' onClick={this.getQuote}>Nueva frase</button>
                        </div>
                         }
                         {this.state.quote != false &&
                         <React.Fragment>
                            <h1 className='text-qoute'><span>{this.state.quote}</span></h1>
                         </React.Fragment>
                        }
                        </div>
                        <div className="container-quote-image container-button lastImagequote">
                        {this.state.quote != false &&
                         <React.Fragment>
                            <button className='btn-white btn-next-quote' onClick={this.getQuote}>Nueva frase</button>
                            <button className='btn-orange btn-next-quote' onClick={this.getQuote}>Añadir frase</button> 
                         </React.Fragment>
                        }
                            <img src={quote}/>
                        </div>
                    </div>
                    

                </div>
            </React.Fragment>
        )
    }
}
