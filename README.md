# Tailwind CSS Gradient Issue in Production Build

This repository demonstrates a bug where a Tailwind CSS gradient doesn't render correctly in the production build, but works fine during development.

## Bug Description

A simple linear gradient applied to a div element using `bg-gradient-to-r from-blue-500 to-purple-500` does not display the gradient in the production build. The element's background appears as a solid color instead of the expected gradient. The development build renders the gradient correctly.

## Solution

The issue likely stems from improper configuration of the Tailwind CSS build process or conflicting CSS rules.  The solution involves ensuring that your production build correctly includes and processes the generated Tailwind CSS styles. This might include verifying your build process, your Tailwind configuration file (tailwind.config.js), and the presence of the correct CSS in your production bundle.