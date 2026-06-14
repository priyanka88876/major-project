const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:  {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url:{
        type: String,
        default:
         "https://in.images.search.yahoo.com/search/images?p=images.unsplash.com%2Fphoto&fr=mcafee&type=E210IN826G0&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1625505826533-5c80aca7d157%3Fixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0YXJkZWNlciUyMHBsYXlhfGVufDB8fDB8fHww%26fm%3Djpg%26q%3D60%26w%3D3000#id=36&iurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1625505826533-5c80aca7d157%3Fixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0YXJkZWNlciUyMHBsYXlhfGVufDB8fDB8fHww%26fm%3Djpg%26q%3D60%26w%3D3000&action=click",
  
        set: (v) => v === ""
         ? "https://in.images.search.yahoo.com/search/images?p=images.unsplash.com%2Fphoto&fr=mcafee&type=E210IN826G0&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1625505826533-5c80aca7d157%3Fixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0YXJkZWNlciUyMHBsYXlhfGVufDB8fDB8fHww%26fm%3Djpg%26q%3D60%26w%3D3000#id=36&iurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1625505826533-5c80aca7d157%3Fixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0YXJkZWNlciUyMHBsYXlhfGVufDB8fDB8fHww%26fm%3Djpg%26q%3D60%26w%3D3000&action=click"
        : v,
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;