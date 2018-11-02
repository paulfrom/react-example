import React,{ Component } from 'react';
import { addItem } from "../redux/action";
import {connect} from 'react-redux'


class CommentInput extends Component {
    state={
        userName:'',
        comment:''
    }
    onClick=()=>{
        this.props.click(this.state)
    }
    onTextChange=(e)=>{
        this.setState({userName:e.target.value})
    }
    onAreaChange=(e)=>{
        this.setState({comment:e.target.value})
    }
    render(){
        return (<div>
            <div style={{display:'inline-block'}}>
                <span>用户名：</span>
                <div><input onChange={this.onTextChange} value={this.state.userName}/></div>
            </div>
            <div style={{display:'inline-block'}}>
                <span>用户评论：</span>
                <div><textarea onChange={this.onAreaChange} value={this.state.comment}/></div>
            </div>
            <div style={{display:'inline-block',textAlign:'right'}}>
                <button onClick={this.onClick}>发布</button>
            </div>
        </div>)
    }
}


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        click:(value)=>dispatch(addItem(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInput)


