import { Container } from "reactstrap";
import Dahsboard from "./Dahsboard";
import Navi from "../navi/Navi"
import { Route, Switch } from "react-router-dom"
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dahsboard}></Route>
        <Route path="/product"  component={Dahsboard}></Route>
        <Route path="/saveproduct/:productId"  component={AddOrUpdateProduct}></Route>
        <Route path="/saveproduct/"  component={AddOrUpdateProduct}></Route>
        <Route path="/cart"  component={CartDetail}></Route>
        <Route exact component={NotFound}></Route>
      </Switch>

    </Container>
  );
}

export default App;
