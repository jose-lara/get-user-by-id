const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const handlerFunction = async (event, context, callback) => {
  try {
    const userId = '53830990-0648-11ea-b462-0d12a5f4d5ff';
    const options = {
      TableName: 'User',
      Key: { userId }
    };
    const user = await docClient.get(options).promise();
    const result = {
      statusCode: 200,
      body: JSON.stringify(user.Item),
      headers: { 'content-type': 'application/json' }
    };

    callback(null, result);
  } catch (e) {
    return context.fail(e);
  }
};
exports.handler = handlerFunction;
