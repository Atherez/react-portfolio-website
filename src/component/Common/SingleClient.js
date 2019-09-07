import React,{Component} from 'react';

class SingleClient extends Component{
    render(){
        return (
            <div class="col-md-3 col-sm-6">
                <a href={this.props.link}>
                    <img class="img-fluid d-block mx-auto" src={this.props.logo} alt=""/>
                </a>
            </div>
        );
    }
}

export default SingleClient; 