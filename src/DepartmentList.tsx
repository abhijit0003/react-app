import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore, Check, ArrowRight } from '@mui/icons-material';


const departmentData = [
  {
    id: 1,
    name: 'Department 1',
    subDepartments: [
      { id: 11, name: 'Sub Department 1.1' },
      { id: 12, name: 'Sub Department 1.2' },
    ],
  },
  {
    id: 2,
    name: 'Department 2',
    subDepartments: [
      { id: 21, name: 'Sub Department 2.1' },
      { id: 22, name: 'Sub Department 2.2' },
    ],
  },
];

const DepartmentList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]); 

  
  const handleToggleCollapse = (index: number) => {
    setSelectedItems((prevSelected) => {
      const isSelected = prevSelected.includes(index);
      return isSelected ? prevSelected.filter((item) => item !== index) : [...prevSelected, index];
    });
  };

  
  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) => {
      const isSelected = prevSelected.includes(id);
      return isSelected ? prevSelected.filter((item) => item !== id) : [...prevSelected, id];
    });
  };

  
  // const handleSelectAllSubDepartments = (departmentId: number, subDepartments: any[]) => {
  //   const subDepartmentIds = subDepartments.map((subDept) => subDept.id);
  //   setSelectedItems((prevSelected) => {
  //     const isSelected = subDepartmentIds.every((id) => prevSelected.includes(id));
  //     if (isSelected) {
        
  //       return prevSelected.filter((item) => !subDepartmentIds.includes(item));
  //     } else {
        
  //       return [...prevSelected, ...subDepartmentIds, departmentId];
  //     }
  //   });
  // };

  return (
    <List dense>
      {departmentData.map((department, index) => (
        <React.Fragment key={department.id}>
          {/* Department Item */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToggleCollapse(index)}>
              <ListItemIcon>
                {selectedItems.includes(department.id) ? <Check /> : <ArrowRight />}
              </ListItemIcon>
              <ListItemText primary={department.name} />
              {selectedItems.includes(index) ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          
          <Collapse in={selectedItems.includes(index)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDept) => (
                <ListItem key={subDept.id} disablePadding>
                  <ListItemButton onClick={() => handleSelectItem(subDept.id)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={selectedItems.includes(subDept.id)}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={subDept.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
