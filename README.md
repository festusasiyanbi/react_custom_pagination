# Custom Pagination Component**

The CustomPagination component is a React component designed to provide a user-friendly pagination feature for lists or search results. It allows users to navigate through multiple pages of content and adjust the number of items displayed per page.

## Usage

To use the `CustomPagination` component in your project, you need to provide several props:

1. currentPage (required): The current active page number.
2. `totalPages` (required): The total number of pages in the paginated content.
3. `rowsPerPage` (required): The number of items displayed per page.
4. `setRowsPerPage` (required): A function to update the number of items displayed per page.
5. `handlePageChange` (required): A function to handle page change events.

**Installation**

No separate installation is required. Simply integrate the `CustomPagination` component into your React project.

**Props**

- `currentPage`: The current active page number.
- `totalPages`: The total number of pages in the paginated content.
- `rowsPerPage`: The number of items displayed per page.
- `setRowsPerPage`: A function to update the number of items displayed per page.
- `handlePageChange`: A function to handle page change events.

**Features**

1. **Rows Per Page Dropdown**: The component includes a dropdown that allows users to select the number of items displayed per page. Users can choose from predefined options like 5, 10, 15, or 20 items.

2. **Pagination Buttons**: Pagination buttons are displayed, allowing users to navigate between pages. The buttons include the previous (`<`) and next (`>`) buttons, as well as page number buttons. The active page is visually highlighted.

3. **Page Change Handling**: The `handlePageChange` function is called when a user clicks on a pagination button. This function should be provided by the parent component to handle page change events.

### Refer to the example usage file react_custom_pagination folder

**Conclusion**

The `CustomPagination` component simplifies the process of adding a user-friendly pagination feature to your React applications. It offers options to customize the number of items per page and provides intuitive navigation controls for your paginated content.