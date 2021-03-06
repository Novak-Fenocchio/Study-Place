import React, { Component } from 'react'

import quote from '../assets/img/quoteSimbol.png';
import Loading from './loading';
import Module from './module';

export default class Quotes extends Component {

    constructor()
    {
        super();
        this.state = {
            quote: false,
            addQuote: false,
            newQuotePersonally: false,
            loadingQuote: false
        }
    }
    generateNewQuote = () =>
    {
        this.getQuote();
        this.getQuote();
        setTimeout(this.confirmLoad, 3000);

    }

    getQuote = async() =>
    {  
        this.setState({
            loadingQuote: true
        })
        const quoteGived = await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(res => res.json());

        this.setState({
            quote: quoteGived.quoteText,
            loadingQuote: false
        })
    }

    addQuote = () =>
    {
        this.setState(
            {
              addQuote: true,
              newQuotePersonally: false
            }
        )
    }
    addQuoteFinished = async(e) =>
    {
        e.preventDefault();
        this.setState({
            quote: e.target.elements.quote.value,
            newQuotePersonally: true,
            addQuote: false
        })
    }
    confirmLoad = () =>
    {   
        if(this.state.loadingQuote == true){
            this.generateNewQuote();
        }
    }
    componentDidMount()
    {
        this.generateNewQuote();
        setTimeout(this.confirmLoad, 3000);
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-quotes'>
                    <div className="quote-container">
                        <div className="container-quote-image">
                            <img src={quote} className='quote-container-img' alt=""/> 
                        </div>
                        <div className="container-text-quote">
                        {
                        this.state.loadingQuote == false && this.state.quote == false &&
                        <div className="container-button">
                            <button className='btn btn-black btn-quote' onClick={this.generateNewQuote}>Nueva frase</button>
                        </div>
                         }
                         {
                             this.state.loadingQuote == true &&
                             <Loading/>
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
                            <button className='btn-white btn-next-quote' onClick={this.generateNewQuote}>Nueva frase</button>
                            <button className='btn-orange btn-next-quote' onClick={this.addQuote}>A??adir frase</button> 
                         </React.Fragment>
                        }
                            <img src={quote} className='quote-container-img'/>
                        </div>
                    </div>
                </div>
                {
                    this.state.addQuote && this.state.newQuotePersonally == false &&
                    <Module alert='quote' quotePersonally={this.addQuoteFinished}/>
                }
            </React.Fragment>
        )
    }
}
