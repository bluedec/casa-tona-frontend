import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { Link, MetaProvider } from "@solidjs/meta";
import Events from "./pages/Events";

export default function App(props: any) {
  return (
    <Router>
      <MetaProvider>
        <Link rel="icon" href="/assets/logos/casa-tona.ico" />
      </MetaProvider>
      <Route path="/login" component={Login} />
      <Route path="*404" component={NotFound} />
      <Route path="/home" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/providers" component={Home} />
      <Route path="/clients" component={Home} />
      <Route path="/earnings" component={Home} />

    </Router>
  );
}

