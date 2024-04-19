module.exports.handler = async (event) => {
  const posts = [
    {
      id: "1",
      title: "Post One",
    },
    {
      id: "2",
      title: "Post Two",
    },
    {
      id: "3",
      title: "Post Three",
    },
  ];

  if (event.field === "getPost") {
    return posts.find((post) => post.id === event.arguments.id);
  } else {
    return posts;
  }
};
