import React, { Component } from 'react'

export default class Module extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            alertType: undefined,
            finished: false,
            search: undefined,
            alertType2: undefined
        }
    }
    componentDidMount()
    {
        this.setState({
            alertType: this.props.alert,
            finished: false,
            search: this.props.message,
        })
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

        generateLink = (plataform) =>
        {
            let link = plataform;
            switch(plataform)
            {
                case 'wikipedia':
                    link = `https://es.wikipedia.org/wiki/${this.props.message}`;
                    window.open(link, '_blank');
                break;
                case 'yahoo':
                     link = `https://es.answers.search.yahoo.com/search?p=${this.props.message}`;
                    window.open(link, '_blank');
                break;
                case 'brainly':
                     link = `https://brainly.lat/app/ask?entry=hero&q=${this.props.message}`;
                    window.open(link, '_blank');
                break;
                case 'youtube':
                     link = `https://www.youtube.com/results?search_query=${this.props.message}`;
                    window.open(link, '_blank');
                break;
                case 'google':
                    link = `https://scholar.google.es/scholar?hl=es&as_sdt=0%2C5&q=${this.props.message}`;
                    window.open(link, '_blank');
                break;
                case 'quimica':
                     link = `https://www.quimica.es/search/?q=${this.props.message}`;
                    window.open(link, '_blank');
                break;
                
            }
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
                     {this.state.alertType == 'search' &&
                          <section className='pomodoro-finished selectPlataForm'>
                          <form onSubmit={this.props.quotePersonally}>
                              <h1>Selecciona una plataforma.</h1>
                              <h4 className='search'>{this.props.message}</h4>
                              <div className="container-search-plataforms">
                                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png" onClick={()=>this.generateLink('wikipedia')} alt=""/>
                                  <img src="https://image.flaticon.com/icons/png/512/179/179345.png" onClick={()=>this.generateLink('yahoo')} alt=""/>
                                  <img src="https://es-static.z-dn.net/files/d82/e2c8833151147282374c7f94a60ce6ad.jpg" onClick={()=>this.generateLink('brainly')} className='borderRadius' alt=""/>
                                  <img src="https://images.vexels.com/media/users/3/132820/isolated/lists/d11844f41c096089bcb8e83414111313-icono-de-burbuja-de-youtube.png" onClick={()=>this.generateLink('youtube')} alt=""/>
                                  <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" onClick={()=>this.generateLink('google')} alt=""/>
                                  <img src="https://static.comunicae.com.mx/photos/notas/85341/1475185146_Beeker_Only_Logo.png" onClick={()=>this.generateLink('quimica')} className='borderRadius' alt=""/>
                              </div>
                          </form> 
                          <form onSubmit={this.props.delete}>
                              <button className='closeX' type="submit">X</button>
                          </form>
                          </section>
                     }
            </React.Fragment>
        )
    }
}
