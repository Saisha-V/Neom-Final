import React, { useEffect, useState } from "react";
import { HR } from "flowbite-react";

type Feedback = {
  id: number;
  title: string;
  date: string;
  review: string;
  description: string;
  rating: number;
  reviews: number;
  img: string;
};

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch("../src/constants/feedback.data.json")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching feedback data:", error));
  }, []);

  return (
    <div className="bg-[#F9F7F2] min-h-screen py-14 px-80">
      <h1 className="text-3xl  font-ivy font-light pb-10">
        Hi Charlie, <br /> here are the glimpse of your feedback shared with us.
      </h1>

      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="mb-8 bg-[#F9F7F2] rounded-md ">
          <div className="flex">
            <img
              src={feedback.img}
              alt={feedback.title}
              className="w-1/3 h-60 object-cover rounded-md mr-6"
            />

            <div className="w-2/3">
              <h2 className="text-xl font-ivy">{feedback.title}</h2>
              <p className="text-gray-500 mb-2">{feedback.date}</p>
              <p className="mb-2 font-poppins">{feedback.review}</p>
              <p className="text-sm text-gray-600 mb-4">
                {feedback.description}
              </p>

              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < feedback.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.957h5.21c.969 0 1.371 1.24.588 1.81l-4.209 3.058 1.618 4.957c.3.921-.755 1.688-1.54 1.116l-4.209-3.058-4.209 3.058c-.785.572-1.84-.195-1.54-1.116l1.618-4.957-4.209-3.058c-.784-.57-.38-1.81.588-1.81h5.21l1.618-4.957z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {feedback.reviews} reviews
                </p>
              </div>
            </div>
          </div>
          <HR className="mt-6 border-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
