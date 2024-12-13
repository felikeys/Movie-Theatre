import { Outlet } from "react-router-dom";
import Header from "./header";

export const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
