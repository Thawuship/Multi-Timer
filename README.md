# Multi-Timer

The Multi-Timer web application was built to provide a simple, intuitive way to manage multiple timers simultaneously. This project was created using HTML, CSS, and JavaScript, ensuring compatibility with modern web browsers. The core idea was to allow users to create timers with unique names, start, stop, reset, rename, and delete them, while also ensuring that the timers persist across page refreshes using `localStorage`.

The development process began with structuring the basic HTML layout, including a table to display the timers and buttons for user interactions. CSS was then applied to enhance the visual aesthetics, making the interface user-friendly and visually appealing with a clean and modern design. Font Awesome icons were integrated to replace text on buttons, providing a more intuitive user experience.

JavaScript was used to implement the core functionality. This included functions to handle the creation of timers, starting and stopping them, resetting the time, renaming, and deleting individual timers. Special attention was given to ensuring that only one timer runs at a time, stopping all others when a new timer is started. The use of `localStorage` was crucial for storing timer data, allowing users to refresh the page without losing their timers.

Finally, a "Clear All" button was added to provide users with an easy way to reset the application, removing all timers and clearing the `localStorage`. The project was then tested across different browsers to ensure consistent performance and functionality.

## Features

- Add multiple timers with unique names.
- Start, stop, reset, rename, and delete individual timers.
- Clear all timers at once.
- Millisecond precision for each timer.
- Persistent timers using `localStorage`.

## Demo

![image](https://github.com/Thawuship/Multi-Timer/assets/49475559/589031ce-2676-4d68-b31d-6191d306a98d)


## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

You will need a modern web browser (e.g., Google Chrome, Mozilla Firefox) to run this application.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/multi-timer.git
    ```

2. Navigate to the project directory:
    ```sh
    cd multi-timer
    ```

3. Open `index.html` in your web browser:
    ```sh
    open index.html
    ```

## Usage

1. Click on the "Add New Timer" button to create a new timer.
2. Enter a name for the new timer when prompted.
3. Use the Start (`▶️`), Stop (`⏸️`), Reset (`🔄`), Rename (`✏️`), and Delete (`🗑️`) buttons to control each timer.
4. Click on the "Clear All" button to remove all timers from the list and `localStorage`.

## Code Structure

- `index.html`: The main HTML file containing the structure of the application.
- `styles.css`: The CSS file containing the styles for the application.
- `script.js`: The JavaScript file containing the logic for timer functionality and interaction with `localStorage`.

## Customization

Feel free to modify the code to suit your needs. You can customize the styles in `styles.css` or extend the functionality in `script.js`.

## Contributing

1. Fork the repository.
2. Create your feature branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Open a pull request.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for the icons used in the application.

