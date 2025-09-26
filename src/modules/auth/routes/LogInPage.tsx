import { storeUser } from "@/modules/auth";
import { signIn } from "@aws-amplify/auth";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

// TODO: refactor form logic into seperate component
export const LogInPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const signInUserMutation = useMutation({
    mutationFn: signIn,
    onSuccess: async () => {
      // After user is signed in, set user state
      storeUser();

      // Navigate to page root with reload
      window.location.href = "/";
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  /**
   * Generic on change handler for all input elements.
   *
   * Extracts component name to update appropriate state.
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    signInUserMutation.mutate({
      username: inputs.email,
      password: inputs.password,
    });
  };

  return (
    <Container>
      <form onSubmit={onSubmit} noValidate>
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="h4" mb={4} width={{ xs: "100%", sm: "400px" }}>
            Log In
          </Typography>
          <Stack
            width={{ xs: "100%", sm: "400px" }}
            gap={2}
            justifyContent="center"
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                value={inputs.email}
                onChange={onChange}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                value={inputs.password}
                onChange={onChange}
                id="password"
                type="password"
                name="password"
                placeholder="••••••"
                autoComplete="password"
                required
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={onSubmit}
              loading={signInUserMutation.isPending}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};
