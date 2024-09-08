import { Comment } from "./Comment";

export const CommentsList = ({ comments }) => {
  if (!comments) {
    return null; // Or return a fallback UI
  }

  return (
    <div className="mt-4">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment comment={comment} />
          <div className="ml-14">
            {/* {comment.replies.map((reply, index) => <Comment key={index} data={reply} />)} */}

            {/* Recursively traversing the comments list. */}
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
