import React, {useState} from 'react';
import './ListItem.css'

const ListItem = (props) => {
  const {beer, deleteReview, review} = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeConfirmationDialog = () => {
    setIsOpen(false)
  }

  const openConfirmationDialog = () => {
    setIsOpen(true);
  }

  const handleClick = () => {
    deleteReview(review.id);
    setIsOpen(false);
  }

  return (
      <div className="Review-Item">
        {isOpen &&
        <dialog open>
          Confirm deletion
          <button onClick={event => handleClick(event)}>Yes</button>
          <button onClick={closeConfirmationDialog}>No</button>
        </dialog>
        }
        <div className="Review-Title">
          <h3>{beer}</h3>
          <h5>My Score: {review.reviewScore}</h5>
          <button className="Delete-Btn" onClick={openConfirmationDialog}>Delete</button>
        </div>

        <p>{review.reviewComment}</p>
      </div>
  );
};
export default ListItem
