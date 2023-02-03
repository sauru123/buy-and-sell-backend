import { db } from '../database.js';
import * as admin from 'firebase-admin';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {

        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;
        const id = req.params.id;

        //console.log("userId",userId, id)

     
        await db.query(
            `DELETE FROM listings WHERE id=? AND user_id=?`,
            [id, userId],
        );
        // const results = await db.query(
        //     `SELECT * FROM listings WHERE id=?`,
        //     [id],
        // );
        // const updatedListing = results.result[0];
        return {message:"Success!"};
    }
}