import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { DataGrid, GridColDef, GridSortItem, GridSortDirection } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList'; // Import the DepartmentList component
import { Post } from './models/Post'; // Import the Post interface

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // State to store posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Post[] = await response.json(); // Parse response as Post[]
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Columns configuration for DataGrid
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  // Initial state for DataGrid
  const initialState = {
    selectedRows: [], // Array<number> for selected row indices
    pageSize: 10, // Number of rows per page
    rowsPerPageOptions: [10, 20, 50], // Options for rows per page dropdown
    sortModel: [
      { field: 'title', sort: 'asc' as GridSortDirection }, // Initial sorting configuration
    ] as GridSortItem[], // Correct type assertion for sortModel
  };

  // Example JSON data for additional information component
  const additionalInfoData = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        List of Posts
      </Typography>
      <DataGrid
        rows={posts}
        columns={columns}
        {...initialState} // Spread the partial initial state
        checkboxSelection // Enable checkbox selection for rows
      />

      {/* Component to render below the DataGrid */}
      <div style={{ marginTop: 20 }}>
        <Typography variant="h6" gutterBottom>
          Additional Information
        </Typography>
        <ul>
          {additionalInfoData.map((item) => (
            <li key={item.id}>
              <Typography variant="body1">
                {item.name}: {item.description}
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      {/* DepartmentList Component */}
      <DepartmentList />
    </div>
  );
};

export default SecondPage;
