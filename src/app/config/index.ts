import dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + '/.env' });

const configProperty = {
  db_url: process.env.DB_URL,
  port: 5000,
  salt_round: process.env.SALT_ROUND,
};

export default configProperty;
