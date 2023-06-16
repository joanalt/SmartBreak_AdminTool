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

export const TempoMedio = () => {

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

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    const conversionFactor = 60 / 1000; // Assuming 60 minutes represent the range 0-1000

    const randomDataInMinutes = Array.from({ length: labels.length }, () => {
        const randomNumber = Math.floor(Math.random() * 1001); // Generate random number
        return Math.floor(randomNumber * conversionFactor);
    });

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Tempo em minutos',
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
