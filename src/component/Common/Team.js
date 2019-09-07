import React,{Component} from 'react';
import TeamMember from  './TeamMember';

const team=[
    {name:"Kay Garland",role:"Lead Designer",image:"img/team/1.jpg",facebook:"#",twitter:"#",linkedin:"#"},
    {name:"Larry Parker",role:"Lead Marketer",image:"img/team/2.jpg",facebook:"#",twitter:"#",linkedin:"#"},
    {name:"Diana Peterson",role:"Lead Developer",image:"img/team/3.jpg",facebook:"#",twitter:"#",linkedin:"#"},
]
class Team extends Component{
    render(){
        return (
            <div>
                <section class="bg-light page-section" id="team">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div class="row">
                        {
                            team.map((member,index)=>{
                                return <TeamMember {...member} key={index} />
                            })
                        }
                        
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                        <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Team;