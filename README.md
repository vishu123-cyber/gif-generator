# 🎬 Random GIF Generator

A simple and interactive **Random GIF Generator** built with **React.js** and the **GIPHY API**.

The application allows users to generate random GIFs or search for a random GIF using a specific **tag**. It also includes a loading spinner while GIF data is being fetched from the API.

---

## 🚀 Features

* 🎲 Generate a random GIF
* 🔎 Generate GIFs using a custom tag
* ⚡ Fetch GIFs dynamically using the GIPHY API
* 🔄 Automatically load a GIF when the application starts
* ⏳ Loading spinner while fetching data
* 📱 Responsive design
* 🎨 Modern UI using Tailwind CSS
* ♻️ Reusable custom React hook
* ❌ Handles API request errors
* 🧩 Component-based React architecture

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Axios**
* **GIPHY API**
* **Tailwind CSS**
* **React Router DOM**
* **HTML5**
* **CSS3**

---

## 📂 Project Structure

```text
random-gif/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Random.jsx
│   │   ├── Tag.jsx
│   │   └── Spinner.jsx
│   │
│   ├── hooks/
│   │   └── Usegif.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── index.js
│
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```

---

## 🧩 Components

### `App.jsx`

The main component of the application.

It renders:

* Random GIF generator
* Tag-based GIF generator

---

### `Random.jsx`

This component generates a **completely random GIF**.

It uses the custom `useGif` hook to:

* Fetch GIF data
* Display the GIF
* Show a loading spinner
* Generate another GIF when the **Generate** button is clicked

---

### `Tag.jsx`

This component allows users to enter a **tag** and generate a random GIF related to that tag.

For example:

```text
Enter a tag → "funny"
```

The application then requests a random GIF related to the entered tag.

---

### `Spinner.jsx`

Displays a loading animation while the application is waiting for the GIPHY API response.

---

### `Usegif.js`

This is a **custom React hook** responsible for handling GIF API requests.

It manages:

```javascript
gif
loading
fetchData()
```

The hook uses:

* `useState`
* `useEffect`
* `useCallback`
* Axios

This keeps API logic separate from the UI components and makes the code more reusable.

---

## 🔄 How the Application Works

```text
              User
                │
                ▼
       ┌─────────────────┐
       │ React Interface  │
       └────────┬────────┘
                │
                ▼
          useGif Hook
                │
                ▼
          Axios Request
                │
                ▼
         GIPHY REST API
                │
                ▼
          GIF Response
                │
                ▼
        Display GIF in UI
```

---

## 🎲 Random GIF Flow

1. User opens the application.
2. `useGif()` automatically fetches a GIF.
3. The GIPHY API returns a random GIF.
4. The GIF URL is stored in React state.
5. The GIF is displayed on the screen.
6. User can click **Generate** to get another GIF.

---

## 🔎 Tag-Based GIF Flow

1. User enters a tag.
2. Example:

```text
cats
```

3. User clicks **Generate**.
4. The tag is passed to the `fetchData()` function.
5. Axios sends a request to the GIPHY API.
6. A GIF related to the tag is returned.
7. The GIF is displayed on the screen.

---

## 🧠 React Concepts Used

This project demonstrates several important React concepts:

### Functional Components

The application is divided into reusable functional components.

### `useState`

Used to store:

* Current GIF
* Loading state
* User-entered tag

### `useEffect`

Used to automatically fetch a GIF when the application loads.

### `useCallback`

Used to memoize the `fetchData` function in the custom hook.

### Custom Hooks

The `useGif` hook contains the API-fetching logic so that it can be reused by multiple components.

### Props & Component Architecture

The application follows a modular component-based structure.

---

## 🌐 GIPHY API

The project uses the **GIPHY API** to retrieve GIFs.

API endpoint used:

```text
https://api.giphy.com/v1/gifs/random
```

The API supports both:

* Random GIF requests
* Tag-based GIF requests

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/random-gif.git
```

### 2. Navigate to the Project

```bash
cd random-gif
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Your GIPHY API Key

Create a `.env` file inside the `src` folder or preferably the project root and add:

```env
REACT_APP_GIPHY_API_KEY=YOUR_GIPHY_API_KEY
```

> **Important:** Never upload your actual API key to GitHub.

Add the environment file to `.gitignore`:

```gitignore
.env
```

### 5. Start the Application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## 📦 Dependencies

The project uses the following major packages:

```json
{
  "axios": "^1.19.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.18.2",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```

Tailwind CSS is used for styling.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The optimized application will be generated in the:

```text
build/
```

directory.

---

## 📸 Project Preview

Add your project screenshot here:

```markdown
![Random GIF Generator](./screenshot.png)
```

---

## 🔮 Future Improvements

The project can be improved by adding:

* 🔍 GIF search functionality
* ❤️ Favorite GIFs
* 📥 Download GIF option
* 📋 Copy GIF URL
* 📱 Better mobile animations
* 🌙 Dark mode
* 📜 GIF history
* ⭐ Rating system
* 🔐 User authentication
* 🗄️ Database for storing favorites
* 🎨 More animations and transitions

---

## 🎯 Learning Outcomes

By building this project, the following concepts are practiced:

* React functional components
* React Hooks
* Custom Hooks
* API integration
* Axios
* REST API requests
* Asynchronous JavaScript
* Error handling
* Loading states
* Tailwind CSS
* Component reusability
* Environment variables

---

## 👨‍💻 Author

**Your Name**

GitHub: `https://github.com/vishu123-cyber`

---

## 📄 License

This project is created for **learning and educational purposes**.
