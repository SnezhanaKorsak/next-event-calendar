import classes from './comment-list.module.css';

export default function CommentList(props) {
  const { items } = props;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <div>{item.text}</div>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
