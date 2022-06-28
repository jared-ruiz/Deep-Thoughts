const { User, Thought } = require('../models');

//resolvers can accept 4 arguments (parent, args, context, info)
const resolvers = {
    Query: {
        //get all thoughts by username
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 })
        },

        //get thought by id
        thought: async (parent, { _id }) => {
            return Thought.findOne({_id});
        },

        //get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts') 
        },
        
        //get user by id
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts')
        }
    }
}

module.exports = resolvers;