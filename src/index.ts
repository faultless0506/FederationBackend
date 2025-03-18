import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { sequelize } from './config/database';
import newsRoutes from './routes/newsRoutes';
import documentRoutes from './routes/documentsRoutes';
import competitionRoutes from './routes/competitionsRoutes';

// Загрузка переменных окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  // credentials: true, 
}));

app.use(express.json());

// Статические маршруты для доступа к загруженным файлам
app.use('/public', express.static('public'));

// Маршруты API
app.use('/api/news', newsRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/competitions', competitionRoutes);

// Подключение к базе данных и запуск сервера
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database synchronized');
    
    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });