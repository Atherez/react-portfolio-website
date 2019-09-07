import React,{Component} from 'react';
import Header from '../Common/Header';

//re-usable components
import TimeLine from '../Common/TimeLine';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Client from '../Common/Clients';

class HomePage extends Component{
    render(){
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    showButton={true}
                    btntext="More About Us"
                    btnlink="/about"
                    image="img/header-bg.jpg"
                />
                <Services/>
                <Portfolio />
                <TimeLine />
                <Team />
                <Client />
            </div>
        );
    }
}
export default HomePage;