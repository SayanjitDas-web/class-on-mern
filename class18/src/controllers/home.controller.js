exports.index = async (req , res) => {
    try {
        res.status(200).json({message:"hello from express"});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

exports.date = async (req, res) => {
    try {
        const currentDate = Date().toString()
        res.status(200).json({currentDate});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}