import Equb from "../models/equb.model.js";
import { generateLink } from "../config/equbLink.js";
export const createEqub = async (req, res) => {
    try {
        const { name, rules, payout, money, max_users, payout_amount } = req.body;
        const equb = await Equb.create({
            name,
            rules,
            payout,
            money,
            max_users,
            payout_amount,
            join_link: generateLink(),
        });
        res.status(201).json({ equb, message: "Equb created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEqubs = async (req, res) => {
    try {
        const equbs = await Equb.find().populate("joined_users");
        res.status(200).json({ equbs, message: "Equbs fetched successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEqub = async (req, res) => {
    try {
        const { id } = req.params;
        const equb = await Equb.findById(id).populate("joined_users");
        if (!equb) {
            return res.status(404).json({ message: "Equb not found" });
        }
        res.status(200).json({ equb, message: "Equb fetched successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateEqub = async (req, res) => {
    try {
        const { id } = req.params;
        const equb = await Equb.findByIdAndUpdate(id, req.body, { new: true });
        if (!equb) {
            return res.status(404).json({ message: "Equb not found" });
        }
        res.status(200).json({ equb, message: "Equb updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteEqub = async (req, res) => {
    try {
        const { id } = req.params;
        const equb = await Equb.findByIdAndDelete(id);
        if (!equb) {
            return res.status(404).json({ message: "Equb not found" });
        }
        res.status(200).json({ equb, message: "Equb deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
