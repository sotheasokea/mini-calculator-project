# Mini-Calculator

A simple front-end calculator built with JavaScript for basic arithmetic operations.

Live Demo: https://mini-calculator-beta.vercel.app/
---

## Overview
This project implements a basic, interactive calculator that performs standard arithmetic operations (addition, subtraction, multiplication, division, modulo) in the user's web browser. The core logic is handled by `script.js`, which manages the state of the calculation and updates the display screen based on button clicks.

## Features
*   **Basic Arithmetic:** Supports addition (`+`), subtraction (`-`), multiplication (`x`), division (`/`), and modulo (`%`).
*   **Interactive Display:** Users can input numbers and operators into a visual display area.
*   **Expression Management:** Functions to handle clearing the expression and deleting operands.

## File Structure
*   `script.js`: Contains all the core JavaScript logic for calculator operations.
*   `index1.html`: (To be created) The main HTML file that structures the calculator interface.

## Setup & Usage
To run this calculator, you need an HTML page to structure the UI and link the JavaScript file.

**Prerequisites:**
1.  An `index.html` file (or similar) to provide the HTML structure (`<div class="buttons">...</div>` and `<div class="js-screen">0</div>`).
2.  The `script.js` file must be linked in the HTML.

**How to Integrate:**
1.  Create an HTML file (e.g., `index.html`) in the project directory.
2.  Ensure your HTML contains elements with classes `.buttons` and `.js-screen`.
3.  Link `script.js` within the HTML file.

### Core Logic Summary (from script.js)
The JavaScript logic manages the calculator's state through several key functions:

*   **`checkInput(value)`**: Validates user input to determine if it's a number, an operator, or an equals sign.
*   **`appendNumber(number)`**: Manages how numbers are added to the display string, correctly handling decimal points and sequential operations.
*   **`setOperation(operation)`**: Handles setting pending operators and triggering intermediate calculations when an operator is entered between operands.
*   **`calculate()`**: Executes the final arithmetic operation on the stored operands to display the result on the screen.
*   **`deleteOne()`**: Manages the clearing of the last operand from the current expression for easy correction.


## Local Setup & Installation

To run this calculator locally on your machine, follow these steps:

### 1. Clone or Download the Project
You can get the project files onto your computer in one of two ways:

* **Using Git (Recommended):** Clone the repository via your terminal:
  ```bash
  git clone https://github.com/sotheasokea/mini-calculator-project.git
  ---
This project focuses on the front-end implementation, where **HTML/CSS** provides the visual interface and **JavaScript** provides the functional calculation engine.