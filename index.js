const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const handlerFunction = async (event, context, callback) => {
  try {
    const { userId } = event.pathParameters;
    const options = {
      TableName: 'User',
      Key: { userId }
    };
    const user = await docClient.get(options).promise();
    const result = {
      statusCode: 200,
      body: JSON.stringify(user.Item.active ? user.Item : {}),
      headers: { 'content-type': 'application/json' }
    };

    callback(null, result);
  } catch (e) {
    return context.fail(e);
  }
};
exports.handler = handlerFunction;
