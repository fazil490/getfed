import { render, screen } from "@testing-library/react"
import RestaurantsList from "../components/RestaurantsList"
import MOCK_DATA_RESTCARD from "../__test__/Mocks/restCardMock.json"
import "@testing-library/jest-dom"

it("Should render a Restaurant Card component with a props data", () => {
    render(<RestaurantsList restData={MOCK_DATA_RESTCARD}/>)

    const restName = screen.getByText("Pizza Hut");

    expect(restName).toBeInTheDocument();
})