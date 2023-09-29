import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../components/Main";
import MOCK_DATA from "./Mocks/restListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should render restaurant cards according to the filter", () => {

    it("Should render the main component with a search button", async () => {
      await act(async () =>
        render(
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        )
      );

      const cardsBeforeSearch = screen.getAllByTestId("restCard");

      expect(cardsBeforeSearch.length).toBe(20);

      const searchBtn = screen.getByRole("button", { name: "Search" });

      expect(searchBtn).toBeInTheDocument();

      const searchInput = screen.getByTestId("searchInput");

      fireEvent.change(searchInput, { target: { value: "Beverages" } });
      fireEvent.click(searchBtn);

      const cardsAfterSearch = screen.getAllByTestId("restCard");
      expect(cardsAfterSearch.length).toBe(9);
    });

    it("Should filter top rated restaurants", async () => {
      await act(async () =>
        render(
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        )
      );

      const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });

      fireEvent.click(topRatedBtn);

      const topRatedCards = screen.getAllByTestId("restCard");

      expect(topRatedCards.length).toBe(14);
    });

})

