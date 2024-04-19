module.exports.handler = async (event) => {
  console.log(event);

  const posts = [
    {
      id: "1",
      title: "Post One",
    },
    {
      id: "2",
      title: "Post Two",
    },
  ];
  if (event.field === "listPosts") {
    return posts;
  } else {
    return posts[event.args.id];
  }
};
