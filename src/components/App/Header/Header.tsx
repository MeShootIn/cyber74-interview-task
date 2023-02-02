import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <Link to="/">
      <button>Home</button>
    </Link>
  );
}

export default function Header() {
  return (
    <header>
      <h1>Тестовое задание</h1>

      <nav>
        <menu>
          <li>
            <HomeButton />
          </li>
        </menu>
      </nav>
    </header>
  );
}
