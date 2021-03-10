import React, { Component } from 'react'

export default class Module extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            alertType: this.props.alert,
            finished: false
        }
    }
    
    changeFinished = () =>
      {
        this.setState({
            finished: true
        })
      }
      hiddenQuote = () =>
      {
          alert('yeah');
          this.setState({
              alertType: 'na'
          })
      }

    render() {
        return (
            <React.Fragment>
                    {
                    this.props.alert == 'pomodoro' && this.state.finished == false &&
                    <section className='pomodoro-finished'>
                    <div className="">
                        <h1>El contador termino! descansa.</h1>
                        <button className='btn-pomodoro-finished' onClick={this.changeFinished}>Okey</button>
                    </div>

                    
                    </section>
                     }
                     {
                     this.state.alertType == 'quote' &&
                        <section className='pomodoro-finished'>
                        <form onSubmit={this.props.quotePersonally}>
                            <h1>Agrega una nueva frase.</h1>
                            <textarea type="text" className='btn-pomodoro-finished input-quote' placeholder='Tu frase' name='quote'/> <br/>
                            <button className='btn-pomodoro-finished' >Añadir</button>
                        </form>
                        </section>
                     }
            </React.Fragment>
        )
    }
}
