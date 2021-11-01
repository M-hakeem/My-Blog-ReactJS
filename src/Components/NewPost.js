import React from "react";
import App from "./App";

class NewPost extends React.Component{
    state = {
        text:"",
    };
    onChange=(event)=>{
        this.setState({
            text:event.target.value,
        });
    }
    onSubmit=(event)=>{
        event.preventDefault()
        if(this.state.text !==''){
            this.props.newPost(this.state.text);
            this.setState({
                text:'',
            });
        }
    }
    render(){
        return (
            <div className="new-post">
                <form onSubmit={this.onSubmit}>
                    <input 
                    type='text' 
                    placeholder="Enter text" 
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <button>Add</button>
                 </form>
            </div>
        );
    }
}

export default NewPost;