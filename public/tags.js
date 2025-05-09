document.addEventListener('DOMContentLoaded', function () {
    const tagInput = document.getElementById('tag-input');
    const tagList = document.getElementById('tag-list');
    const tagsHidden = document.getElementById('tags-hidden');
    let tags = [];

    function updateHiddenInput() {
        tagsHidden.value = JSON.stringify(tags);
    }

    function createTagElement(tag) {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.innerHTML = `
            ${tag}
            <span class="remove-tag">&times;</span>
        `;

        tagElement.querySelector('.remove-tag').addEventListener('click', () => {
            tags = tags.filter(t => t !== tag);
            tagElement.remove();
            updateHiddenInput();
        });

        return tagElement;
    }

    tagInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = tagInput.value.trim();

            if (tag && !tags.includes(tag)) {
                tags.push(tag);
                tagList.appendChild(createTagElement(tag));
                tagInput.value = '';
                updateHiddenInput();
            }
        }
    });
}); 