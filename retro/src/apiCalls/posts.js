
const retrospectPostsAPI =`https://namenotesapi.herokuapp.com/posts`


export function all() {
    return fetch(retrospectPostsAPI)
        .then(res => res.json())
        // .then((data) => {
        //     console.log(data.logs)
        // })
        .catch(error => { console.log(error) })

}

export function store(post) {
  return fetch('https://namenotesapi.herokuapp.com/post/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .catch(error => {console.log(error)})
}
