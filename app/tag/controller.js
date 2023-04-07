const Tag = require('./model');

const createData = async (req, res, next) => {
    try {
        let payload = req.body;
        let tag = new Tag(payload);
        await tag.save();
        return res.json(tag);
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

const updateData = async(req, res, next) => {
    try {
        let payload = req.body;
        let tag = await Tag.findByIdAndUpdate(req.params.id, payload, {new: true, runValidators: true });
        return res.json(tag);
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

const deleteData = async(req, res, next) => {
    try {
        let tag = await Tag.findByIdAndDelete(req.params.id);
        return res.json(tag);
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

const getData = async(req, res, next) => {
    try {
        let tag = await Tag.find();
        return res.json(tag);
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
}