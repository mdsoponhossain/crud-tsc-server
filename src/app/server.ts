import mongoose from 'mongoose';
import app from './app';
import configProperty from './config';

async function dbConnection() {
  await mongoose.connect(configProperty.db_url as string, { dbName: 'myDB' });
  console.log('server connected with database successfully...');
}

dbConnection();

app.listen(configProperty.port, () => {
  console.log(`Example app listening on port ${configProperty.port}`);
});
