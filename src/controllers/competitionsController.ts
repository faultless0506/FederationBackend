import { Request, Response } from 'express';
import { Competition } from '../models';

export const getAllCompetitions = async (req: Request, res: Response) => {
  try {
    const competitions = await Competition.findAll();
    return res.json(competitions);
  } catch (error) {
    console.error('Error fetching competitions:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getCompetitionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const competition = await Competition.findByPk(id);
    
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    
    return res.json(competition);
  } catch (error) {
    console.error('Error fetching competition by id:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// export const createCompetition = async (req: Request, res: Response) => {
//   try {
//     const { title, description, date, location, imageUrl } = req.body;
    
//     if (!title || !description || !date || !location) {
//       return res.status(400).json({ message: 'Title, description, date, and location are required' });
//     }
    
//     const competition = await Competition.create({ 
//       title, 
//       description, 
//       date, 
//       location, 
//       imageUrl 
//     });
    
//     return res.status(201).json(competition);
//   } catch (error) {
//     console.error('Error creating competition:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

// export const updateCompetition = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { title, description, date, location, imageUrl } = req.body;
    
//     const competition = await Competition.findByPk(id);
    
//     if (!competition) {
//       return res.status(404).json({ message: 'Competition not found' });
//     }
    
//     await competition.update({ title, description, date, location, imageUrl });
//     return res.json(competition);
//   } catch (error) {
//     console.error('Error updating competition:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

// export const deleteCompetition = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
    
//     const competition = await Competition.findByPk(id);
    
//     if (!competition) {
//       return res.status(404).json({ message: 'Competition not found' });
//     }
    
//     await competition.destroy();
//     return res.json({ message: 'Competition deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting competition:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };