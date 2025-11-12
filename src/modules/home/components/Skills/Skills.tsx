import { ASSETS_URL } from "@/common";
import { Container, Stack, Typography } from "@mui/material";
import { Topic, TopicProps } from "./Topic";

const topics: TopicProps[] = [
  {
    title: "DevOps",
    cards: [
      {
        title: "Cloudflare",
        homeUrl: "https://www.cloudflare.com/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/Cloudflare.svg`,
      },
      {
        title: "NGINX",
        homeUrl: "https://nginx.org/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/NGINX.svg`,
      },
      {
        title: "Amazon ECS",
        homeUrl: "https://aws.amazon.com/ecs/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/Elastic-Container-Service.svg`,
      },
      {
        title: "AWS Fargate",
        homeUrl: "https://aws.amazon.com/fargate/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/Fargate.svg`,
      },
      {
        title: "Amazon S3",
        homeUrl: "https://aws.amazon.com/s3/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/Simple-Storage-Service.svg`,
      },
      {
        title: "Amazon Cognito",
        homeUrl: "https://aws.amazon.com/pm/cognito/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/Cognito.svg`,
      },
      {
        title: "Docker",
        homeUrl: "https://www.docker.com/",
        logoUrl: `${ASSETS_URL}/Skills/DevOps/Docker.svg`,
      },
    ],
  },
  {
    title: "Frontend",
    cards: [
      {
        title: "React",
        homeUrl: "https://react.dev/",
        logoUrl: `${ASSETS_URL}/Skills/Frontend/React.svg`,
      },
      {
        title: "Vite",
        homeUrl: "https://vite.dev/",
        logoUrl: `${ASSETS_URL}/Skills/Frontend/Vite.svg`,
      },
      {
        title: "Material UI",
        homeUrl: "https://mui.com/",
        logoUrl: `${ASSETS_URL}/Skills/Frontend/Material-UI.svg`,
      },
      {
        title: "TanStack Query",
        homeUrl: "https://tanstack.com/query/latest",
        logoUrl: `${ASSETS_URL}/Skills/Frontend/TanStack-Query.svg`,
      },
      {
        title: "Zustand",
        homeUrl: "https://zustand.docs.pmnd.rs/",
        logoUrl: `${ASSETS_URL}/Skills/Frontend/Zustand.svg`,
      },
      {
        title: "Zod",
        homeUrl: "https://zod.dev/",
        logoUrl: `${ASSETS_URL}/Skills/Frontend/Zod.svg`,
      },
    ],
  },
  {
    title: "Backend",
    cards: [
      {
        title: "Node.js",
        homeUrl: "https://nodejs.org/",
        logoUrl: `${ASSETS_URL}/Skills/Backend/Nodejs.svg`,
      },
      {
        title: "Express",
        homeUrl: "https://expressjs.com/",
        logoUrl: `${ASSETS_URL}/Skills/Backend/Express.svg`,
      },
      {
        title: "PostgreSQL",
        homeUrl: "https://www.postgresql.org/",
        logoUrl: `${ASSETS_URL}/Skills/Backend/PostgreSQL.svg`,
      },
      {
        title: "MongoDB",
        homeUrl: "https://www.mongodb.com/",
        logoUrl: `${ASSETS_URL}/Skills/Backend/MongoDB.svg`,
      },
      {
        title: "Redis",
        homeUrl: "https://redis.io/",
        logoUrl: `${ASSETS_URL}/Skills/Backend/Redis.svg`,
      },
    ],
  },
  {
    title: "Languages",
    cards: [
      {
        title: "Typescript",
        homeUrl: "https://www.typescriptlang.org/",
        logoUrl: `${ASSETS_URL}/Skills/Languages/Typescript.svg`,
      },
      {
        title: "Python",
        homeUrl: "https://www.python.org/",
        logoUrl: `${ASSETS_URL}/Skills/Languages/Python.svg`,
      },
      {
        title: "C++",
        homeUrl: "https://isocpp.org/",
        logoUrl: `${ASSETS_URL}/Skills/Languages/C%2B%2B.svg`,
      },
    ],
  },
  {
    title: "Misc.",
    cards: [
      {
        title: "Git",
        homeUrl: "https://git-scm.com/",
        logoUrl: `${ASSETS_URL}/Skills/Misc/Git.svg`,
      },
      {
        title: "STM32",
        homeUrl:
          "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
        logoUrl: `${ASSETS_URL}/Skills/Misc/STM32.svg`,
      },
      {
        title: "Ubuntu",
        homeUrl: "https://ubuntu.com/",
        logoUrl: `${ASSETS_URL}/Skills/Misc/Ubuntu.svg`,
      },
      {
        title: "Stripe",
        homeUrl: "https://stripe.com/",
        logoUrl: `${ASSETS_URL}/Skills/Misc/Stripe.svg`,
      },
      {
        title: "Adobe Illustrator",
        homeUrl: "https://www.adobe.com/products/illustrator.html",
        logoUrl: `${ASSETS_URL}/Skills/Misc/Adobe-Illustrator.svg`,
      },
      {
        title: "Affinity Designer",
        homeUrl: "https://affinity.serif.com/en-us/designer/",
        logoUrl: `${ASSETS_URL}/Skills/Misc/Affinity-Designer.svg`,
      },
    ],
  },
];

export const Skills = () => {
  return (
    <Container>
      <Typography variant="h4" mb={6}>
        Skills
      </Typography>
      <Stack gap={6}>
        {topics.map((topic) => (
          <Topic key={topic.title} title={topic.title} cards={topic.cards} />
        ))}
      </Stack>
    </Container>
  );
};
