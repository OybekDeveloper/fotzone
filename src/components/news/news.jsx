import React, {  useState } from 'react';
import './news.scss';
const gdata1 = [
  { id: 1, title: 'All', active: true },
  { id: 2, title: 'Football', active: false },
  { id: 3, title: 'Exclusives', active: false },
  { id: 4, title: 'Transfer news', active: false },
  { id: 5, title: 'Predictions', active: false },
  { id: 6, title: 'Champions League', active: false },
  { id: 7, title: 'Transfer news', active: false },
  { id: 8, title: 'Predictions', active: false },
  { id: 9, title: 'Champions League', active: false },
];

const News = () => {
  const [categories, setCategories] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleActive = (clickedId) => {
    const updatedCategories = categories.map((item) => ({
      ...item,
      active: item.id === clickedId,
    }));
    setCategories(updatedCategories);
  };

  return (
    <div className='news flex w-full gap-x-2'>
      <div className='w-3/4 flex flex-col'>
        <div
          className='flex flex-row gap-x-2 p-2 overflow-x-auto '
          style={{ whiteSpace: 'nowrap', marginLeft: `-${scrollLeft}px` }}
        >
       </div>
        <div className='shadow-border'>
        <div>Horizontal scroll</div>
          <div>Top scores</div>
        </div>
      </div>
      <div className='w-1/4 shadow-border'>news video</div>
    </div>
  );
};

export default News;
