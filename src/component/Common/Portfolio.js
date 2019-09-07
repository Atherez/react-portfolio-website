import React,{Component} from 'react';
import PortfolioItem from './PortfolioItem';

const portfolio=[
    {
        client:"Threads",
        category:"Illustration",
        img:"img/portfolio/01-thumbnail.jpg"
    },
    {
        client:"Explore",
        category:"Graphic Design",
        img:"img/portfolio/02-thumbnail.jpg"
    },
    {
        client:"Finish",
        category:"Identity",
        img:"img/portfolio/03-thumbnail.jpg"
    },
    {
        client:"Lines",
        category:"Branding",
        img:"img/portfolio/04-thumbnail.jpg"
    },
    {
        client:"Southwest",
        category:"Website Designing",
        img:"img/portfolio/05-thumbnail.jpg"
    },
    {
        client:"Window",
        category:"Photography",
        img:"img/portfolio/06-thumbnail.jpg"
    },
];
class Portfolio extends Component{
    render(){
        return (
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row"> 
                        {portfolio.map((item,index)=>{
                            return <PortfolioItem {...item} key={index}/>
                        })}
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Portfolio;