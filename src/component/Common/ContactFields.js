import React,{Component} from 'react';

class ContactFields extends Component{
    render(){
        return (
            <div className="form-group">
                {
                (this.props.type==='textarea')?
                    <textarea 
                        className="form-control"
                        id={this.props.name} 
                        placeholder={this.props.placeholder}
                        required
                        data-validation-required-message={this.props.requiredMessage}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    ></textarea>
                    :
                    <input 
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type} 
                        placeholder={this.props.placeholder}
                        required
                        data-validation-required-message={this.props.requiredMessage}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                }
                <p className="text-danger">
                    {(this.props.touched && this.props.errors) && 
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        );
    }
}
export default ContactFields;