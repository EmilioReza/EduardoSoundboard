// List of sound files (add your filenames here)
const sounds = [
    { name: "Sound 1", file: "sounds/sound1.mp3" },
    { name: "Sound 2", file: "sounds/sound2.mp3" },
    // Add more sound objects as needed
  ];
  
  // Function to create buttons and play sounds
  const soundboard = document.getElementById("soundboard");
  
  sounds.forEach(sound => {
    const button = document.createElement("button");
    button.innerText = sound.name;
    button.addEventListener("click", () => {
      const audio = new Audio(sound.file);
      audio.play();
    });
    soundboard.appendChild(button);
  });
  