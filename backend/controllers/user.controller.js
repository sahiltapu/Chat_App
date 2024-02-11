import User from "../models/user.model.js";


export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._Id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId }
        }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUserForSidebar", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
