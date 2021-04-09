import React, { Component } from 'react';
import Clock from './clock';
import ShortCutsPages from './shortCutsPages';


export default class Shortcuts extends Component
{
    render()
    {
        return(
            <div className="container-shortcuts">
                <h1>Atajos</h1>
                <Clock/>
                <ShortCutsPages />
            </div>
        )
    }
}
