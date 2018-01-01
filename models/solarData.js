const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sdSchema = new Schema({
    
    jan: {
        type: int,
        notNull: true
    },

    feb: {
        type: int,
        notNull: true
    },
    mar: {
        type: int,
        notNull: true
    },
    apr: {
        type: int,
        notNull: true
    },
    may: {
        type: int,
        notNull: true
    },
    jun: {
        type: int,
        notNull: true
    },
    jul: {
        type: int,
        notNull: true
    },
    aug: {
        type: int,
        notNull: true
    },
    sep: {
        type: int,
        notNull: true
    },
    oct: {
        type: int,
        notNull: true
    },
    nov: {
        type: int,
        notNull: true
    },
    dec: {
        type: int,
        notNull: true
    }
});

return SolarData;
const SolarData = mongoose.model("SolarData", sdSchema);
module.exports = SolarData;