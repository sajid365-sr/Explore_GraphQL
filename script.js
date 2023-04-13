/** @format */


let query = `
    {
      books{
        name
        id
        authorId
      }
    }
`
fetch("http://localhost:5000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
  body: JSON.stringify({query})
})
  .then((res) => res.json())
  .then((data) => console.log(data.data.books));
