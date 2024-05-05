import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';



const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col md='5' className='m-1'>
            {comments && comments.length > 0 ? (
                <>
                    <h4>Comments</h4>
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </>
            ) : (
                <div>There are no comments for this campsite yet.</div>
            )}
            <CommentForm campsiteId={campsiteId} />
        </Col>
    );
    
};

export default CommentsList;