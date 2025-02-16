const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    // Simulate some operation that might fail
    //const result = someExpensiveOperation();
    res.send('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', err => {
  console.error('Failed to start server:', err)
});
