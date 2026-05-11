const pdfData = {

    'Programming Languages': {
        color: 'vibrant-pink',
        items: [
            {
                name: 'Python',
                icon: 'assets/cover_pages/python.png',
                topic: 'Programming Languages',
                files: ['Python_Programming.pdf']
            }
        ]
    },

    'Version Control': {
        color: 'vibrant-purple',
        items: [
            {
                name: 'Git & GitHub',
                icon: 'assets/cover_pages/git.png',
                topic: 'Version Control',
                files: ['git.pdf']
            }
        ]
    },

    'DevOps & Containerization': {
        color: 'vibrant-orange',
        items: [
            {
                name: 'Docker',
                icon: 'assets/cover_pages/docker.png',
                topic: 'Devops & Containerization',
                files: ['Docker_notes.pdf']
            },

            {
                name: 'Kubernetes',
                icon: 'assets/cover_pages/kubernetes.png',
                topic: 'Devops & Containerization',
                files: ['kubernetes.pdf']
            }
        ]
    },

    'Operating Systems & Linux': {
        color: 'vibrant-teal',
        items: [
            {
                name: 'Linux',
                icon: 'assets/cover_pages/linux.png',
                topic: 'OS',
                files: ['linux.pdf']
            },

            {
                name: 'Operating System',
                icon: 'assets/cover_pages/os.png',
                topic: 'OS',
                files: ['OS_basics.pdf']
            }
        ]
    },

    'Databases': {
        color: 'vibrant-pink',
        items: [
            {
                name: 'PostgreSQL',
                icon: 'assets/cover_pages/postgresql.png',
                topic: 'Database',
                files: ['postgresql.pdf']
            }
        ]
    }
};

function generateTopicCards() {

    const container =
        document.getElementById('topicsContainer');

    container.innerHTML = '';

    const notesGrid =
        document.createElement('div');

    notesGrid.className =
        'notes-grid-grouped';

    Object.entries(pdfData).forEach(
        ([groupName, groupData]) => {

        const groupCard =
            document.createElement('div');

        groupCard.className =
            'group-card';

        const groupHeader =
            document.createElement('div');

        groupHeader.className =
            `group-header ${groupData.color}`;

        const title =
            document.createElement('h2');

        title.textContent = groupName;

        groupHeader.appendChild(title);

        groupCard.appendChild(groupHeader);

        const groupContent =
            document.createElement('div');

        groupContent.className =
            'group-content';

        groupData.items.forEach((itemData) => {

            itemData.files.forEach((file) => {

                const pdfPath =
                    `pdfs/${itemData.topic}/${file}`;

                const pdfItem =
                    document.createElement('div');

                pdfItem.className =
                    'pdf-item';

                const leftSection =
                    document.createElement('div');

                leftSection.className =
                    'pdf-left';

                const iconWrapper =
                    document.createElement('div');

                iconWrapper.className =
                    'pdf-thumbnail-wrapper';

                iconWrapper.onclick = () =>
                    viewPDF(pdfPath);

                const icon =
                    document.createElement('img');

                icon.src = itemData.icon;

                icon.alt = itemData.name;

                icon.className =
                    'pdf-icon';

                iconWrapper.appendChild(icon);

                const info =
                    document.createElement('div');

                info.className =
                    'pdf-info';

                const name =
                    document.createElement('h3');

                name.textContent =
                    itemData.name;

                info.appendChild(name);

                leftSection.appendChild(iconWrapper);

                leftSection.appendChild(info);

                pdfItem.appendChild(leftSection);

                groupContent.appendChild(pdfItem);
            });
        });

        groupCard.appendChild(groupContent);

        notesGrid.appendChild(groupCard);
    });

    container.appendChild(notesGrid);
}

function viewPDF(filePath) {
    window.open(filePath, '_blank');
}

document.addEventListener(
    'DOMContentLoaded',
    () => {
        generateTopicCards();
    }
);