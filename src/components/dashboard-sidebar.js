import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { Category, Diagram, TaskSquare, People, Personalcard, Magicpen, Edit } from "iconsax-react";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/painel",
    icon: <Category fontSize="small" />,
    title: "Painel",
  },
  {
    href: "/estatisticas",
    icon: <Diagram fontSize="small" />,
    title: "Estatísticas",
  },
  {
    href: "/objetivos",
    icon: <TaskSquare fontSize="small" />,
    title: "Objetivos",
  },
  {
    href: "/equipas",
    icon: <People fontSize="small" />,
    title: "Departamentos",
  },
  {
    href: "/funcionarios",
    icon: <Personalcard fontSize="small" />,
    title: "Funcionários",
  },
  {
    href: "/estruturacao",
    icon: <Magicpen fontSize="small" />,
    title: "Estruturação",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
                mb: 3,
                "& img": {
                  width: "100%",
                },
              }}
            >
              <img alt="Smart Break" src="static/images/navlogo.png" style={{ width: "60px" }} />
            </Box>
          </Box>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              style={{ marginTop: "20px" }}
            />
          ))}
        </Box>
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        ></Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#07407B",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#07407B",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
