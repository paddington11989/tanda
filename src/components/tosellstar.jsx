import React, { useState } from 'react';
import './tosellstar.css';
import filledStar from './img/fillstar.svg';
import emptyStar from './img/tosellstar.svg';

const SellStarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <img
                            src={ratingValue <= (hover || rating) ? filledStar : emptyStar}
                            className="star"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            alt={`${ratingValue} Star`}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default SellStarRating;
