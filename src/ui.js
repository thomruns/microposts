class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }
  // display posts
  showPosts(posts) {
     let output = '';
     posts.forEach((post) => {
       output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fas fa-pencil-alt"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
       `;
     });
     this.post.innerHTML = output;
  }
  // show an alert
  showAlert(msg, className) {
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(msg));
    // get parent 
    const container = document.querySelector('.postsContainer');
    // get posts
    const posts = document.querySelector('#posts');
    // insert alert div
    container.insertBefore(div, posts);

    // set timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }
  // clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if(currentAlert) {
      currentAlert.remove();
    }
  }
  // clear input fields
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
  // fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
  }
}

export const ui = new UI();