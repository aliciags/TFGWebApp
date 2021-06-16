import bodyParser from 'body-parser';
import express from 'express';

import connectDB from '../config/database';
import auth from './routes/api/auth.routes';
import recipe from './routes/api/recipe.routes';
import ingredient from './routes/api/ingredient.routes';
import user from './routes/api/user.routes';
import expense from './routes/api/expense.routes';
import menu from './routes/api/menu.routes';
import day from './routes/api/day.routes';

const cors = require('cors');

const app = express();

app.use(cors());

// Connect to MongoDB
connectDB();

// Express configuration
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  express.static(
    'C:/Users/aliga/Desktop/Me/uni/4/4B/TFG/TFGWebApp/client/dist/client'
  )
);
app.use(
  '/uploads', express.static('uploads')
);

// @route   GET the frontend
// @desc    Test Base API
// @access  Public
app.get('/', (_req, res) => {
  res.send(
    'C:/Users/aliga/Desktop/Me/uni/4/4B/TFG/FoodieWebApp1.0/client/dist/client/index.html'
  );
});

app.use('/api/auth', auth);
app.use('/api/', recipe);
app.use('/api/user', user);
app.use('/api/ingredient', ingredient);
app.use('/api/expense', expense);
app.use('/api/menu', menu);
app.use('/api/day', day);

const port = app.get('port');
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
