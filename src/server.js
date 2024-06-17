import express, { json } from 'express';
import { createConnection } from 'mysql';

const app = express();
const port = 3001;

const db = createConnection({
  host: 'localhost',
  user: 'amodahegde',
  password: 'amodahegde',
  database: 'AdCamp'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

app.use(json());

app.post('/insertData', (req, res) => {
  const { data } = req.body; // Assuming data is an object containing your state variables

  const sql = 'INSERT INTO client VALUES ("10", "abcd", "abcd@email.com", 200);'

  db.query(sql, data, (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).send('Error inserting data');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
