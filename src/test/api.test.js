import { describe, expect, test } from "vitest";
import { getWeatherData } from "../services/api";

describe("Api test", () => {
  test("api returns current and forecast weather data", async () => {
    const testCity = {
      label: 'Tampere',
      value: 'tampere',
      lat: 61.4991,
      lon: 23.7871
    };
    const response = await getWeatherData(testCity);
    expect(response).toHaveProperty("current");
    expect(response).toHaveProperty("forecast");
  });
});