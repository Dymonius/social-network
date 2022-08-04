import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "./postsSlice";
import PostForm from "./components/PostForm/PostForm";


const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            <h1>Posts List</h1>
            <PostForm></PostForm>
            <div>
                {posts.map(post => (
                        <div className="card" key={post.id}>
                            <div className="post-list-card__user-id">User: {post.userId}</div>
                            <h5 className="post-list-card__title">{post.title.toUpperCase()}</h5>
                            <div className="post-list-card__body">{post.body}</div>
                        </div>
                    )
                )
                }
            </div>
        </div>
    );
}

export default PostsList;