import React, { useState, useEffect } from 'react';
import PaginatorHooked from 'react-hooks-paginator';
 
const Paginator = props => {
  const pageLimit = 10;
 
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
 
  useEffect(() => {
    if(data.length = 0) {
      setData([
        'data',
      ])
    }
  }, [props]);
 
  // useEffect(() => {
  //   setCurrentData(data.slice(offset, offset + pageLimit));
  // }, [offset, data]);
 
  return (
    <div>
      <ul>
        {currentData.map(data => (
          <li>{data}</li>
        ))}
      </ul>
      {/* <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}
 
export default Paginator