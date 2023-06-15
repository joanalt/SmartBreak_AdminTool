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

export const GrauProdutividade = () => {

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
        label: 'Produtividade',
        data: [52, 29, 62, 59, 88, 59],
        borderColor: 'rgba(85, 139, 209, 1)',
        backgroundColor: 'rgba(85, 139, 209, 1)',
      },
    ],

    // legend: ["Rainy Days"], // optional
  };



  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardHeader title="Grau de produtividade geral" />
          <Divider />
          <CardContent>
            <Line options={options} data={data} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
