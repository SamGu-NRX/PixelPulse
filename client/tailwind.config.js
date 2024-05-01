/** @type {import('tailwindcss').Config} */
module.exports = {
  // The `content` section specifies the files that Tailwind should scan
  // for any usage of its utility classes. You can add additional paths
  // if you have other files or templates that use Tailwind classes.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // The `theme` section allows you to customize the default Tailwind theme.
  // You can add your own color palette, typography styles, spacing values,
  // and more. The `extend` object is where you would add your customizations.
  theme: {
    extend: {},
  },

  // The `plugins` section allows you to register any third-party Tailwind plugins.
  // You can add plugins here to extend Tailwind's functionality, such as adding
  // new utility classes or modifying the default behavior.
  plugins: [],
}