import React, {Component} from 'react';


export default class About extends React.Component {
    render() {
        return (

            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="http://filearchive.cnews.ru/img/zoom/2012/06/08/vaio%5D_(4).jpg"
                         alt="photo kewboard"></img>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Kravchenko Luisi<i
                        className="material-icons right">more_vert</i></span>
                    <p><a href="https://luisi.top/">My web site</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Kravchenko Luisi<i class="material-icons right">close</i></span>
                    <p>I have been working as frontend-end developer freelancer for more than one year.</p>
                    <p> I`ve gained experience in building web application and services for commercial project of CRM
                        system.</p>
                    <p> I have successfully applied my skills in Javascript, HTML5, Sass, WebPack. In order to advance
                        my skills and knowledge, I have recently started studying React Fundamentals.</p>
                    <p> In addition, I have general skills in graphics editors, such as Photoshop and 3DStudio MAX.</p>
                    <p> On the previous position, I had an experience in design, development and administration of the
                        database for the construction of BS network. I’ve successfully completed Harvard CS50
                        programming courses (BrainBasket Foundation).</p>

                </div>
            </div>
        )
    }

}



