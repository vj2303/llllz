"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, User, X } from 'lucide-react';

// BottomSheet Component
const BottomSheet = ({ onClose, reviews }) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0  bg-black bg-opacity-50 z-40" onClick={onClose}></div>

      {/* Bottom Sheet */}
      <div className=" w-full sm:max-w-[1400px] mx-auto fixed inset-x-0 bottom-0 bg-white rounded-t-xl px-4 z-50 max-h-[80vh] overflow-y-auto">
       <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 bottom-0 z-10">
          <h2 className="text-xl font-semibold">All Reviews ({reviews.length})</h2>
          <X size={24} className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex flex-col gap-2">
          {reviews.map((rev, index) => (
            <div className="border p-4 rounded-xl flex flex-col gap-2" key={index}>
              <span className="flex gap-2 items-center">
                <User size={15} />
                <p className="font-semibold">{rev.customer_name}</p>
              </span>
              <div className="flex gap-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i < rev.reviews_data.customer_reviews[0].rating ? (
                    <Star className="inline" key={i} fill="#ffa534" color="#ffa534" />
                  ) : (
                    <Star className="inline" key={i} color="#ffa534" />
                  )
                )}
              </div>
              <p className="text-[12px]">Visited on 12th Sep 24</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// ReviewsSection Component
const ReviewsSection = ({ reviews }) => {
  const [showAll, setShowAll] = useState(false); // state to toggle between showing limited and all reviews
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false); // State for bottom sheet

  // Function to toggle showing all or limited reviews
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Function to show the bottom sheet
  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to hide the bottom sheet
  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  // Display either all reviews or the first 5 based on the state
  const displayedReviews = showAll ? reviews : reviews.slice(0, 5);

  const showStars = (num) => {
    return Array.from({ length: 5 }, (_, index) =>
      index < num ? <Star className="inline" key={index} fill="#ffa534" color="#ffa534" /> : <Star className="inline" key={index} color="#ffa534" />
    );
  };

  return (
    <section id="reviews" className="p-2 max-w-[1400px] mx-auto mt-2">
      <span className="flex justify-between">
        <h2 className="text-2xl sm:text-[32px] font-semibold flex justify-between mb-4">
          Reviews({reviews.length})
        </h2>
        {/* Only show "See All" if there are more than 5 reviews */}
        {reviews.length > 5 && (
          <p className="underline mr-4 cursor-pointer" onClick={openBottomSheet}>
            See All
          </p>
        )}
      </span>
      {reviews.length > 0 ? (
        <div className="flex flex-col gap-2">
          {displayedReviews.map((rev, index) => (
            <div className="border p-4 rounded-xl flex flex-col gap-2" key={index}>
              <span className="flex gap-2 items-center">
                <User size={15} />
                <p className="font-semibold">{rev.customer_name}</p>
              </span>
              <div className="flex gap-2">{showStars(rev.reviews_data.customer_reviews[0].rating)}</div>
              <p className="text-[12px]">Visited on 12th Sep 24</p>
            </div>
          ))}
        </div>
      ) : (
        'No Customer Reviews yet'
      )}

      {/* Render Bottom Sheet */}
      {isBottomSheetOpen && <BottomSheet onClose={closeBottomSheet} reviews={reviews} />}
    </section>
  );
};

export default ReviewsSection;
