exports.handler = async function (event, context) {
  console.log("We are server side");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
