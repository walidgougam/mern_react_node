import React, {Component, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Navbar} from './Navbar';
import {GlobalContext} from '../context/GlobalContext';

export const ExerciceList = () => {
  const {exercice} = useContext(GlobalContext);
  return (
    <div>
      {console.log(exercice, 'exercice')}
      <Navbar />
      <h1>Logged exercices</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>username</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">duration</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                titre
              </TableCell>
              <TableCell align="right">hello1</TableCell>
              <TableCell align="right">hello2</TableCell>
              <TableCell align="right">hello3</TableCell>
              <TableCell align="right">
                <button>edit</button>||<button>delete</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
