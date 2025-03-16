import Assessment from "../models/assessment.model.js";

// Mark an assessment as complete
export const markAssessmentComplete = async (req, res) => {
    try {
        const { userId, moduleId } = req.body;
        console.log("Marking assessment as complete for:", {
            userId,
            moduleId,
        });

        // Check if assessment already exists
        let assessment = await Assessment.findOne({
            user: userId,
            module: moduleId,
        });
        console.log("Existing assessment:", assessment);

        if (assessment) {
            console.log("Assessment already exists");
            return res
                .status(400)
                .json({ message: "Assessment already completed" });
        }

        // Create new assessment completion record
        assessment = new Assessment({
            user: userId,
            module: moduleId,
            completedAt: new Date(),
        });

        await assessment.save();
        console.log("New assessment saved:", assessment);

        res.status(200).json({
            message: "Assessment marked as complete",
            assessment: {
                _id: assessment._id,
                user: assessment.user,
                module: assessment.module,
                completedAt: assessment.completedAt,
            },
        });
    } catch (error) {
        console.error("Error in markAssessmentComplete:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

// Get completed assessments for a user
export const getCompletedAssessments = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("Fetching completed assessments for user:", userId);

        const completedAssessments = await Assessment.find({ user: userId })
            .populate("module", "name moduleNumber")
            .sort({ completedAt: -1 });

        console.log("Found completed assessments:", completedAssessments);

        res.status(200).json(
            completedAssessments.map((assessment) => ({
                _id: assessment._id,
                user: assessment.user,
                module: assessment.module._id, // Send just the module ID
                completedAt: assessment.completedAt,
            }))
        );
    } catch (error) {
        console.error("Error in getCompletedAssessments:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
