const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		baseUrl: "https://ib-fe-intern-task.netlify.app/",
		supportFile: false,
	},
});
