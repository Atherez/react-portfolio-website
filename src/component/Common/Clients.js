import React,{Component} from 'react';
import SingleClient from './SingleClient';

const clients=[
    {logo:"img/logos/envato.jpg",link:"#"},
    {logo:"img/logos/designmodo.jpg",link:"#"},
    {logo:"img/logos/themeforest.jpg",link:"#"},
    {logo:"img/logos/creative-market.jpg",link:"#"},
]

class Clients extends Component{
    render(){
        return (
            <section class="py-5">
                <div class="container">
                    <div class="row">
                        {
                        clients.map((client,index)=>{
                            return <SingleClient {...client} key={index} />
                        })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Clients;