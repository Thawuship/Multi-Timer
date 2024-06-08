# Multi-Timer

A simple web application that allows users to create, manage, and persist multiple timers with millisecond precision. This project is built using HTML, CSS, and JavaScript, and leverages `localStorage` to ensure that timers persist across page refreshes.

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

