import React, { Component } from "react"

class ProfileStatus extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editeMode: false,
            status: this.props.status
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
   
    activeEditMode = ()  =>{
        this.setState({
          editeMode: true
        })
    }
  
    deactiveEditMode = () => {
        this.setState({
            editeMode: false
          })
          this.props.updateUserStatus(this.state.status)
    }

    handleFocus = (event) => {
        event.target.select();
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

   render() {
    return (
        <>
            {!this.state.editeMode && 
               <div>
                   <span onDoubleClick={this.activeEditMode}>{this.props.status || null}</span>
               </div>
            }
            {this.state.editeMode && 
               <div>
                   <input onChange={this.onStatusChange} onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status} />
               </div>
            }
        </>
    ) 
   }
}

export default ProfileStatus