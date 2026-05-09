// PDF Data Structure - organized by technology groups

const pdfData = {

    'Programming Languages': {
        color: 'vibrant-pink',
        items: [
            {
                name: 'Python',
                icon: 'assets/python.png',
                topic: 'Python',
                files: ['Python_Programming.pdf']
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
                files: ['Docker_notes.pdf']
            },

            {
                name: 'Kubernetes',
                icon: 'assets/kubernetes.png',
                topic: 'Kubernetes',
                files: ['kubernetes.pdf']
            }
        ]
    }
};

/* =========================================
   GENERATE PDF CARDS
========================================= */

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

        // GROUP CARD

        const groupCard =
            document.createElement('div');

        groupCard.className = 'group-card';

        // HEADER

        const groupHeader =
            document.createElement('div');

        groupHeader.className =
            `group-header ${groupData.color}`;

        const title =
            document.createElement('h2');

        title.textContent = groupName;

        groupHeader.appendChild(title);

        groupCard.appendChild(groupHeader);

        // GROUP CONTENT

        const groupContent =
            document.createElement('div');

        groupContent.className =
            'group-content';

        // ITEMS

        groupData.items.forEach((itemData) => {

            itemData.files.forEach((file) => {

                const pdfPath =
                    `pdfs/${itemData.topic}/${file}`;

                // PDF ITEM

                const pdfItem =
                    document.createElement('div');

                pdfItem.className =
                    'pdf-item';

                // LEFT SECTION

                const leftSection =
                    document.createElement('div');

                leftSection.className =
                    'pdf-left';

                // THUMBNAIL WRAPPER

                const iconWrapper =
                    document.createElement('div');

                iconWrapper.className =
                    'pdf-thumbnail-wrapper';

                // CLICK IMAGE TO OPEN PDF

                iconWrapper.onclick = () =>
                    viewPDF(pdfPath);

                // ICON

                const icon =
                    document.createElement('img');

                icon.src = itemData.icon;

                icon.alt = itemData.name;

                icon.className =
                    'pdf-icon';

                iconWrapper.appendChild(icon);

                // INFO

                const info =
                    document.createElement('div');

                info.className =
                    'pdf-info';

                // TITLE

                const name =
                    document.createElement('h3');

                name.textContent =
                    itemData.name;

                // LABEL

                const label =
                    document.createElement('span');

                label.className =
                    'pdf-label';

                label.textContent =
                    'Click Image To Open Notes';

                // APPEND INFO

                info.appendChild(name);

                info.appendChild(label);

                // APPEND LEFT

                leftSection.appendChild(iconWrapper);

                leftSection.appendChild(info);

                // APPEND TO ITEM

                pdfItem.appendChild(leftSection);

                // APPEND TO GROUP

                groupContent.appendChild(pdfItem);
            });
        });

        groupCard.appendChild(groupContent);

        notesGrid.appendChild(groupCard);
    });

    container.appendChild(notesGrid);
}

/* =========================================
   VIEW PDF
========================================= */

function viewPDF(filePath) {

    window.open(filePath, '_blank');
}

/* =========================================
   CONTACT FORM
========================================= */

function handleSubmit(event) {

    event.preventDefault();

    const form = event.target;

    const name =
        form.querySelector(
            'input[type="text"]'
        ).value;

    const email =
        form.querySelector(
            'input[type="email"]'
        ).value;

    const message =
        form.querySelector(
            'textarea'
        ).value;

    const submitBtn =
        form.querySelector('.submit-btn');

    // LOADING

    submitBtn.disabled = true;

    submitBtn.innerHTML =
        'Sending... ⏳';

    // EMAILJS

    emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'Sriju'
        }
    )

    .then(function(response) {

        console.log(
            'SUCCESS!',
            response.status,
            response.text
        );

        showNotification(
            `Thanks ${name}! 🎉 Your message has been sent successfully!`
        );

        form.reset();

        submitBtn.disabled = false;

        submitBtn.innerHTML =
            'Send Message ✉️';

    })

    .catch(function(error) {

        console.error(
            'FAILED...',
            error
        );

        showNotification(
            'Oops! Something went wrong 😢 Please try again.'
        );

        submitBtn.disabled = false;

        submitBtn.innerHTML =
            'Send Message ✉️';
    });
}

/* =========================================
   NOTIFICATION
========================================= */

function showNotification(message) {

    const notification =
        document.createElement('div');

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background:
            linear-gradient(
                135deg,
                #FF6B9D 0%,
                #9D4EDD 100%
            );

        color: white;

        padding: 18px 28px;

        border-radius: 15px;

        font-family: 'Comfortaa', sans-serif;

        box-shadow:
            0 10px 30px rgba(0,0,0,0.2);

        z-index: 1000;

        animation: slideIn 0.3s ease;
    `;

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.style.animation =
            'slideOut 0.3s ease';

        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 3000);
}

/* =========================================
   ANIMATIONS
========================================= */

const style =
    document.createElement('style');

style.innerHTML = `

    @keyframes slideIn {

        from {
            transform: translateX(400px);
            opacity: 0;
        }

        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {

        from {
            transform: translateX(0);
            opacity: 1;
        }

        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;

document.head.appendChild(style);

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        'click',
        function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute('href')
            );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* =========================================
   SCROLL ANIMATIONS
========================================= */

const observer =
    new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';

            entry.target.style.transform =
                'translateY(0)';
        }
    });

}, {
    threshold: 0.1
});

/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

    generateTopicCards();

    setTimeout(() => {

        document.querySelectorAll(
            '.group-card, .pdf-item, .about-card'
        ).forEach(el => {

            el.style.opacity = '0';

            el.style.transform =
                'translateY(20px)';

            el.style.transition =
                'all 0.6s ease';

            observer.observe(el);
        });

    }, 100);
});

/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById('year').textContent =
    `© ${new Date().getFullYear()} Doodle Notes. Made with ❤️`;

/* =========================================
   CONSOLE LOG
========================================= */

console.log(
    '%c✨ Welcome to Doodle Notes! ✨',
    'font-family: Comfortaa; font-size: 20px; color: #FF1493;'
);

console.log(
    '%cHave fun exploring!',
    'font-family: Comfortaa; font-size: 16px; color: #00D9FF;'
);