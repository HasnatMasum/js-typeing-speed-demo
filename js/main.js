// Typeing Demo text

const typeingText = [
  "Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he. ",
  "Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton. ",
  "Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded. ",
  "May indulgence difficulty ham can put especially. Bringing remember for supplied her why was confined. Middleton principle did she procuring extensive believing add. Weather adapted prepare oh is calling. These wrong of he which there smile to my front. He fruit oh enjoy it of whose table. Cultivated occasional old her unpleasing unpleasant. At as do be against pasture covered viewing started. Enjoyed me settled mr respect no spirits civilly. ",
  "Offered say visited elderly and. Waited period are played family man formed. He ye body or made on pain part meet. You one delay nor begin our folly abode. By disposed replying mr me unpacked no. As moonlight of my resolving unwilling. ",
  "Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led. Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up me contained he pronounce do. Excellence inquietude assistance precaution any impression man sufficient. "
];

// Selecting Elements
const demoTxt = document.getElementById("demo-txt");
const editor = document.getElementById("editor");
const button = document.getElementById("button");
let startTime, endTime;

//First hide two things
demoTxt.style.display = "none";
editor.style.display = "none";

//Func gameStart
const startGame = () => {
  button.innerText = "Check Speed";
  demoTxt.style.display = "block";
  editor.style.display = "block";
  editor.disabled = false;
  editor.value = "";
  let randNumber = Math.floor(Math.random() * typeingText.length);
  demoTxt.innerText = typeingText[randNumber];
};

//Func endGame
const endGame = () => {
  demoTxt.style.display = "block";
  editor.style.display = "block";
  button.innerText = "Start Again";
  editor.disabled = true;

  let date = new Date();
  endTime = date.getTime();

  let totalTime = (endTime - startTime) / 1000;
  let totalType = editor.value;
  let totalWordType = wordCounter(totalType);
  let speed = Math.round((totalWordType / totalTime) * 60);
  if (isNaN(speed)) {
    speed = 0;
  }
  let finalMsg = `Your typeing speed is <span class="text-custom">${speed}</span> words per minute.`;
  finalMsg += compareWords(demoTxt.innerText, totalType);
  demoTxt.innerHTML = finalMsg;
};

//Word compare
const compareWords = (demoText, typeText) => {
  let dwc = demoText.split(" ").filter(i => i);
  let twc = typeText.split(" ").filter(i => i);
  let count = 0;
  dwc.forEach((word, index) => {
    if (word == twc[index]) {
      count++;
    }
  });
  let incorrectWord = twc.length - count;

  let errorWords = dwc.length - count;
  return ` <span class="text-custom2">${count}</span> words is correct out of <span class="text-warning">${dwc.length}</span> words and total rest of words is <span class="text-warning">${errorWords}</span> and total incorrect words is <span class="text-danger">${incorrectWord}</span>`;
};

//Word Counter
const wordCounter = word => {
  //let totalWord = word.split(" ").length;
  let totalWord = word.split(" ").filter(i => i).length;
  return totalWord;
};

//Add Event listener for text area
editor.addEventListener("click", function() {
  let date = new Date();
  startTime = date.getTime();
});

//Add Event listener
button.addEventListener("click", function() {
  if (this.innerText.toUpperCase() == "START TYPEING") {
    startGame();
  } else if (this.innerText.toUpperCase() == "CHECK SPEED") {
    endGame();
  } else if (this.innerText.toUpperCase() == "START AGAIN") {
    startGame();
  }
});
