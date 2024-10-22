///////////////////////////////
// Imports
///////////////////////////////

require('dotenv').config();
const path = require('path');
const express = require('express');

// middleware imports
const handleCookieSessions = require('./middleware/handleCookieSessions');
const logRoutes = require('./middleware/logRoutes');
const checkAuthentication = require('./middleware/checkAuthentication');

// controller imports
const authControllers = require('./controllers/authControllers');
const userControllers = require('./controllers/userControllers');
const taskControllers = require('./controllers/taskControllers');
const interestControllers = require('./controllers/interestControllers')
const app = express();

// middleware
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Serve static assets from the dist folder of the frontend



///////////////////////////////
// Auth Routes
///////////////////////////////

app.get('/api/me', authControllers.showMe);
app.post('/api/login', authControllers.loginUser);
app.delete('/api/logout', authControllers.logoutUser);



///////////////////////////////
// User Routes
///////////////////////////////

app.post('/api/users', userControllers.createUser);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
app.get('/api/users', checkAuthentication, userControllers.listUsers); // tested
app.get('/api/users/by-zip', checkAuthentication, userControllers.listUsersByZip); // tested
app.get('/api/user/by-username', checkAuthentication, userControllers.findUserByUsername); // tested
app.get('/api/users/:id', checkAuthentication, userControllers.showUser); // tested
app.patch('/api/users/:id', checkAuthentication, userControllers.updateUser); // tested




///////////////////////////////
// Task Routes
///////////////////////////////

app.get('/api/tasks/by-zipcode/:zipcode', taskControllers.listByZipcode) // tested
app.get('/api/task/:id', taskControllers.getTaskById) // tested
app.get('/api/own-task', taskControllers.getOwnTasks) // tested
app.post('/api/tasks', taskControllers.createTasks) // tested
app.patch('/api/task/:id', taskControllers.updateTask) // tested
app.delete('/api/task/:id', taskControllers.deleteTask) // tested




///////////////////////////////
// Interest Routes
///////////////////////////////


app.get('/api/interests/:task_id', interestControllers.getInterests) // tested
app.post('/api/interests', interestControllers.createInterest) // tested
app.delete('/api/interests', interestControllers.deleteAllInterest) //tested


///////////////////////////////
// Fallback Route
///////////////////////////////

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the dist folder.
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});



///////////////////////////////
// Start Listening
///////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
