// script.js
import { Subscriber } from './subscriber.js';

// Create a new Subscriber instance (manual data entry)
const currentUser = new Subscriber(
    1,
    'Patrick Rukundo',
    'pattyruk',
    'patrick.ruku@email.com',
    ['Software Reviews', 'Sports Blogs'],
    ['Basket Ballers', 'Programming Pack'],
    true
);
// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-btn');
    const postBtn = document.getElementById('post-button');
    const accountBtn = document.getElementById('account-info-btn');
    const postText = document.getElementById('post-text');
    const postImage = document.getElementById('post-image');
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');
    const accountModal = document.getElementById('account-pop-up');
    const accountInfo = document.getElementById('pop-up-info');

    // 1. Enable button
    postText.addEventListener('input', () => {
        const hasText = postText.value.trim().length > 0;
        const hasImage = postImage.value.length > 0;
        postBtn.disabled = !hasText || !hasImage;
    });
    // 2. Post Form 
    const createPostElement = (text, imgSrc) => {
        const post = document.createElement('div');
        post.className = 'post';

        // Profile Header & Time
        const now = new Date();
        const timeString = `${now.toLocaleDateString()}  ${now.toLocaleTimeString()}`
        post.innerHTML = 
            `<div class="post-header">
                <div class="profile-pic"><img src="./assets/media/profilepic.jpg"></div>
                <div class="post-info">
                    <h3>Patrick Rukundo</h3>
                    <span>${timeString}</span>
                </div>
            </div>
            <p>${text}</p>`;
        if (imgSrc) {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'post-image-display';
            post.appendChild(img);
        }
        return post;
    };

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // add image
        const file = postImage.files[0];
        let imageUrl = null;
        if (file) {
            imageUrl = URL.createObjectURL(file);
        }
        
        // combine and post 
        const newPost = createPostElement(postText.value, imageUrl);
        postsContainer.prepend(newPost);

        //reset form
        postForm.reset();
        postBtn.disabled = true;
    
    });

    //Account Pop-Up
    accountBtn.addEventListener('click', () => {
        accountInfo.innerHTML = currentUser.getInfo();
        accountModal.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
        accountModal.style.display = 'none';
    });
});
