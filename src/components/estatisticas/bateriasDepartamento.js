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

export const BateriasDepartamento = () => {

    const departamentos = ['Frontend', 'Backend', 'Recursos Humanos', 'Marketing', 'Financeiro', 'Design'];

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [], 
    };

    const cores = ['rgba(7, 64, 123, 1)', 'rgba(85, 139, 209, 1)', 'rgba(254, 119, 56, 1)', 'rgba(255, 160, 106, 1)', 'rgba(254, 119, 56, 1)', 'rgba(255, 160, 106, 1)'];
    

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
    }

    departamentos.forEach((departamento, index) => {
        const randomData = Array.from({ length: data.labels.length }, () =>
            Math.floor(Math.random() * 16) // 0 - 15
        );

        data.datasets.push({
            label: departamento,
            data: randomData,
            borderColor: cores[index],
        });
    });
    

    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardHeader title="Número de baterias enchidas por departamento" />
                    <Divider />
                    <CardContent>
                        <Bar options={options} data={data} />
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};
