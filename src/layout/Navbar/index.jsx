import { Link, useLocation } from 'react-router-dom';
import st from './styles.module.scss';

const menu = [
  {
    title: 'Gerund / Infinitive',
    link: '/',
  },
  {
    title: 'Irregular verbs',
    link: '/irregular-verbs',
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={st.container}>
      <div className={st.listWrapper}>
        {menu.map((item) => (
          <Link
            key={item.link}
            className={location.pathname === item.link ? st.active : ''}
            to={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
