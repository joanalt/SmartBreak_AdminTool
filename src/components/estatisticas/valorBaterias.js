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

export const ValorBaterias = ({ tempoSelecionado }) => {

    const intervalos = [
        { tempo: 'Hoje', values: [9, 11, 13, 15, 17, 19, 21], label: 'Poupança ao longo de um dia em horas' },
        { tempo: 'Esta semana', values: [2, 3, 4, 5, 6, 7], label: 'Poupança ao longo de uma semana em dias' },
        { tempo: 'Este mês', values: [4, 8, 12, 16, 20, 24, 28], label: 'Poupança ao longo de um mês em dias' }
    ];

    const selectedOption = intervalos.find(option => option.tempo === tempoSelecionado);

    const departamentos = ['Frontend', 'Backend', 'Recursos Humanos', 'Marketing', 'Financeiro', 'Design'];

    const data = {
        labels: '',
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

    if (selectedOption) {
        departamentos.forEach((departamento, index) => {
            const randomData = Array.from({ length: selectedOption.values.length }, () =>
                Math.floor(Math.random() * 1001) // 0 - 1000
            );

            const dataset = {
                label: departamento,
                data: randomData,
                borderColor: cores[index],
                backgroundColor: cores[index],
            };

            data.datasets.push(dataset);
        });

        data.labels = selectedOption.values;

        return (
            <>
                <Box sx={{ mt: 3 }}>
                    <Card>
                        <CardHeader title="Valor da bateria de cada departamento" />
                        <Divider />
                        <CardContent>
                            <Bar options={options} data={data} />
                        </CardContent>
                    </Card>
                </Box>
            </>
        );
    };
};
