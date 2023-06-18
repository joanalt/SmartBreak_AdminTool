import {
    CardHeader,
    Box,
    Card,
    CardContent,
    Divider,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, React } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const TempoMedio = ({ tempoSelecionado }) => {

    const intervalos = [
        { tempo: 'Hoje', values: [8, 11, 13, 15, 17, 19, 21], label: 'Poupança ao longo de um dia em horas' },
        { tempo: 'Esta semana', values: [1, 2, 3, 4, 5, 6, 7], label: 'Poupança ao longo de uma semana em dias' },
        { tempo: 'Este mês', values: [4, 8, 12, 16, 20, 24, 28], label: 'Poupança ao longo de um mês em dias' }
    ];


    const selectedOption = intervalos.find(option => option.tempo === tempoSelecionado);

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

    const conversionFactor = 60 / 1000; // Assuming 60 minutes represent the range 0-1000  

    if (selectedOption) {
        const randomDataInMinutes = Array.from({ length: selectedOption.values.length }, () => {
            const randomNumber = Math.floor(Math.random() * 1001); // Generate random number
            return Math.floor(randomNumber * conversionFactor);
        });

        const data = {
            labels: selectedOption.values,
            datasets: [
                {
                    label: selectedOption.label,
                    data: randomDataInMinutes,
                    borderColor: 'rgba(7, 64, 123, 1)',
                    backgroundColor: 'rgba(7, 64, 123, 1)',
                },
            ],
        };

        return (
            <>
                <Box sx={{ mt: 3 }}>
                    <Card>
                        <CardHeader title="Tempo médio de pausas" />
                        <Divider />
                        <CardContent>
                            <Line options={options} data={data} />
                        </CardContent>
                    </Card>
                </Box>
            </>
        );
    };

};
