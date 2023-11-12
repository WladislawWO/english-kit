import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import st from './styles.module.scss';

export default function MainLayout() {
  return (
    <div className={st.container}>
      <Navbar />
      <div className={st.wrapper}>
        <Outlet />
      </div>
    </div>
  );
}
