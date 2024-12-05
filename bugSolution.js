```javascript
// Ensure your tailwind.config.js is correctly configured and includes the content path
// module.exports = {
//   content: [ "./src/**/*.{js,jsx,ts,tsx}",
// ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

//Verify your postcss.config.js is configured correctly (If you are using it):
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// And that your build process correctly includes the generated CSS file.
// For example, in a Vite project, you might need to configure your output directory and import the CSS file accordingly.

<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  This is some text
</div>
```