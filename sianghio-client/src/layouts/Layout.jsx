import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#34418f] text-zinc-900">
      <NavBar />
      <main className="pb-20 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;