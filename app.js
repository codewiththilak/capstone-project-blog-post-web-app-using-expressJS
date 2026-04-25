import express from "express"; 
import bodyParser from "body-parser";
import session from "express-session";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express(); 
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended : true})); 
app.use(express.static("public")); 

app.use(
    session({
        secret: "mySecretKey", 
        resave: false,
        saveUninitialized: false,
    })
);

// Middleware to check authentication 
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

// Login routes 
app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/login", (req, res) => {
    const {username, password} = req.body; 
    if (username === "admin" && password === "ILoveProgramming") {
        req.session.user = username; 
        res.redirect("/");
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

let posts = []; 

// Home Route 
app.get("/", isAuthenticated, (req, res) => {
    res.render("index.ejs", { posts });
}); 

// New post form 
app.get("/new", isAuthenticated, (req, res) => {
    res.render("new_post.ejs", { post: null, id: null });
});

// Handle new post 
app.post("/new", isAuthenticated, (req, res) => {
    const {title, content } = req.body; 
    posts.push({title, content});
    res.redirect("/");  
});

// Delete post 
app.post("/delete/:id", isAuthenticated, (req,res) => {
    posts.splice(req.params.id, 1);
    res.redirect("/");
}); 

// Edit post 
app.get("/edit/:id", isAuthenticated, (req, res) => {
    res.render("new_post.ejs", { post: posts[req.params.id], id: req.params.id}); 
}); 

// Handle edit 
app.post("/edit/:id", isAuthenticated, (req, res) => {
    posts[req.params.id] = { title: req.body.title, content: req.body.content };
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server started in ${port}.`);
})




