

const colorBlog = document.querySelector('#list');
colorBlog.style.color= 'blue'


// add list 

const li = document.createElement('li');
li.innerText = 'blog-5';
const bloglist = document.getElementById('bloglist');
bloglist.appendChild(li);

// add article
const article = document.createElement('article');
article.classList.add ('blog');
const h3 = document.createElement('h3');
h3.innerText = 'the blog 5';
const p = document.createElement('p');
p.innerText = 'Sit reprehenderit dignissimos optio nemo ratione id quod voluptates quos, eveniet fugit beatae laboriosam exercitationem veritatis, unde sed ea quam incidunt perspiciatis commodi accusantium magni eius. Voluptatem voluptatum porro nam?';

article.appendChild(h3);
article.appendChild(p);

const blogse = document.getElementById('blogs');
blogse.appendChild(article);



const blogs =document.getElementsByClassName('blog');
for(const blog of blogs){

    blog.style.border = '3px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.padding = '15px';
    blog.style.margin = '10px';
}