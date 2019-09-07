import React,{Component} from 'react';
import Header from '../Common/Header';
import TimeLine from '../Common/TimeLine';

class AboutPage extends Component{
    render(){
        return (
            <div>
                <Header 
                title="About Page Title"
                subtitle="About Page Subtitle"
                showButton={false}
                image="/img/header-bg.jpg"
                />
                <TimeLine />                   
            </div>
        );
    }
}
export default AboutPage;