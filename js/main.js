document.addEventListener('DOMContentLoaded', () => { 
  loadFaq();
})


function loadFaq() {
  const div = document.createElement('div');
  div.classList.add('container');
  div.innerHTML = `
   <h2 class="text-center mb-4"> Frequently Asked Questions</h2>
    <div class="accordion accordion-flush" id="questions">
    ${faqList.map((item, index) => {
      const { question, answer } = item;
    const text = `
         <div class="accordion-item">
          <div class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#question-${index+1}">
              ${question}
          </div>
          <div id="question-${index+1}" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
            ${answer}
            </div>
          </div>
        </div>
      `;
      console.log(text)
      return text;
    }).join('')}
    </div>
  `;



  document.getElementById('faq-section').appendChild(div);
}


window.addEventListener("scroll",(e)=>{
  
})