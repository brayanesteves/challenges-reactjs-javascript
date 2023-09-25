import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    return (
        <>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </>
    );
};