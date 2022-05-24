import React from "react";
import { Schedule, validateInput } from "../src/screens/MenusPage";
import { fireEvent, render } from "@testing-library/react-native";

jest.mock("../src/screens/MenusPage");
describe("Login page tests", () => {
  /*
  it("should go to home from login button", () => {
    const navigation = { navigate: () => {} };
    spyOn(navigation, "navigate");
    const page = render(<WorkoutsPage navigation={navigation} />);

    const loginButton = page.getByTestId("upperBodyButton");

    fireEvent.press(loginButton);
    expect(navigation.navigate).toHaveBeenCalledWith("Upper Body Workouts");
  });
  */
  test("validate function", () => {
    const text = "text@test.com";
    expect(validateInput(text)).toBe(true);
  });
});
