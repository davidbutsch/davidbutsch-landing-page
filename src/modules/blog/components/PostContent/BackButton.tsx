import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    if (
      window.history.length > 1 &&
      document.referrer.includes(window.location.origin)
    ) {
      navigate(-1); // Go back to the previous page in history
    } else {
      navigate("/blog", { replace: true }); // Navigate to a fallback route if no previous page
    }
  };

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
