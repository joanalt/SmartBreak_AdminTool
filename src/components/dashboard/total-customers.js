import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";

export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textPrimary" variant="h4">
            Pausas
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "success.main",
              height: 56,
              width: 56,
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 2,
        }}
      >
        <Typography
          sx={{
            mr: 1,
          }}
        >
          180
        </Typography>
        <Typography color="textSecondary">horas</Typography>
      </Box>
    </CardContent>
  </Card>
);
