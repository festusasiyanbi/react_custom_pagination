import React, { useState } from 'react';
import CustomPagination from './CustomPagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = 20; // Calculate the total number of pages based on your data

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Fetch data for the new page or update the URL query parameters, etc.
  };

  return (
    <div>
        {/* Your content here */}
        {/* Pagination component */}
        <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            handlePageChange={handlePageChange}
        />
    </div>
  );
}

export default App;
