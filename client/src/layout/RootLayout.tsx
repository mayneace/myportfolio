// layout/RootLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import BgLayout from "../components/BgLayout";

const RootLayout: React.FC = () => {
  return (
    <BgLayout>
      <Navbar />
      <Outlet />  {/* renders whichever route matches */}
      <Footer />
    </BgLayout>
  );
};

export default RootLayout;