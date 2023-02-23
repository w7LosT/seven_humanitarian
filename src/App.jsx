import Theme from "./theme";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from './routes';

export default function App() {
    return (
        <ThemeProvider>
            <Theme>
                <AppRoutes />
            </Theme>
        </ThemeProvider>
    )
}