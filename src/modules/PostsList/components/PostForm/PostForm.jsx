import './PostForm.css';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addNewPost} from "../../postsSlice";

const PostForm = () => {
    const dispatch = useDispatch();
    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "all"
    });
    const onSubmit = (data) => {
        dispatch(addNewPost(data));
        reset();
    };

    return (
        <div className='post-form'>
            <h3>Add Post</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='post-form__input-wrapper'>
                    <label>
                        <div>User:</div>
                        <input type="text"
                               {...register('userId', {
                                   required: true,
                               })}
                        />
                    </label>
                    <span>
                        {errors?.userId && <span className='post-form__field-error'>This is required.</span>}
                    </span>
                </div>
                <div className='post-form__input-wrapper'>
                    <label>
                        <div>Title:</div>
                        <input type="text"
                               {...register('title', {
                                   required: true,
                               })}
                        />
                    </label>
                    <span>
                        {errors?.title && <span className='post-form__field-error'>This is required.</span>}
                    </span>
                </div>
                <div className='post-form__input-wrapper'>
                    <label>
                        <div>Body:</div>
                        <textarea {...register('body', {
                            required: true,
                        })}
                        />
                    </label>
                    <span>
                        {errors?.body && <span className='post-form__field-error'>This is required.</span>}
                    </span>
                </div>
                <input type="submit" disabled={!isValid}/>
            </form>
        </div>
    );
};

export default PostForm;