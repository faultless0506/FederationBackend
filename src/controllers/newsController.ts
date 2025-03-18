import { Request, Response } from 'express';
import { News } from '../models';

export const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await News.findAll();
    return res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const news = await News.findByPk(id);
    
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    
    return res.json(news);
  } catch (error) {
    console.error('Error fetching news by id:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};