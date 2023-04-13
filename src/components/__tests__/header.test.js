import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Logo Header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // render will give a small machine where we can render our components
  // Check if logo is loaded
  const logo = header.getByTestId("logo");
  expect(logo.getAttribute("src")).toBe(
    "https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
  );

});


test("Cart should have 0 items on rendering header", () => {
  // Logo Header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // render will give a small machine where we can render our components
  // Check if logo is loaded
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0 Items");
});
