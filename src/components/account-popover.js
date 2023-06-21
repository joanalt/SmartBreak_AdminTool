import PropTypes from "prop-types";
import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { updateUserData } from "../redux/user";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

  const userData = useSelector((state) => state.user);
  const { name, surname } = userData;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    updateUserData(userData);
  }, [userData]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Conta</Typography>
        <Typography color="text.secondary" variant="body2">
          nome do user logado
          {`${name} ${surname}`}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem onClick={handleLogout}>Terminar sessão</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
