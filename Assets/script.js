const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const cancelBtn = document.getElementById('cancelBtn');
const messageForm = document.getElementById('messageForm');
const addMessageBtn = document.getElementById('addMessageBtn');

// open modal
function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// close modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    messageForm.reset();
}

// event listeners
addMessageBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
