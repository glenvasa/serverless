// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  console.log(context);
  return {
    statusCode: 200,
    body: "Our first Netlify function example",
  };
};
