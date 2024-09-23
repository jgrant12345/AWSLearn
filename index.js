const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
const express = require('express')

const app = express()
const port = 8080

const client = new DynamoDBClient({region: "us-west-2"});

async function getPokemon(){
  const input = {
    "Key": {
      "Name": {
        "S" : "Tododile"
      }
    },
    "TableName": "Pokemon"
  }
  const command = new GetItemCommand(input);
  const response = await client.send(command);
  return response;

}

app.get('/', async (req, res) => {
  const newPokemon = await getPokemon();
  console.log(newPokemon["Item"]["Name"]["S"])
  res.send("Fortune of the day app coming soon!!!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})