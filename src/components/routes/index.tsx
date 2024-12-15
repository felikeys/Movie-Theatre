import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../pages/layout";
import { ROUTES } from "@/lib/constants";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<RootLayout />}>
        <Route path={ROUTES.home()} lazy={async () => {
            return {
                Component: (await import("@/components/pages/movies")).default,
            }
            
        }}/>
        <Route path="movie/:id" lazy={async () => {
            return {
                Component: (await import("@/components/pages/movies/detail")).default,
            }
            
        }}/>
        </Route>
        </>
    )
);