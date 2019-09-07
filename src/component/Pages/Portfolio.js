import React,{Component} from 'react';
import Portfolio from '../Common/Portfolio';
import Header from '../Common/Header';

class PortfolioPage extends Component{
    render(){
        return (
            <div>
            <Header 
                title="Portfolio Page"
                subtitle="Have a look at our work !"
                showButton={false}
                image="img/header-bg.jpg"
                    />
            <Portfolio />
            </div>
        );
    }
}
export default PortfolioPage;