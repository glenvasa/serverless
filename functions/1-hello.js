// domain/.netlify/functions/1-hello

// const person = { name: "john" };

// fn name handler is async b/c returns a promise
// netlify provides the event and context
exports.handler = async (event, context, cb) => {
  console.log(context);
  return {
    statusCode: 200,
    body: "Our first Netlify Function Example",
    // fn response must be a string; if an object, must be stringified
    // body: JSON.stringify(person),
  };
};
