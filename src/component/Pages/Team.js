import React,{Component} from 'react';
import Team from '../Common/Team';
import Header from '../Common/Header';

class TeamPage extends Component {
    render(){
        return (
            <div>
                <Header 
                    title="Team Page"
                    subtitle="Just some data!"
                    showButton={false}
                    image="img/header-bg.jpg"/>
                <Team />
            </div>
        );
    }
}
export default TeamPage;