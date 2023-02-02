import { getAllListingRoute } from "./getAllListings";
import { getListingRoute } from "./getLisitng";
import { addViewToListingRoute } from "./addViewToListing";//Not Working
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";

export default[
    addViewToListingRoute,
    getAllListingRoute,
    getListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
];