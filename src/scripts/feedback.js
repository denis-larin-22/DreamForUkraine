import Note from './note.js';
import Request from './request.js';

const ONE = 1;

class Feedback {
    request = new Request;
    feedbackForm = document.querySelector('#feedbackForm');
    feedbackText = document.querySelector('#feedbackText');
    feedbackEmail = document.querySelector('#feedbackEmail');

    async login(name, email) {
        const token = await this.request.login(name, email);
        return token;
    }

    async postFeedback() {
        const token = await this.login('den4ikdev', 'dream');

        this.feedbackForm.addEventListener('click', (event) => {
            event.preventDefault();
            if(event.target.id === 'feedbackSubmit') {
                const inputText = this.feedbackText.value;
                const inputEmail = this.feedbackEmail.value;
                const inputResult = `${inputText}/${inputEmail}`;

                const noteFeedback = new Note(inputResult, ONE);
                this.request.postNote(noteFeedback, token);
                this.getThanks();
            }
        });
    }

    getThanks() {
        this.feedbackForm.innerHTML = `
            <p class="feedback__thanks md-text">Дякую за зворотній зв'язок. Все буде Україна!</p>
        `;
    }
}

const admin = new Feedback();
admin.postFeedback();
