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
import { Link, useNavigate } from 'react-router-dom';

const headCells = [
  { id: 'nombredispositivo', numeric: false, disablePadding: false, label: 'Nombre de Dispositivo', width: '20%', textAlign: 'center' },
  { id: 'cantidad', numeric: true, disablePadding: false, label: 'Cantidad', width: '15%', textAlign: 'center' },
  { id: 'potencia(W)', numeric: true, disablePadding: false, label: 'Potencia (Wh)', width: '15%', textAlign: 'center' },
  { id: 'tiempodeuso', numeric: true, disablePadding: false, label: 'Tiempo de Uso', width: '15%', textAlign: 'center' },
  { id: 'numerodeuso', numeric: true, disablePadding: false, label: 'Días de Uso al Mes', width: '15%', textAlign: 'center' },
  { id: 'acciones', numeric: true, disablePadding: false, label: 'Acciones', width: '20%', textAlign: 'center' }
];

function EnhancedTableHead(props) {
  const { classes } = props;

  return (
    <TableHead>
      <TableRow style={{ backgroundColor: '#a2e3f9' }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.textAlign ? headCell.textAlign : 'center'} // Añadimos alineación personalizada si está definida, de lo contrario, usamos 'center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            style={{ width: headCell.width, fontWeight: 'bold', color: '#000' }}
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
    backgroundColor: '#fafafa',
    borderRadius: 10,
  },
  table: {
    minWidth: 750,
    border: `1px solid ${theme.palette.divider}`,
  },
  emptyTableMessage: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: theme.spacing(1, 0),
  },
  editButton: {
    backgroundColor: '#a2e3f9',
    color: '#000',
    '&:hover': {
      backgroundColor: '#7acde8',
    },
  },
  deleteButton: {
    backgroundColor: '#FF0C0C',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  pagination: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
    '& .MuiTypography-body2': {
      color: '#666',
    },
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { mostrarmedidor, medidor, eliminarmedidor } = useMedidor();
  const [, forceUpdate] = useState();
  const navigate = useNavigate();

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
    forceUpdate(Date.now());
  };

  const handleEdit = (id) => {
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
                  <TableCell colSpan={6} align="center">
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
                        <TableCell align="center" style={{ width: headCells[0].width }}>{row.nombredispositivo}</TableCell>
                        <TableCell align="center" style={{ width: headCells[1].width }}>{row.cantidad}</TableCell>
                        <TableCell align="center" style={{ width: headCells[2].width }}>{row.potencia}</TableCell>
                        <TableCell align="center" style={{ width: headCells[3].width }}>{row.tiempodeuso}</TableCell>
                        <TableCell align="center" style={{ width: headCells[4].width }}>{row.numerodeuso}</TableCell>
                        <TableCell align="center" style={{ width: headCells[5].width }}>
                          <div className={classes.buttonGroup}>
                            <Button className={classes.editButton} variant="contained" onClick={() => handleEdit(row._id)}>
                              Editar
                            </Button>
                            <Button className={classes.deleteButton} variant="contained" onClick={() => handleDelete(row._id)}>Eliminar</Button>
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
          className={classes.pagination}
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
