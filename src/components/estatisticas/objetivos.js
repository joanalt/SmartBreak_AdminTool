import {
    CardHeader,
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    ListItem,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState, React } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);


export const Objetivos = () => {

    const departamentos = ['Frontend', 'Backend', 'Recursos Humanos', 'Marketing', 'Financeiro', 'Design'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: '',
            },
        },
    };



    const data = [];

    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardHeader title="Número de objetivos por departamento" />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            {departamentos.map((departamento) => {
                                const randomData = Array.from({ length: 2 }, () =>
                                    Math.floor(Math.random() * 11) // 0 - 10
                                );

                                const data = {
                                    labels: ['Objetivos cumpridos', 'Objetivos por cumprir'],
                                    datasets: [
                                        {
                                            data: randomData,
                                            backgroundColor: [
                                                'rgba(7, 64, 123, 1)',
                                                'rgba(255, 160, 106, 1)',
                                            ],
                                            borderColor: [
                                                'rgba(7, 64, 123, 1)',
                                                'rgba(255, 160, 106, 1)',
                                            ],
                                            borderWidth: 1,
                                        },
                                    ],
                                };

                                return (
                                    <Grid item key={departamento} lg={2} md={6} xl={2} xs={12}>
                                        <ListItem sx={{justifyContent: 'center', marginBottom: 1}}>{departamento}</ListItem>
                                        <Doughnut options={options} data={data} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};
