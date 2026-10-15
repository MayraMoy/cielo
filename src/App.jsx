import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AccessibilityProvider>
          <AppRoutes />
        </AccessibilityProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
