import React, { Component } from 'react'

export default class Pomodoro extends Component {

    constructor()
    {
        super();
        this.state =
        {
            countDown: undefined,
            finished: false,
            counting: false,
            time: 1500,
            minutes: 24,
            seconds: 59
        }
    }

    startPomodoro = () =>
    {
        const countDown = setInterval(this.countDownFunction,1000);        
        this.setState({
            countDown: countDown,
            counting: true
        })
    }

    countDownFunction = () =>
    { 
      /* Check if the countdown over */
      if(this.state.minutes == 0 && this.state.seconds == 0)
      {
        this.finished()
      }else
      {
        this.setState(
            {
              seconds: this.state.seconds-1
            })
      }

        /* The coundown dont over, we substract a minute */
         if(this.state.seconds == 0)
         {
           if(this.state.minutes != 0)
           {
             this.setState(
               {
                 minutes: this.state.minutes-1,
                 seconds: 60
               })
           }
         }

    }

    finished = () =>
      {
       clearInterval(this.state.countDown);
       this.setState({
           finished: true
       })
      }

      changeFinished = () =>
      {
        this.setState({
            countDown: undefined,
            finished: false,
            counting: false,
            time: 1500,
            minutes: 24,
            seconds: 59
        })
      }

    render() {
        return (
            <React.Fragment>

            <section className='section section-pomodoro'>
                <h1>Pomodoro</h1>
                <span className='time-countdown'>{this.state.minutes}:{this.state.seconds}</span> <br/>
                
                {this.state.counting == false && 
                <button onClick={this.startPomodoro} className='btn-empezar'>Empezar</button>
                }
                {this.state.counting &&
                <button onClick={this.startPomodoro} className='btn-parar'>Parar</button>
                }
            </section>

            {this.state.finished &&
            <section className='pomodoro-finished'>
                <div className="">
                    <h1>El contador termino! descansa.</h1>
                    <button className='btn-pomodoro-finished' onClick={this.changeFinished}>Okey</button>
                </div>
            </section>
            }
            </React.Fragment>
        )
    }
}
