import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    
    const token = authHeader.split(" ")[1]; // Extract the actual token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Ensure role exists and is either 'msme' or 'investor'
        if (!decoded.role || (decoded.role !== "investor" && decoded.role !== "msme")) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

export default authMiddleware;
