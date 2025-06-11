import { Stack } from "@mui/material";
import { ProjectFeature, ProjectFeatureProps } from "./ProjectFeature";

export type ProjectFeaturesProps = {
  features: ProjectFeatureProps[];
};

export const ProjectFeatures = (props: ProjectFeaturesProps) => {
  const { features } = props;

  return (
    <Stack mt={4} direction="row" gap={1} flexWrap="wrap">
      {features.map((feature) => (
        <ProjectFeature {...feature} />
      ))}
    </Stack>
  );
};
