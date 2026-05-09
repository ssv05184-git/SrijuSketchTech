const pdfData = {

    'Programming Languages': {
        color: 'vibrant-pink',
        items: [
            {
                name: 'Python',
                icon: 'assets/python.png',
                topic: 'Python',
                files: ['python.pdf']
            }
        ]
    },

    'Version Control': {
        color: 'vibrant-purple',
        items: [
            {
                name: 'Git & GitHub',
                icon: 'assets/git.png',
                topic: 'GitHub',
                files: ['git.pdf']
            }
        ]
    },

    'DevOps & Containerization': {
        color: 'vibrant-orange',
        items: [
            {
                name: 'Docker',
                icon: 'assets/docker.png',
                topic: 'Docker',
                files: ['docker.pdf']
            },

            {
                name: 'Kubernetes',
                icon: 'assets/kubernetes.png',
                topic: 'Kubernetes',
                files: ['kubernetes.pdf']
            }
        ]
    },

    'Operating Systems & Linux': {
        color: 'vibrant-teal',
        items: [
            {
                name: 'Linux',
                icon: 'assets/linux.png',
                topic: 'Linux',
                files: ['linux.pdf']
            },

            {
                name: 'Operating System',
                icon: 'assets/os.png',
                topic: 'OperatingSystem',
                files: ['operating_system.pdf']
            }
        ]
    },

    'Databases': {
        color: 'vibrant-pink',
        items: [
            {
                name: 'PostgreSQL',
                icon: 'assets/postgresql.png',
                topic: 'PostgreSQL',
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