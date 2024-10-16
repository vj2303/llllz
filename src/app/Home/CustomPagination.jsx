import React from 'react';
// import { SwiperPagination } from 'swiper/react';

const CustomPagination = ({ count, currentIndex }) => {
  const renderPagination = () => {
    const items = [];
    for (let i = 0; i < count; i++) {
      
      items.push(
        <div
          key={i}
          className={`pagination-item`}
        ></div>
      );
    }
    return items;
  };

  return (
    <div className="custom-pagination">
      {renderPagination()}
    </div>
  );
};

export default CustomPagination;
