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

export const Poupanca = () => {

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
        label: 'Produtividade',
        data: randomData,
        borderColor: 'rgba(85, 139, 209, 1)',
        backgroundColor: 'rgba(85, 139, 209, 1)',
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
