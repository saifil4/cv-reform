import React from 'react';

const ActionCenter: React.FC = () => {
    return (
        <div className="flex h-full">
            <div className="flex-1 bg-gray-200">
                {/* Resume component */}
            </div>
            <div className="flex-1 bg-white flex flex-col">
                {/* Boxes with random texts */}
                <div className="bg-gray-300 p-4 m-3">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit tempore esse ullam! Libero ut beatae reiciendis? Quisquam, debitis quos deserunt in optio odit sint tempora excepturi fuga eos quis velit.
                </div>
                <div className="bg-gray-300 p-4 m-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi illo maxime at rerum, odio quibusdam ipsum culpa deserunt tempora repellendus! Dolorem quasi fuga iusto praesentium nesciunt repellat voluptatum similique repudiandae.
                </div>
                <div className="bg-gray-300 p-4 m-3">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore doloribus exercitationem nostrum, corporis reprehenderit quod ratione repudiandae amet, assumenda recusandae reiciendis expedita pariatur aut quia eos placeat fugit odit?
                </div>
                {/* Add more boxes as needed */}
            </div>
        </div>
    );
};

export default ActionCenter;