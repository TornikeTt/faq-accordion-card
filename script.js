let faq_container = document.querySelector(".faq-container");

faq_container.addEventListener("click", (e) => {
    // Select all FAQ items, questions, answers, and arrow icons
    let faq_item = document.querySelectorAll(".faq-item");
    let faq_question = document.querySelectorAll(".question-text");
    let faq_answer = document.querySelectorAll(".faq-answer");
    let faq_arrow = document.querySelectorAll(".arrow-icon");

    for (let i = 0; i < faq_item.length; i++) {
        // Check if the clicked target is a question or arrow
        if (e.target == faq_question[i] || e.target == faq_arrow[i]) {
            // Loop through each FAQ item to hide answers and reset styles for non-selected items
            for (let j = 0; j < faq_item.length; j++) {
                if (j !== i) {
                    // Hide the answer
                    faq_answer[j].classList.remove("show_answer");

                    // Reset the styles for non-selected questions and arrows
                    faq_question[j].style.fontWeight = "";
                    faq_arrow[j].style.transform = "rotate(0deg)";
                    faq_arrow[j].style.transition = "transform 1s";
                }
            }

            // Toggle the visibility of the selected FAQ answer
            faq_answer[i].classList.toggle("show_answer");

            // Update the styles based on whether the answer is shown
            if (faq_answer[i].classList.contains("show_answer")) {
                faq_question[i].style.fontWeight = "bold";
                faq_arrow[i].style.transform = "rotate(180deg)";
                faq_arrow[i].style.transition = "transform 1s";
            } else {
                faq_question[i].style.fontWeight = "";
                faq_arrow[i].style.transform = "rotate(0deg)";
                faq_arrow[i].style.transition = "transform 1s";
            }
        }
    }
});
