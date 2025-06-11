import { Chip, Icon } from "@mui/material";

export type ProjectFeatureProps = {
  icon: string;
  label: string;
};

export const ProjectFeature = (props: ProjectFeatureProps) => {
  const { icon, label } = props;

  return (
    <Chip
      icon={
        <Icon className="material-symbols-outlined" fontSize="small">
          {icon}
        </Icon>
      }
      label={label}
      sx={{
        width: "fit-content",
        bgcolor: "transparent",
      }}
    />
  );
};
