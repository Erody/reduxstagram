import React from 'react';

class Comment extends React.Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeComment= this.removeComment.bind(this);
		this.renderComment= this.renderComment.bind(this);
	}
	renderComment(comment, index) {
		return (
			<div className="comment" key={index}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button onClick={() => this.removeComment(index)} className="remove-comment">&times;</button>
				</p>
			</div>
		)
	}
	removeComment(index) {
		const { postId } = this.props.params;
		this.props.removeComment(postId, index);
	}
	handleSubmit(e) {
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}
	render() {
		const { postComments } = this.props;
		return(
			<div className="comments">
				{postComments.map(this.renderComment)}
				<form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
}

export default Comment;