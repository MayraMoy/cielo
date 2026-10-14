import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';

function App() {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <AppRoutes />
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default App;
