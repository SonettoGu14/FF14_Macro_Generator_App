import { Editor } from "./pages/Editor";
import { LanguageProvider } from "./i18n";

export default function App() {
  return (
    <LanguageProvider>
      <Editor />
    </LanguageProvider>
  );
}
