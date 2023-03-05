import React, {useEffect} from "react";

import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'store/posts/actions';
import { selectPosts } from 'store/posts/selectors';

import './styles.css'

const PostsList = () => {    
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    return (
        <div className="posts-list">
            {posts.length > 0 ? (
                posts.map(post => {
                    return(
                        <div key={post.id} className='post-item'>
                            <div className="post-content">
                                <h1>TITLE: {post.title}</h1>
                                <h1>BODY: {post.body}</h1>
                            </div>
                        </div>
                    )                    
                })
            ) : <div>Список пуст</div>} 
        </div>
    )
}

export default PostsList