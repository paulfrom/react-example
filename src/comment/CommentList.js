import React,{ Component } from 'react';
import CommentItem from "./CommentItem";
import {connect} from 'react-redux'

class CommentList extends Component{
    render(){
        return this.props.dataList.map((item,index) =>
            <CommentItem key={index} data={item}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataList:state.commentList
    }
}

function mapDispatchToProps(state) {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList)