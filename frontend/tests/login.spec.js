const { test, describe, expect } = require("@playwright/test");

describe("Login page", () => {
  test("can open login page", async ({ page }) => {
    await page.goto("http://localhost:3000/login");

    await expect(page.getByText("Welcome Back!")).toBeVisible();
    await expect(page.getByText("Please login here")).toBeVisible();
  });

  test("can fill in login form", async ({ page }) => {
    await page.goto("http://localhost:3000/login");

    await page.fill("#username", "testuser");
    await page.fill("#password", "testpassword");

    await expect(page.locator("#username")).toHaveValue("testuser");
    await expect(page.locator("#password")).toHaveValue("testpassword");

    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });
});
