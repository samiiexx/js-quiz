// Copyright 2021 sfchi
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const correctAnswers = ["A", "B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const resultScore = document.querySelector(".result-score");

let score = 0;
let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check Answers
    userAnswers.forEach((answer, i) => {
        if (answer === correctAnswers[i]) {
            score += 20;
        }
    });

    // Show Result
    scrollTo(0, 0);
    result.classList.remove("d-none");

    // Animate Result
    let output = 0;
    let timer = setInterval(() => {
        resultScore.textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 30);
});
