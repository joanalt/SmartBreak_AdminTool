import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const Budget = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textPrimary" variant="h4">
            Ganhos
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              height: 56,
              width: 56,
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            mr: 1,
          }}
        >
          2,092
        </Typography>
        <Typography color="textSecondary">€</Typography>
      </Box>
    </CardContent>
  </Card>
);
