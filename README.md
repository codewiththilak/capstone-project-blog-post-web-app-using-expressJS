# Personal Blog Web Application

A simple and elegant **full-stack blog application** built using **Node.js, Express, and EJS**.
This project allows users to create, edit, and delete posts with a clean UI and basic authentication.

---

## Features

* User authentication (session-based login)
* Create new blog posts
* Edit existing posts
* Delete posts
* Modern responsive UI (glassmorphism design)
* Server-side rendering using EJS
* Lightweight and fast (no database required)

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS
* **Middleware:** body-parser, express-session
* **Styling:** Custom CSS (Flexbox + modern UI design)

---

## Project Structure

```
project/
│
├── public/
│   └── styles.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── index.ejs
│   ├── login.ejs
│   └── new_post.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### Install dependencies

```bash
npm install
```

### Run the server

```bash
node app.js
```

### Open in browser

```
http://localhost:3000
```

---

## Login Credentials

```
Username: admin  
Password: ILoveProgramming
```

---

## How It Works

* Express handles routing and server logic
* EJS renders dynamic content on the server
* Session middleware manages authentication
* Posts are stored temporarily in memory (array)
* CRUD operations are handled via form submissions

---

## Limitations

* No database (data resets on server restart)
* No user registration system
* No persistent authentication

---

## Future Improvements

* Add database integration (MongoDB / MySQL)
* Implement user registration & role-based access
* Add rich text editor for posts
* Add image upload support
* Deploy to cloud (AWS / Render / Vercel)

---

## License

This project is for educational purposes and open for modification.

---

## Author

Developed by **[Thilak S]**

---
