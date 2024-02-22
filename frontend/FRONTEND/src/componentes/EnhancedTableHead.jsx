import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import { useMedidor } from '../context/MedidorContext'; 

function createData(dispositivos, cantidad, potencia, tiempouso, dias, Ediciones) {
  return { dispositivos, cantidad, potencia, tiempouso, dias, Ediciones };
}

const rows = [
  createData('Dispositivo 1', 305, 3.7, 67, 4.3, 'Edición 1'),
  createData('Dispositivo 2', 452, 25.0, 51, 4.9, 'Edición 2'),
  createData('Dispositivo 3', 262, 16.0, 24, 6.0, 'Edición 3'),
  createData('Dispositivo 4', 159, 6.0, 24, 4.0, 'Edición 4'),
  createData('Dispositivo 5', 356, 16.0, 49, 3.9, 'Edición 5'),
  createData('Dispositivo 6', 408, 3.2, 87, 6.5, 'Edición 6'),
  createData('Dispositivo 7', 237, 9.0, 37, 4.3, 'Edición 7'),
  createData('Dispositivo 8', 375, 0.0, 94, 0.0, 'Edición 8'),
  createData('Dispositivo 9', 518, 26.0, 65, 7.0, 'Edición 9'),
  createData('Dispositivo 10', 392, 0.2, 98, 0.0, 'Edición 10'),
  createData('Dispositivo 11', 318, 0, 81, 2.0, 'Edición 11'),
  createData('Dispositivo 12', 360, 19.0, 9, 37.0, 'Edición 12'),
  createData('Dispositivo 13', 437, 18.0, 63, 4.0, 'Edición 13'),
];

const headCells = [
  { id: 'dispositivos', numeric: false, disablePadding: false, label: 'Nombre de dispositivos' },
  { id: 'cantidad', numeric: true, disablePadding: false, label: 'Cantidad' },
  { id: 'potencia', numeric: true, disablePadding: false, label: 'Potencia' },
  { id: 'tiempouso', numeric: true, disablePadding: false, label: 'Tiempo de uso' },
  { id: 'dias', numeric: true, disablePadding: false, label: 'Número de días en uso al mes' },
  { id: 'Ediciones', numeric: true, disablePadding: false, label: 'Ediciones' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  

  return (
    
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const { mostrarmedidor, medidor } = useMedidor()

  useEffect(() => {
    mostrarmedidor()
  },[])

  if(medidor.length === 0) return (<h1>no hay dispositivos</h1>)
  return (
<>
    <div>
      {
        medidor.map(medidor => (
          <div key={medidor._id}>
            <p>{medidor.nombredispositivo}</p>
            <p>{medidor.cantidad}</p>
            <p>{medidor.potencia}</p>
            <p>{medidor.tiempouso}</p>
            <p>{medidor.numerodeuso}</p>

          </div>
        ))
      }
    </div>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              onRequestSort={handleRequestSort}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.dispositivos}</TableCell>
                    <TableCell align="right">{row.cantidad}</TableCell>
                    <TableCell align="right">{row.potencia}</TableCell>
                    <TableCell align="right">{row.tiempouso}</TableCell>
                    <TableCell align="right">{row.dias}</TableCell>
                    <TableCell align="right">{row.Ediciones}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
    </>
  );
}
