import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component {
	render() {
		const { postId } = this.props.params;
		// index of the post
		const index = this.props.posts.findIndex(post => post.code === postId);
		// get us the post
		const post = this.props.posts[index];
		const postComments = this.props.comments[postId] || [];
		return (
			<div className="single-photo">
				<Photo index={index} post={post} {...this.props}/>
				<Comment postComments={postComments} {...this.props} />
			</div>
		)
	}
}

export default Single;