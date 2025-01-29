import { useState, useEffect } from 'react';

const CardStack = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        {
            name: 'John Doe',
            rating: 5,
            review: 'hellooooo.',
            avatar: 'https://picsum.photos/200/300',
        },
        {
            name: 'Jane Doe',
            rating: 4,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
            avatar: 'https://picsum.photos/200/301',
        },
        {
            name: 'Bob Smith',
            rating: 5,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
            avatar: 'https://picsum.photos/200/302',
        },
        // Add more reviews as needed
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex, reviews.length]);

    return (
        <div className=" flex justify-center items-center p-20">
            <div className="w-80 h-48  flex flex-col justify-center items-center relative overflow-hidden">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500`}
                    >
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <h2 className="text-xl font-bold">{review.name}</h2>
                        <div className="flex justify-center items-center mb-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <svg
                                    key={rating}
                                    className={`w-4 h-4 mr-1 ${
                                        rating <= review.rating ? 'text-yellow-500' : 'text-gray-300'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.967 0 1.71 1.357 1.357 2.863l-3.548 3.548a1 1 0 00-1.886.934l-3.548 3.548a1 1 0 00-1.71-1.357c-.2-2.22.673-3.18 1.357-3.18h4.915a1 1 0 00.95-.69l1.519-4.674z"
                                    />
                                </svg>
                            ))}
                        </div>
                        <p className="text-sm text-ellipsis">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CardStack
