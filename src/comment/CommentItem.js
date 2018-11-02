import React,{ Component } from 'react';

export default class CommentItem extends Component{

    render(){
        return (<div>
            <span className='user-name'>{this.props.data.userName+':'}</span>
            <span className='comment'>{this.props.data.comment}</span>
        </div>)
    }
}