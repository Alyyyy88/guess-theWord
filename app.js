const words = ["example", "javascript", "coding", "challenge"];

const wordInput = document.querySelector(".word-input");

const randomBtn = document.querySelector(".random-btn");

const chars = document.querySelector(".word-char");

const resetBtn = document.querySelector(".reset-btn");

let inputArr = [];

const createInputs = (word)=>{

  chars.innerHTML = "";
  inputArr = [];

  for (let index = 0; index < word.length; index++) {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("char");
    chars.append(input);
    inputArr.push(input);
  };

  

};

const logInputValues = () => {
  inputArr.forEach((input, index) => {
    console.log(`Input ${index + 1}:`, input.value);
  });
};







function shuffleWord(word) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join(" ");
}


// resetBtn.addEventListener("click",logInputValues);

randomBtn.addEventListener("click" ,()=>{
  const randomWord = Math.floor(Math.random() * words.length);
  wordInput.textContent = shuffleWord(words[randomWord]);
  createInputs(words[randomWord]);
});

// we need to take input value from each input [ ]
// check every input === the char of it is index or not []
// if iput === char and index the focus be green []
// else red and one trie will be lost []
// if all tries ended you lost []
// if all input === char and the word SUCCESS [ ]




