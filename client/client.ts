import { Question } from '../@types/Question';

((): void => {

    let questions: Question[] = [];

    function render(): void {
        document.getElementById("Questions").innerHTML = questions.map(({title, content}) => `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">${title}</h6>
                    <small class="muted">${content}</small>
                </div>
            </li>
        `).join("");
    }

    async function init(): Promise<void> {
        
        const request = await fetch("/questions");
        questions = await request.json();
        console.log(questions);
        render();
    }

    init();

    async function handleSubmitQuestiomForm(): Promise<void> {
        
        event.preventDefault();
        const title: string = document.forms["QuestionForm"][0].value;
        const content: string = document.forms["QuestionForm"][1].value;
        
        const request = await  fetch(`/new?title=${title}&content=${content}`);
        const json = await request.json();

        questions = json.questions;
        render();
    }

    document.getElementById("QuestionForm").addEventListener("submit", handleSubmitQuestiomForm);

})();