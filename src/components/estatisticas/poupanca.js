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

export const Poupanca = ({ tempos, tempoSelecionado }) => {

  console.log({tempos})
  console.log({tempoSelecionado})

  const oioi = [
    { label: 'Hoje', values: [10, 12, 13, 15] },
    { label: '1 semana', values: [2, 3, 4, 5, 6, 7] },
    { label: '1 mês', values: [1, 2, 3, 4] }
  ];
  

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

  const randomData = Array.from({ length: labels.length }, () =>
    Math.floor(Math.random() * 1001) // 0 - 1000
  ); 

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Poupança',
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
