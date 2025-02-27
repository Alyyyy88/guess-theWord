const words = ["example", "javascript", "coding", "challenge"];

const wordInput = document.querySelector(".word-input");

const randomBtn = document.querySelector(".random-btn");

const chars = document.querySelector(".word-char");

const inputArr = [];

const createInputs = (word)=>{

  chars.innerHTML = "";

  for (let index = 0; index < word.length; index++) {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("char");
    chars.append(input);
    inputArr.push(input);
  }

}



// const checkChar = ()=>{

// }

inputArr.forEach( input=>{
  input.addEventListener("input" , ()=>{
    console.log("input.value");
  })
})




function shuffleWord(word) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join(" ");
}

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




