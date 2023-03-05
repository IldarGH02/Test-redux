const initialState = {
    posts: [],
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'posts/setPosts' :
            return {...state, posts: [...state.posts, ...action.payload]}        
        default: 
            return state
    }
}

export default postsReducer