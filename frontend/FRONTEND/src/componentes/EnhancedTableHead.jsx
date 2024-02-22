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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'; // Importamos Typography para mostrar el mensaje cuando no hay datos
import { useMedidor } from '../context/MedidorContext'; 

// Definimos las cabeceras de la tabla
const headCells = [
  { id: 'nombredispositivo', numeric: false, disablePadding: false, label: 'Nombre de dispositivos' },
  { id: 'cantidad', numeric: true, disablePadding: false, label: 'Cantidad' },
  { id: 'potencia', numeric: true, disablePadding: false, label: 'Potencia' },
  { id: 'tiempodeuso', numeric: true, disablePadding: false, label: 'Tiempo de uso' },
  { id: 'numerodeuso', numeric: true, disablePadding: false, label: 'Número de días en uso al mes' },
  { id: 'Ediciones', numeric: true, disablePadding: false, label: 'Ediciones' }
];

// Componente para las cabeceras de la tabla
function EnhancedTableHead(props) {
  const { classes } = props;

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
  classes: PropTypes.object.isRequired
};

// Estilos para la tabla
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
  emptyTableMessage: {
    textAlign: 'center',
    padding: theme.spacing(2)
  }
}));

// Componente principal de la tabla
export default function EnhancedTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { mostrarmedidor, medidor } = useMedidor()

  useEffect(() => {
    mostrarmedidor()
  },[])

  // Funciones para manejar la paginación de la tabla
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Mostrar mensaje si no hay datos
  if (medidor.length === 0) {
    return (
      <Typography variant="h6" className={classes.emptyTableMessage}>
        No hay datos disponibles.
      </Typography>
    );
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, medidor.length - page * rowsPerPage);

  return (
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
            />
            <TableBody>
              {medidor
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.nombredispositivo}</TableCell>
                    <TableCell align="right">{row.cantidad}</TableCell>
                    <TableCell align="right">{row.potencia}</TableCell>
                    <TableCell align="right">{row.tiempodeuso}</TableCell>
                    <TableCell align="right">{row.numerodeuso}</TableCell>
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
          count={medidor.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
