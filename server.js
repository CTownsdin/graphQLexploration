const express = require('express')
const app = express()
const expressGraphQL = require('express-graphql')
const schema = require('./schema');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/graphql', expressGraphQL({ 
  schema,
  graphiql: true 
}));   // use dev tool: graphiql, to test graphQL

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
