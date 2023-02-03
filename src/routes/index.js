import { getAllListingRoute } from "./getAllListings.js";
import { getListingRoute } from "./getLisitng.js";
import { addViewToListingRoute } from "./addViewToListing.js";//Not Working
import { getUserListingsRoute } from "./getUserListings.js";
import { createNewListingRoute } from "./createNewListing.js";
import { updateListingRoute } from "./updateListing.js";
import { deleteListingRoute } from "./deleteListing.js";

export default[
    addViewToListingRoute,
    getAllListingRoute,
    getListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
];