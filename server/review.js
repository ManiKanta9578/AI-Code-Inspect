
async function generateReview(code) {
    try {

        console.log(code);

        return "review generated.";
    } catch (error) {
        console.error(error);
        throw new Error(error.message || "Failed to generate review");
    }
}

export default generateReview;