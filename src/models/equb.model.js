import mongoose from "mongoose";

const equbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rules: {
        type: String,
        required: true,
    },
    payout: {
        type: String,
        enum: ["weekly", "monthly", "bi-weekly"],
        default: "weekly",
        required: true,
    },
    money: {
        type: Number,
        required: [true, 'Money per user is required'],
        min: [100, 'Minimum contribution must be at least 100 ETB']
    },
    max_users: {
        type: Number,
        required: [true, 'Maximum number of users is required'],
        min: [2, 'At least 2 users are required for an equb'],
        max: [50, 'Maximum of 50 users allowed per equb']
    },
    payout_amount: {
        type: Number,
        required: true,
    },
    joined_users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
    },
    join_link: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
},
{
    timestamps: true,
});

const Equb = mongoose.model("Equb", equbSchema);

export default Equb;
