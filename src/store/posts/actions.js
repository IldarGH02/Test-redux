import getPosts from "services/getPosts"

export const setPostsAction = (payload) => {
    return {
        type: 'posts/setPosts',
        payload,
    }
}

export const loadPosts = () => async(dispatch) => {
    try {
        const {data} = await getPosts();
        dispatch(setPostsAction(data));
    } catch (e) {
        console.log(e, 'Произошла ошибка')
    }    
}