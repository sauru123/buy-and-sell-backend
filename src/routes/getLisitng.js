//import { fakeListings } from './fake-data';
import Boom from '@hapi/boom';
import { db } from '../database.js';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async(req, h) => {
        const id = req.params.id;
        const results = await db.query(
            `SELECT * FROM listings WHERE id=?`,
            [id],
        );
        const listing = results.result[0];
        // const name = payload.name;
       // const listing = fakeListings.find(listing => listing.id === id);
        if (!listing) {
            throw Boom.notFound(`Listing does not exist with id ${id}`);
        };
        return listing;
    }
}