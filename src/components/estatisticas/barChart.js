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
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const BarChart = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Qualquer texto',
            },
        },
    }

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: 'Número total de baterias',
                data: [5, 10, 8, 6, 9, 14],
                borderColor: 'rgba(7, 64, 123, 1)',
                backgroundColor: 'rgba(7, 64, 123, 1)',
            }
        ],
    };



    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardHeader title="Número de baterias enchidas" />
                    <Divider />
                    <CardContent>
                        <Bar options={options} data={data} />
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};
