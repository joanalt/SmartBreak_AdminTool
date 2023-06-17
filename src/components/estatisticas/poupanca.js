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

export const Poupanca = ({ tempoSelecionado }) => {

  const intervalos = [
    { tempo: 'Hoje', values: [9, 11, 13, 15, 17, 19, 21], label: 'Poupança ao longo de um dia em horas' },
    { tempo: 'Esta semana', values: [2, 3, 4, 5, 6, 7], label: 'Poupança ao longo de uma semana em dias' },
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
  

  if (selectedOption) {
    const randomData = Array.from({ length: selectedOption.values.length }, () =>
      Math.floor(Math.random() * 1001) // 0 - 1000
    );

    const data = {
      labels: selectedOption.values,
      datasets: [
        {
          label: selectedOption.label,
          data: randomData,
          borderColor: 'rgba(7, 64, 123, 1)',
          backgroundColor: 'rgba(7, 64, 123, 1)',
        },
      ],
    };


    return (
      <>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardHeader title="Poupança em euros de energia" />
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