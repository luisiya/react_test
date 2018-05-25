import React, {Component} from 'react';
import DataFromServer from './DataFromServer';
import About from './About';

export default class App extends React.Component {

    render() {
        return (
            <div className="container" width="300px">
                <div className="aboutMe">
                    <div className="about">
                        <About/>
                    </div>

                    <DataFromServer/>

                </div>
            </div>
        )
    }
}
