let blogs = [
     {
          question : 'Question-1: What are the different ways to select an element in the DOM?',
          answer : 'Selects an element by its id,Selects elements by their class name,Selects elements by their tag name,Selects the first element that matches a CSS selector and etc'
     },
     {
          question : 'Question-2: What is the difference between innerHTML, innerText, and textContent ?',
          answer : 'The innerHTML property gets or sets the HTML content  inside an element. \n The innerText property gets or sets the visible text content inside an element, excluding HTML tags.'
     },
     {
          question : 'Question-3: What is event delegation in the DOM?',
          answer : 'Event delegation is a technique in the DOM  where you attach a single event listener to a parent element instead of attaching individual event listeners to each child element. This approach allows you to handle events for multiple child elements dynamically, even if they are added or removed from the DOM after the event listener is set.'
     },
     {
          question : 'Question-4: What is event bubbling in the DOM?',
          answer : 'Event bubbling is when an event that happens on an element "bubbles up" to its parent elements. This means that after the event happens on the target element, it also triggers the same event on the parent elements, one by one, until it reaches the top of the page.'
     },
     {
          question : 'Question-5: How do you create, add, and remove elements using JavaScript?',
          answer : "create a new element : document.createElement('div'), add the created element : parent.appendChild(div), remove an element : parent.removeChild(div)"
     }
]

const blogBody = document.querySelector('#blogs')
const totalBlog = blogs.length;
for (let x = 0; x < totalBlog; x++) {
     const {question,answer} =blogs[x]
     const blog = document.createElement('div')
     blog.classList.add('blog')
     blog.innerHTML = `
               <h3 class="question">${question}</h3>
               <hr class="task-body-hr"> 
               <p class="answer">${answer}</p>
     `
     blogBody.appendChild(blog)
}


const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('click',function(){
     window.location.href = '/index.html'; 
})




