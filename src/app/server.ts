import mongoose from 'mongoose';
import app from './app';
import configProperty from './config';
import colors from 'colors';

const log = console.log;

async function dbConnection() {
  await mongoose.connect(configProperty.db_url as string, { dbName: 'myDB' });
  log(colors.green('server connected with database successfully...'));
}

dbConnection();

app.listen(configProperty.port, async () => {
  log(colors.green(`Example app listening on port ${configProperty.port}`));
});
