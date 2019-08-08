const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql')
const UserSchema = require('../models/User')
const PositionSchema = require('../models/Position')
const CategorySchema = require('../models/Category')
const { login, registration } = require('../controllers/auth')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLID) },
        message: { type: GraphQLString },
        token: { type: GraphQLString }
    })
})

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
        user: {
            type: UserType,
            resolve({ userId }, args) {
                return UserSchema.findById(userId)
            }
        },
        position: {
            type: new GraphQLList(PositionType),
            resolve(parent, args) {
                return PositionSchema.find({ categoryId: parent.id })
            }
        }
    })
})

const PositionType = new GraphQLObjectType({
    name: 'Position',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        cost: { type: new GraphQLNonNull(GraphQLInt) },
        categoryId: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLID },
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        category: {
            type: CategoryType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, { id }) {
                return CategorySchema.findById(id)
            }
        },
        position: {
            type: PositionType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, { id }) {
                return PositionSchema.findById(id)
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return login(parent, args)
            }
        },
        registration: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return registration(parent, args)
            }
        },
        addCategory: {
            type: CategoryType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                userId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, { name, userId }) {
                return new CategorySchema({
                    name,
                    userId
                }).save()
            }
        },
        addPosition: {
            type: PositionType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                cost: { type: new GraphQLNonNull(GraphQLInt) },
                categoryId: { type: new GraphQLNonNull(GraphQLID) },
                userId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, { name, userId, categoryId, cost }) {
                return new PositionSchema({
                    name,
                    userId,
                    cost,
                    categoryId
                }).save()
            }
        },
        updateCategory: {
            type: CategoryType,
            args: {
                id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                // userId: { type: GraphQLID },
            },
            resolve(parent, { name, id }) {
                return CategorySchema.findByIdAndUpdate(
                    id,
                    { $set: { name } },
                    { new: true }
                )
            }
        },
        updatePosition: {
            type: PositionType,
            args: {
                id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                cost: { type: new GraphQLNonNull(GraphQLInt) },
                categoryId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, { name, cost, id, categoryId }) {
                return PositionSchema.findByIdAndUpdate(
                    id,
                    { $set: { name, cost, categoryId } },
                    { new: true }
                )
            }
        },
        removeCategory: {
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return CategorySchema.findByIdAndDelete(id)
            }
        },
        removeCategory: {
            type: CategoryType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return CategorySchema.findByIdAndDelete(id)
            }
        },
        removePosition: {
            type: CategoryType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return PositionSchema.findByIdAndDelete(id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})