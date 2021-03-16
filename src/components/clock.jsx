import React, { Component } from 'react'

export default class Clock extends Component {
    constructor()
    {
        super();
        this.state = {
            hours: undefined,
            minutes: undefined,
            seconds: undefined
        }
    }

    componentDidMount()
    {

        setInterval(
            ()=>{
                let today = new Date();

                this.setState({
                    hours: today.getHours(),
                    minutes: today.getMinutes(),
                    seconds: today.getSeconds()
                })
            }, 1000)
    }

    render() {
        return (
            <div  className='container-clock'>
                <h1>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h1>
            </div>
        )
    }
}
