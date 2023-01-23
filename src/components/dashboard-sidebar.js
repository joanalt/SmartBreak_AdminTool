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
    href: "/brevemente_disponivel",
    icon: <Diagram fontSize="small" />,
    title: "Estatísticas",
  },
  {
    href: "/brevemente_disponivel",
    icon: <TaskSquare fontSize="small" />,
    title: "Objetivos",
  },
  {
    href: "/equipas",
    icon: <People fontSize="small" />,
    title: "Equipas",
  },
  {
    href: "/funcionarios",
    icon: <Personalcard fontSize="small" />,
    title: "Funcionários",
  },
  {
    href: "/brevemente_disponivel",
    icon: <Magicpen fontSize="small" />,
    title: "Estruturação",
  },
  {
    href: "/editar_perfil",
    icon: <Edit fontSize="small" />,
    title: "Editar perfil",
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
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                mt: 2,
                mx: "auto",
                width: "160px",
                "& img": {
                  width: "100%",
                },
              }}
            >
              <img alt="Smart Break" src="../../public/static/images/navlogo.png" />
            </Box>
          </Box>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
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
            backgroundColor: "#0051BA",
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
          backgroundColor: "#0051BA",
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
