import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/movieAPI/movieAPI';
import { ReviewItem } from 'components';
import { Info, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(review => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </List>
      ) : (
        <Info>There are not any reviews for this movie yet </Info>
      )}
    </>
  );
};

export default Reviews;
