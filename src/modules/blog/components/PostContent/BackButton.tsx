import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => navigate("/blog");

  return (
    <Button
      onClick={onClick}
      color="inherit"
      startIcon={
        <Icon className="material-symbols-outlined">chevron_left</Icon>
      }
      sx={{
        mb: { xs: 6, sm: 12 },
      }}
    >
      Back
    </Button>
  );
};
