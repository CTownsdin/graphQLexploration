const graphql = require('graphql');
// const _ = require('lodash');

const { 
	GraphQLObjectType, 
	GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const users = [
	{ id: '23', firstName: 'Bill', age: 20 },
	{ id: '47', firstName: 'Samantha', age: 21 }
];

// what an object looks like, a User object
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLString },
		firstName: { type: GraphQLString },
		age: { type: GraphQLInt }
	}
});

// RootQuery:  the entrypoint into the data graph, graph is relational data, relations are "edges"
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {  // resolve:  most important func, used to return the actual piece of data.
				// finding a user
				// return _.find(users, { id: args.id });
				return users.find(u => u.id === args.id )
			}
		}
	}
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
