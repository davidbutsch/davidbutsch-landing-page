import { queryClient } from "@/libs";
import { ThemeProvider } from "@/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <ThemeProvider>
          {/* Reusable Components */}
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
