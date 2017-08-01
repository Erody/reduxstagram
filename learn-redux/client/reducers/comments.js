function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}
function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment,
			}];
		case 'REMOVE_COMMENT':
			return [
				// from start to comment at index
				...state.slice(0, action.index),
				// skip one comment, return to the end
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
}

export default comments;