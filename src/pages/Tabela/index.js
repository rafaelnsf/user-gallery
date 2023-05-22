import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Upload from "../Upload";

function createData(id, nome, extensao, tamanho, dataCriacao) {
    return { id, nome, extensao, tamanho, dataCriacao };
}

const rows = [
    createData(1, 'Montanha', 'JPEG', '24 KB', '13/04/2023'),
    createData(2, 'Vale', 'PNG', '37 MB', '13/04/2023'),
    createData(3, 'Praia', 'JPG', '24 KB', '13/04/2023'),
];


const Tabela = () => {
    const [open, setOpen] = React.useState(false);

    const uploadRef = useRef();

    const handleButtonClick = () => {
        uploadRef.current?.handleImageUpload()
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showImage = (event) => {
        console.log("event", event)
    }
    const deleteImage = (event) => {
        console.log("event", event)
    }

    return (
        <div>
            <Typography variant="h6" component="div" sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                color: '#737380'
            }}>
                Tabela
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
                m: 3,
            }}
            >
                <Button variant="contained" onClick={() => handleClickOpen()}>
                    Upload de Imagem
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, border: '1px solid #A8A8B3' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Extensão</TableCell>
                            <TableCell align="center">Tamanho</TableCell>
                            <TableCell align="center">Data de Criação</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.nome}</TableCell>
                                <TableCell align="center">{row.extensao}</TableCell>
                                <TableCell align="center">{row.tamanho}</TableCell>
                                <TableCell align="center">{row.dataCriacao}</TableCell>
                                <TableCell align="center"><Button variant="contained" size="small" onClick={() => showImage(row)}><RemoveRedEyeOutlinedIcon /></Button><Button variant="contained" size="small" color="error" onClick={() => deleteImage(row)}><DeleteOutlinedIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* ######################### Model choose image for upload: ####################### */}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Upload de Imagem"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Upload ref={uploadRef} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={() => handleButtonClick()}>Cadastrar</Button>
                    <Button variant="contained" sx={{ bgcolor: '#737380' }} onClick={handleClose}>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Tabela;