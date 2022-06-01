describe("Testing login", () => {
	// - Scenario 1:
	// a. Enter an email address that doesn’t exist in the login list
	// b. Enter any password
	// c. Click on the login button
	// d. Validate that the error message ‘you email and/or password are incorrect’ shows

	it("Login with wrong email and password", () => {
		cy.viewport(1000, 1000);
		cy.visit("/");
		cy.clearLocalStorage();

		cy.get("input[type=text][name=email]").type("mahmoud@instabug.com");
		cy.get("input[type=password]").type("123456A");

		cy.get(".btn.login-btn").click();

		cy.contains("Your email and/or password are incorrect").should("exist");
	});

	// - Scenario 2:
	// a. Enter an email address that exists in the login list
	// b. Enter any wrong password
	// c. Click on the login button
	// d. Validate that the error message ‘you email and/or password are incorrect’ shows

	it("Login with correct email but wrong password", () => {
		cy.viewport(1000, 1000);
		cy.visit("/");
		cy.clearLocalStorage();

		cy.get("input[type=text][name=email]").type("mohamed@instabug.com");
		cy.get("input[type=password]").type("123456A");

		cy.get(".btn.login-btn").click();

		cy.contains("Your email and/or password are incorrect").should("exist");
	});

	// - Scenario 3:
	// a. Enter an email address that exists in the login list
	// b. Enter the right password
	// c. Click on login button
	// d. Validate that the browser will redirect to the welcome page

	it("Login with the correct email and password", () => {
		cy.viewport(1000, 1000);
		cy.visit("/");
		cy.clearLocalStorage();

		cy.get("input[type=text][name=email]").type("mohamed@instabug.com");
		cy.get("input[type=password]").type("A12345678");

		cy.get(".btn.login-btn").click();

		cy.location("pathname").should("eq", "/welcome");
	});

	// - Scenario 4:
	// a. Enter not a valid email address ‘dddd’
	// b. Un-focus the textbox
	// c. Validate that the red validation message will appear
	// d. Validate that the textbox border will be red

	it("Validate the invalid textbox border will be red", () => {
		cy.viewport(1000, 1000);
		cy.visit("/");
		cy.clearLocalStorage();

		cy.get("input[type=text][name=email]").type("dddd");
		cy.get("input[type=password]").type("123456A");

		cy.get(".btn.login-btn").click();

		cy.contains("Enter a valid email address.").should("exist");
		cy.get("input[type=text][name=email]").should("have.css", "border-color", "rgb(242, 66, 32)");
	});
});
