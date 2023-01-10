import { Request, Response, NextFunction } from 'express';
import { database } from '../db';

export const getHQs = async (req: Request, res: Response) => {
    try{
        const result = await (await database.query("select * from hqs")).rows
        console.table(result)
        return res.status(200).json(result)
    }
    catch(error){
        console.log(`Error to get all hqs! ${error}`)
    }
};

export const getReleases = async (req: Request, res: Response) => {
    try{
        const result = await (await database.query("select * from public.hqs order by add_date desc limit 5;")).rows
        console.table(result)
        return res.status(200).json(result)
    }
    catch(error){
        console.log(`Error to get hqs! ${error}`)
    }
};

export const getPublishers = async (req: Request, res: Response) => {
    try{
        const result = await (await database.query("select distinct publisher from public.hqs")).rows
        console.table(result)
        return res.status(200).json(result)
    }
    catch(error){
        console.log(`Error to get publishers! ${error}`)
    }
};

export const getFiltered = async (req: Request, res: Response) => {
    const {publisher} = req.params
    try{
        const result = await (await database.query(`select * from public.hqs where publisher = '${publisher.toUpperCase()}';`)).rows
        console.table(result)
        return res.status(200).json(result)
    }
    catch(error){
        console.log(`Error to get HQs! ${error}`)
    }
};