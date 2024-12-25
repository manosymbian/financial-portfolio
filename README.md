Investment Dashboard - Angular 18 Project
Overview
This is an Angular 18 project designed to manage and display investment data in a user-friendly dashboard. It includes two standalone components: Investment and Dashboard.

The Investment component allows users to enter asset details such as asset type, quantity, purchase price, and investment date. The Dashboard component displays a visual representation of investment data using an Apex Pie chart, showing the total quantity of each asset type grouped by their purchases.

Components: 
1. Investment Component: A reactive form for managing investments with input fields:

Asset Type: The type of investment (e.g., Mutual Funds, Bonds, etc.).
Quantity: The number of assets.
Purchase Price: The price of each asset.
Investment Date: The date the investment was made.
Validators:

Required fields for Asset Type, Quantity, Purchase Price, and Investment Date.
Minimum quantity of 1 for assets.
Minimum purchase price of 100 for valid asset entries.


2. Dashboard Component: Displays an interactive Apex Pie chart representing the total quantity of each asset type based on the investment data.

Groups the investments by asset type.
Displays total quantity for each asset type as a percentage of the whole.
Mock Server: A mock server (using JSON-Server) is included to serve the investment data and allow for local development and testing.

How to run:
1. Use `npm run start` to start the app
2. Use `npm run mock-server` to start json-server mock server