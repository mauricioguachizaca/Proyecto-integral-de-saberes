import React, { useEffect, useState } from 'react';
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
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMedidor } from '../context/MedidorContext';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate

const headCells = [
  { id: 'nombredispositivo', numeric: false, disablePadding: false, label: 'Nombre de dispositivos', width: '25%' },
  { id: 'cantidad', numeric: true, disablePadding: false, label: 'Cantidad', width: '15%' },
  { id: 'potencia(W)', numeric: true, disablePadding: false, label: 'Potencia(Wh)', width: '15%' },
  { id: 'tiempodeuso', numeric: true, disablePadding: false, label: 'Tiempo de uso', width: '15%' },
  { id: 'numerodeuso', numeric: true, disablePadding: false, label: 'Número de días en uso al mes', width: '15%' },
  { id: 'Ediciones', numeric: true, disablePadding: false, label: 'Ediciones', width: '15%' }
];

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
            style={{ width: headCell.width }}
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Color de fondo ligeramente transparente
    boxShadow: 'none', // Sin sombra para que sea menos prominente
  },
  table: {
    minWidth: 750,
    border: `1px solid ${theme.palette.divider}`, // Borde menos prominente
  },
  emptyTableMessage: {
    textAlign: 'center',
    padding: theme.spacing(2)
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { mostrarmedidor, medidor, eliminarmedidor } = useMedidor();
  const [, forceUpdate] = useState();
  const navigate = useNavigate(); // Obteniendo la función navigate

  useEffect(() => {
    mostrarmedidor();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id) => {
    await eliminarmedidor(id);
    forceUpdate(Date.now()); // Forzar la actualización de la interfaz de usuario
  };

  const handleEdit = (id) => {
    // Redirige a la ruta de edición con el ID del dispositivo
    navigate(`/agregarmedidor/${id}`);
  };

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
              {medidor.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography variant="h6" className={classes.emptyTableMessage}>
                      No hay datos disponibles.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {medidor.length > 0 && (
                <>
                  {medidor
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="left" style={{ width: headCells[0].width }}>{row.nombredispositivo}</TableCell>
                        <TableCell align="right" style={{ width: headCells[1].width }}>{row.cantidad}</TableCell>
                        <TableCell align="right" style={{ width: headCells[2].width }}>{row.potencia}</TableCell>
                        <TableCell align="right" style={{ width: headCells[3].width }}>{row.tiempodeuso}</TableCell>
                        <TableCell align="right" style={{ width: headCells[4].width }}>{row.numerodeuso}</TableCell>
                        <TableCell align="right" style={{ width: headCells[5].width }}>
                          <div className={classes.buttonGroup}>
                            <Button className={classes.button} variant="contained" color="primary" onClick={() => handleEdit(row._id)}>
                              Editar
                            </Button>
                            <Button className={classes.button} variant="contained" color="secondary" onClick={() => handleDelete(row._id)}>Eliminar</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  {rowsPerPage > medidor.length && (
                    <TableRow style={{ height: 53 * (rowsPerPage - medidor.length) }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage="Filas por página"
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
