import { useEffect, useState, useContext } from 'react';

import { NotificationContext } from "@/store/notification-context";
import NewComment from "@/components/input/new-comment";
import CommentList from "@/components/input/comment-list";

import classes from './comments.module.css';

export default function Comments(props) {
  const { eventId } = props;

  const notificationCnx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const [updateComments, setUpdateComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);

      fetch('/api/comments/' + eventId)
        .then((response) => response.json())
        .then((data) => {
          setIsFetchingComments(false)
          setComments(data.comments);
        });
    }
  }, [showComments, updateComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCnx.showNotification({
      title: 'Sending comment...',
      message: 'Wait for a moment',
      status: 'pending',
    })

    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        notificationCnx.showNotification({
          title: 'Success',
          message: 'Your comment added',
          status: 'success',
        })
        setUpdateComments(true);
      })
      .catch(() => {
        notificationCnx.showNotification({
          title: 'Error',
          message: 'Something was wrong',
          status: 'error',
        })
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler}/>}
      {showComments && !isFetchingComments && <CommentList items={comments}/>}
      {showComments && isFetchingComments && <div>Loading...</div>}
    </section>
  );
}