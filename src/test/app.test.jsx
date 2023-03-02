import { beforeEach, describe, expect, test } from "vitest";
import { getByText, render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("App test", () => {

  beforeEach(() => {
    render(<App />);
  });

  test("app header is rendered", () => {
    expect(screen.getByText("Säätutka")).toBeInTheDocument();
  });

  test("dropdown is rendered and can be opened", async () => {
    const user = userEvent.setup();
    const dropDown = screen.getByText("Valitse kaupunki");
    await user.click(dropDown);
    expect(screen.getByText("Tampere")).toBeInTheDocument();
  });

  test("city current weather data is rendered", async () => {
    const user = userEvent.setup();
    const dropDown = screen.getByText("Valitse kaupunki");
    await user.click(dropDown);
    const selection = screen.getByText("Tampere");
    await user.click(selection);
    await waitFor(() => expect(document.querySelector(".city-item")).toBeInTheDocument());
    expect(document.querySelector(".city-item-main")).toBeInTheDocument();
  });

  test("city forecast weather data is rendered", async () => {
    const user = userEvent.setup();
    const dropDown = screen.getByText("Valitse kaupunki");
    await user.click(dropDown);
    const selection = screen.getByText("Tampere");
    await user.click(selection);
    await waitFor(() => expect(document.querySelector(".city-item")).toBeInTheDocument());
    expect(document.querySelector(".city-item-hourly-list")).toBeInTheDocument();
    expect(document.querySelectorAll(".hourly-list-item")).toHaveLength(8);

  });

});