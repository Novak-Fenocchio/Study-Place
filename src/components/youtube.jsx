import React, { Component } from 'react'

export default class youtube extends Component {
    render() {
        return (
            <div className='container-youtube'>
                <iframe width="400" height="256" src="https://www.youtube.com/embed/mA9YsRcm2tE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
