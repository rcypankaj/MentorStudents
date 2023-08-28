# MERN App: Recording and Authentication

This MERN (MongoDB, Express.js, React, Node.js) application is designed to capture user information, authenticate users, and enable recording of the webcam, and audio. The app leverages the power of the MERN stack to deliver a seamless user experience.

## Features

- User authentication with JWT tokens.
- Ability to record entire webcam.
- audio recording with user permission.
- User-friendly interface for recording actions.

## Getting Started

Follow these steps to get the app up and running on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rcypankaj/mern-recording-app.git
   ```

2. **Navigate to the Directory:**

   ```bash
   cd backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Configure Environment Variables:**

   Rename the `.env.example` file to `.env` and fill in the required environment variables.

5. **Run the Application:**

   ```bash
   npm start
   ```

   **_ Same for the frontend part_**

6. **Access the App:**

   Open your browser and navigate to `http://localhost:3000` to use the app.

## Usage

1. **Authentication:**

   - If not logged in, the app displays a page to get the user's email and name.
   - Upon submitting, the user account is created (if not existing) and the user is logged in using a JWT token.

2. **Recording:**

   - After authentication, the user is prompted a button for confirmation to record the entire webcam and audio.
   - Upon confirmation, a "Start Recording" button appears.

3. **Recording Process:**

   - Clicking the "Start Recording" button initiates the recording process.
   - The app captures webcam and video streams (and audio if permitted).
   - If you want to download that video simply click on download button.

4. **Stopping Recording:**

   - The "Stop Recording" button becomes available during recording.
   - Clicking this button stops the recording process and saves recorded media.

## Limitations

- Audio recording depends on browser support for the `MediaRecorder` API.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to suggest improvements or report bugs.

---

Customize this README template according to your app's specific details and preferences. Make sure to update URLs, paths, and placeholders with your actual information. The provided README should give users an overview of the app's functionality, how to use it, and where to find further information.
