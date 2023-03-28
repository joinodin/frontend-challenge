import { render, screen } from "@testing-library/react"
import Home from "../pages/index"

describe("• Home", () => {
  test("greets the user", () => {
    render(<Home />)

    expect(screen.getByText("Hello world")).toBeVisible()
  })
})
