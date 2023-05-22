import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TocIcon from '@mui/icons-material/Toc';
import BurstModeIcon from '@mui/icons-material/BurstMode';

import Carrossel from "../Carrossel";
import Tabela from "../Tabela";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = React.useState('carrossel');

    const handleChange = (event, newSelectedPage) => {
        setSelectedPage(newSelectedPage);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#A8A8B3" }}>
                            GALLERY
                        </Typography>
                        <Button onClick={() => [signout(), navigate("/")]} sx={{ color: "#737380", bgcolor: "#A8A8B3" }} variant="contained">Encerrar sessão</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
                m: 3,
            }}
            >
                <ToggleButtonGroup
                    color="primary"
                    value={selectedPage}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="carrossel"><BurstModeIcon /></ToggleButton>
                    <ToggleButton value="tabela"><TocIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Box>
            {selectedPage === "carrossel" ? (<Carrossel />) : (<Tabela />)}
        </div>
    );
};

export default Home;