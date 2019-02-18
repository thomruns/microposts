import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);
// listen for submit post
document.querySelector('.post-submit').addEventListener('click', submitPost);
// listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);
// listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// get existing posts
function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

// submit new post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title: title, // can be shortcut as simply title; shown for clarity only
    body: body // equivalent to body
  }

  // create post
  http.post('http://localhost:3000/posts', data)
    .then(data => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err))
}

// delete post
function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Removed', 'alert alert-success');
        getPosts();
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  e.preventDefault();
}

// enable edit state
function enableEdit(e) {
  // get the target's id, title content, and body content
  const id = e.target.parentElement.dataset.id;
  const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
  const body = e.target.parentElement.previousElementSibling.textContent;
  // create a data object
  const data = {
    id,
    title,
    body
  }

  // fill form w current post

  ui.fillForm(data);
  if(e.target.parentElement.classList.contains('edit')) {
    console.log(`ID: ${data.id}, Title: ${data.title}, Body: ${data.body}`);
  }
  e.preventDefault();
}



