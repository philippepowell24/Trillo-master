import React from "react";

const Review = () => (
  <figure className="user-reviews">
    <figure className="review">
      <blockquote className="review__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.
      </blockquote>
      <figcaption className="review__user">
        <img
          src="img/user-1.jpg"
          className="review__photo"
          alt="Review User 1"
        />
        <div className="review__user-box">
          <p className="review__user-name">Nick Smith</p>
          <p className="review__user-date">Feb 23rd, 2019</p>
        </div>
        <div className="review__rating">7.8</div>
      </figcaption>
    </figure>
    <figure className="review">
      <blockquote className="review__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi.
      </blockquote>
      <figcaption className="review__user">
        <img
          src="img/user-2.jpg"
          className="review__photo"
          alt="Review User 2"
        />
        <div className="review__user-box">
          <p className="review__user-name">Mary Thomas</p>
          <p className="review__user-date">Sept 13th, 2019</p>
        </div>
        <div className="review__rating">9.3</div>
      </figcaption>
    </figure>
    <button className="btn-inline">
      Show all <span>&rarr;</span>
    </button>
  </figure>
);

export default Review;
