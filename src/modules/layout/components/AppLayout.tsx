import { Box } from "@mui/material";
import { NavBar } from "./Navbar/NavBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box
      pt="72px" // pushes children down height of navbar (72px)
    >
      <NavBar />
      {children}
    </Box>
  );
};
