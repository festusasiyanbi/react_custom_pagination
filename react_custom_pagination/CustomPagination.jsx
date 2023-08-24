import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const CustomPagination = ({
  currentPage,
  totalPages,
  rowsPerPage,
  setRowsPerPage,
  handlePageChange,
}) => {
  return (
    <div className='search-result-pagination'>
      <div className='show-rows relative w-[100px] bg-[#f1f1f1] p-2 rounded-lg cursor-pointer'>
        <select
          className='text-sm bg-transparent outline-none'
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          <option value='5'> Show 5</option>
          <option value='10'> Show 10</option>
          <option value='15'> Show 15</option>
          <option value='20'> Show 20</option>
        </select>
        <FontAwesomeIcon
          icon={faCaretDown}
          className='ml-[2px] absolute top-3 right-3'
        />
      </div>

      <div className='search-pagination'>
        <button
          className='pagination-btn prev'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              currentPage === index + 1 ? 'active-pagination-btn' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='pagination-btn next'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

CustomPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
