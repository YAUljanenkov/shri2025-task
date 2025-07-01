import { createRoot } from 'react-dom/client';
import { Header } from './header.jsx';
import { Main } from './main.jsx';

const root = createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
