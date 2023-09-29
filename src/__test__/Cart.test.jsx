import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import MENU_MOCK_DATA from "./Mocks/restMenuMock.json";
import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MENU_MOCK_DATA),
  })
);

it("Should render restaurant menu component and cart components according to add items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  const menuItems = screen.getAllByTestId("menuItems");
  expect(menuItems.length).toBe(20);

  expect(screen.getByText("Cart - 0")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - 1")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  expect(screen.getAllByTestId("menuItems").length).toBe(22);

const clrBtn = screen.getByRole("button", {name : 'Clear Cart'})

  fireEvent.click(clrBtn)

  expect(screen.getAllByTestId("menuItems").length).toBe(20);

  expect(screen.getByText("Your Cart is empty."))
});
