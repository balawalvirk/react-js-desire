import { Route, Routes } from "react-router-dom";

const AuthLayout = ({ routes }) => {
    return (
        <>
            <Routes>
                {routes?.map((item, key) => {
                    let Component = item?.component;
                    return <Route key={key} path={item?.path} element={<Component />} />;
                })}
            </Routes>
        </>
    );
};

export default AuthLayout;
