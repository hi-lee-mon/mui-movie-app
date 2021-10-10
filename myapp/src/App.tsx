import { Navbar } from "./components/navbar/NavbarComponent";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Movies from "./components/pages/movies/Movies"
import TvSeries from "./components/pages/tvSeries/TvSeries"
import Trending from "./components/pages/trending/Trending"
import {BrowserRouter,Switch,Route} from "react-router-dom";
export default function App() {
  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Movies}/>
        <Route exact path="/TVSeries" component={TvSeries}/>
        <Route exact path="/Trending" component={Trending}/>
      </Switch>
    </BrowserRouter>

    </ThemeProvider>

  );
}
