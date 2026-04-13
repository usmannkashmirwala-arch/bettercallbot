import { Component, type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#111" }}>
          <h1 style={{ color: "#E63329" }}>Something went wrong</h1>
          <p>The page failed to load. Please try refreshing.</p>
          {this.state.error && (
            <pre style={{ background: "#f5f4f0", padding: "1rem", fontSize: "12px", overflowX: "auto" }}>
              {this.state.error.message}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={__BASE_PATH__}>
          <AppRoutes />
        </BrowserRouter>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;
