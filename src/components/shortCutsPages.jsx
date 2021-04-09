import React, { Component } from 'react'

export default class shortCutsPages extends Component {
    render() {
        return (
            <div className='container-shortcuts-pages'>
                <div>
                     <a href="https://classroom.google.com/h" target='_AUTOBLANK'>
                        <img src="https://logodownload.org/wp-content/uploads/2020/04/google-classroom-logo.png" alt=""/>
                      </a>
                </div>
                <div>
                    <a href="https://calendar.google.com/calendar/" target='_AUTOBLANK'>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Calendar_icon.svg/1200px-Google_Calendar_icon.svg.png" alt=""/>
                    </a>
                </div>
                <div>
                    <a href="https://drive.google.com/drive/?hl=es" target='_AUTOBLANK'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt=""/>
                    </a>
                </div>
                <div>
                     <a href="https://docs.google.com/document/u/0/" target='_AUTOBLANK'>
                       <img src="https://logodownload.org/wp-content/uploads/2018/10/word-logo-3-1.png" alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}
