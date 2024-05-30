document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "First Blog Post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor ex sed vestibulum. Nam fermentum faucibus libero, at ultrices velit auctor sed."
        },
        {
            title: "Second Blog Post",
            content: "Nulla facilisi. Donec at felis id dolor eleifend tempus. Vivamus tincidunt, augue a volutpat placerat, nisi tortor cursus mauris, id suscipit ligula magna at eros."
        }
        {
            title: "Second Blog Post",
            content: "Nulla facilisi. Donec at felis id dolor eleifend tempus. Vivamus tincidunt, augue a volutpat placerat, nisi tortor cursus mauris, id suscipit ligula magna at eros."
        }
        // Add more blog post objects as needed
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogPostsContainer.appendChild(postElement);
    });
});
