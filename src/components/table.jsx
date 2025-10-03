import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../index.css';


// Table component to display cricket data in a tabular format containing columns for Team, Matches, Wins, Losses, and Points. using Material-UI;
//making it responsive with a max height and rounded corners.
function TableComponent(props) {
  return (
    <TableContainer  >
      <Table  >
        <TableHead >
          <TableRow className='table-header-row' >
            <TableCell className='table-header-cell' align="left">Team</TableCell>
            <TableCell className='table-header-cell' align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.teams.map((team) => {
            return (
              <TableRow hover key={team.Team}>
                <TableCell className='tablecell' align="left" sx={{ color: '#3A1616' }}>{team.Team}</TableCell>
                <TableCell className='tablecell' align="center" sx={{ color: '#4D7399' }}>{team.points}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;

