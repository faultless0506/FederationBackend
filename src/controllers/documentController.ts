import { Request, Response } from 'express';
import { Document } from '../models';

export const getAllDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await Document.findAll();
    return res.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDocumentsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const documents = await Document.findAll({
      where: { category }
    });
    
    return res.json(documents);
  } catch (error) {
    console.error('Error fetching documents by category:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDocumentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const document = await Document.findByPk(id);
    console.log('Document:', document);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    
    return res.json(document);
  } catch (error) {
    console.error('Error fetching document by id:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
