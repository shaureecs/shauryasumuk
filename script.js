const projectData = {
    1: {
        title: "Enterprise Dashboard System",
        role: "Lead UX/UI Designer",
        description: "Designed and shipped 10+ complex dashboards and scalable design systems for enterprise clients, significantly reducing design-to-dev handoff time.",
        imageBg: "linear-gradient(135deg, #3D5AFE 0%, #D500F9 100%)",
        details: "This project involved creating a scalable design system for multiple product lines including clients like PepsiCo and Mars Wrigley. I conducted user research, usability testing, and stakeholder interviews to define the user journeys and translate complex business requirements into intuitive, data-informed interfaces. A major part of the outcome was building and maintaining component libraries in Figma, which enabled faster prototyping and established a consistent design language across multiple concurrent client projects."
    },
    2: {
        title: "Universal Enterprise Hub",
        role: "Sr. UX Designer (Admin Platform)",
        description: "A global centralized platform for tool access control and company-wide communications, designed to streamline enterprise workflows.",
        imageBg: "url('assets/1.svg') center/cover no-repeat",
        details: `
            <div class="case-study-content">
                <section class="cs-section">
                    <h4>The Challenge</h4>
                    <p>The company faced significant operational hurdles due to fragmented internal systems. Tool access was managed on one site, while company news resided on another. Critical backend processes were opaque, making it difficult for Admins to monitor user permissions and system health effectively.</p>
                </section>
                
                <section class="cs-section">
                    <h4>The Solution</h4>
                    <p>I led the design of a 'Universal Tool'—a centralized hub that unified access control and internal communications. This platform provides a seamless experience for users across multiple countries, while offering a powerful Admin view for granular control.</p>
                </section>

                <div class="cs-gallery">
                    <img src="assets/2.svg" alt="Admin Dashboard View" class="cs-img">
                    <img src="assets/3.svg" alt="User Access Management" class="cs-img">
                </div>

                <section class="cs-section">
                    <h4>Pain Points Addressed</h4>
                    <ul class="cs-list">
                        <li><strong>Centralization:</strong> Eliminated the need to jump between disparate platforms for news and tools.</li>
                        <li><strong>Admin Efficiency:</strong> Simplified the process of adding users and changing permissions through a dedicated Admin view.</li>
                        <li><strong>Transparency:</strong> Brought backend monitoring to the forefront, allowing for real-time tracking of system processes.</li>
                        <li><strong>Global Reach:</strong> Designed to work seamlessly across all countries the company operates in.</li>
                    </ul>
                </section>

                <div class="cs-gallery">
                    <img src="assets/4.svg" alt="Global News Feed" class="cs-img">
                    <img src="assets/5.svg" alt="Release Celebrations" class="cs-img">
                </div>

                <section class="cs-section">
                    <h4>Key Features</h4>
                    <ul class="cs-list">
                        <li><strong>Universal Dashboard:</strong> A single entry point for all enterprise tools.</li>
                        <li><strong>Integrated News Feed:</strong> Real-time updates on company releases, celebrations, and announcements.</li>
                        <li><strong>Role-Based Access Control:</strong> Precise management of user permissions at a global scale.</li>
                        <li><strong>Backend Monitoring UI:</strong> Intuitive visualization of complex backend operations.</li>
                    </ul>
                </section>

                <div class="cs-gallery-grid">
                    <img src="assets/6.svg" alt="Design Detail 1" class="cs-img">
                    <img src="assets/7.svg" alt="Design Detail 2" class="cs-img">
                    <img src="assets/8.svg" alt="Design Detail 3" class="cs-img">
                    <img src="assets/9.svg" alt="Design Detail 4" class="cs-img">
                    <img src="assets/10.svg" alt="Design Detail 5" class="cs-img">
                    <img src="assets/11.svg" alt="Design Detail 6" class="cs-img">
                    <img src="assets/12.svg" alt="Design Detail 7" class="cs-img">
                    <img src="assets/13.svg" alt="Design Detail 8" class="cs-img">
                </div>
            </div>
        `
    },
    3: {
        title: "Healthcare Digital Platforms",
        role: "UX Designer",
        description: "End-to-end design for multiple digital products and healthcare consumer platforms, focusing on patient engagement.",
        imageBg: "linear-gradient(135deg, #00E676 0%, #00B0FF 100%)",
        details: "Researched and recommended features across 5+ products by conducting competitive analysis and usability studies, ensuring solutions aligned with real user needs. Partnered closely with engineering teams throughout the full product lifecycle to evaluate technical feasibility, refine designs, and ensure accurate implementation. I produced high-fidelity wireframes, interactive prototypes, and design specifications in Figma and Adobe XD, which drastically improved design review efficiency with stakeholders."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const hoverTargets = document.querySelectorAll('.hover-target');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const updateCursor = () => {
        // Fast follow for main cursor
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        // Slow follow for border
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

        requestAnimationFrame(updateCursor);
    };
    updateCursor();

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });

    // Magnetic Button Effect
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 40; // max displacement
            this.style.transform = `translate(${x / rect.width * strength}px, ${y / rect.height * strength}px)`;
            this.style.transition = 'none';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = `translate(0px, 0px)`;
            this.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');
    const workItems = document.querySelectorAll('.work-item');
    const modalBg = document.querySelector('.modal-bg');

    const openModal = (projectId) => {
        const data = projectData[projectId];
        if(data) {
            modalBody.innerHTML = `
                <div class="modal-header-img" style="background: ${data.imageBg};"></div>
                <h2 class="modal-title">${data.title}</h2>
                <div class="modal-role">Role: ${data.role}</div>
                <p class="modal-desc">${data.description}</p>
                <p class="modal-text">${data.details}</p>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Need to re-bind hover target for modal close if it was dynamically added
        }
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    workItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            openModal(projectId);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modalBg.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Intersection Observer for scroll animations (if any specific elements need it)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Assuming we want to animate work items
    const animateElements = document.querySelectorAll('.work-item, .about-content, .exp-item, .contact-info, .contact-form-wrapper');
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
});