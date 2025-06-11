import { Box, Typography } from "@mui/material";

export type ProjectTypographyProps = {
  title: string;
  description: string;
};

export const ProjectTypography = (props: ProjectTypographyProps) => {
  const { title, description } = props;

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography color="textSecondary">{description}</Typography>
    </Box>
  );
};
