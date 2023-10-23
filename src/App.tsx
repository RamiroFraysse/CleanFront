import "./App.css";
import { SnackbarProvider } from "notistack";
import Practice from "@/pages/practice/Practice";
import { SnackbarUtilitiesConfigurator } from "@/utilities/snackbarManager";
// import { PracticeEB } from "@/pages";

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <Practice />;
      </SnackbarProvider>
      {/* <PracticeEB /> */}
    </div>
  );
}

export default App;
