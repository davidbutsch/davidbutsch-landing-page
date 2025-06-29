import { Grid } from "@mui/material";
import { ProjectFeatureProps, ProjectFeatures } from "./ProjectFeatures";
import { ProjectImage } from "./ProjectImage";
import { ProjectLink } from "./ProjectLink";
import { ProjectLogo } from "./ProjectLogo";
import { ProjectTypography } from "./ProjectTypography";

export type ProjectProps = {
  title: string;
  description: string;
  homeUrl: string;
  logoUrl: string;
  imageUrl: string;
  features: ProjectFeatureProps[];
};

export const Project = (props: ProjectProps) => {
  const { title, description, homeUrl, logoUrl, imageUrl, features } = props;

  return (
    <Grid container direction="row" alignItems="center" spacing={8}>
      <Grid size={{ xs: 12, md: 5 }}>
        <ProjectLogo src={logoUrl} />
        <ProjectTypography title={title} description={description} />
        <ProjectFeatures features={features} />
        <ProjectLink url={homeUrl} />
      </Grid>
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          position: "relative",

          maskImage:
            "linear-gradient(to top, transparent 0%, #FFFFFF, #FFFFFF, transparent)",
        }}
      >
        <ProjectImage src={imageUrl} />
      </Grid>
    </Grid>
  );
};
