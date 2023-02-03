import { db } from '../database.js';

export const getAllListingRoute = {
    method: 'GET',
    path: '/api/listings',
    handler:async (req,h)=>{
       // const payload = req.payload;
       const results = await db.query(
        'SELECT * FROM listings'
       );
        return results.result;
    }
}