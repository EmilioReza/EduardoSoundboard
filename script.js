const soundboard = document.getElementById('soundboard');

// Function to create a button
function createButton(text, soundFile) {
  const button = document.createElement('button');
  button.textContent = text;
  
  button.addEventListener('click', () => {
    const audio = new Audio(soundFile); // Create an Audio object for the corresponding sound
    audio.play(); // Play the sound
  });
  
  return button;
}

// Create buttons individually
soundboard.appendChild(createButton('FUCK 1', 'sounds/sound1.mp3'));
soundboard.appendChild(createButton('FUCK 2', 'sounds/sound2.mp3'));
soundboard.appendChild(createButton('FUCK 3', 'sounds/sound3.mp3'));
soundboard.appendChild(createButton('FUCK 4', 'sounds/sound4.mp3'));
soundboard.appendChild(createButton('FUCK 5', 'sounds/sound5.mp3'));
soundboard.appendChild(createButton('FUCK 6', 'sounds/sound6.mp3'));
soundboard.appendChild(createButton('FUCK 7-10', 'sounds/sound7.mp3'));
soundboard.appendChild(createButton('GET FUCKED', 'sounds/sound8.mp3'));
soundboard.appendChild(createButton('FUCK YOUUUU FUCK YOUUUU', 'sounds/sound9.mp3'));
soundboard.appendChild(createButton('FUCKING DAMMIT', 'sounds/sound10.mp3'));
soundboard.appendChild(createButton('I got this bitch on lock', 'sounds/sound11.mp3'));
soundboard.appendChild(createButton('It was a sign from God ... FUCK', 'sounds/sound12.mp3'));
soundboard.appendChild(createButton('AAAAAAA HHHHHHH', 'sounds/sound13.mp3'));
soundboard.appendChild(createButton('AH AH AH', 'sounds/sound14.mp3'));
soundboard.appendChild(createButton('aaaahhhh', 'sounds/sound15.mp3'));
soundboard.appendChild(createButton('HA HO HA HO HA HO', 'sounds/sound16.mp3'));
soundboard.appendChild(createButton('HA HE HA HE', 'sounds/sound17.mp3'));
soundboard.appendChild(createButton('HA HO', 'sounds/sound18.mp3'));
soundboard.appendChild(createButton('DOGSHIT', 'sounds/sound19.mp3'));
soundboard.appendChild(createButton('bitch ass', 'sounds/sound20.mp3'));
soundboard.appendChild(createButton('DOGSHIT DOGSHIT', 'sounds/sound21.mp3'));
soundboard.appendChild(createButton('uuugh', 'sounds/sound22.mp3'));
soundboard.appendChild(createButton('PAUSE', 'sounds/sound23.mp3'));
soundboard.appendChild(createButton('Placeholder', 'sounds/sound24.mp3'));
soundboard.appendChild(createButton('jacking off to this video', 'sounds/sound25.mp3'));
soundboard.appendChild(createButton('That was some pussy shit', 'sounds/sound26.mp3'));
soundboard.appendChild(createButton('get FUCKED you little bitch ass', 'sounds/sound27.mp3'));
soundboard.appendChild(createButton('YOU FUCKING SUCK YOU LITTLE BITCH ASS CUNT', 'sounds/sound28.mp3'));
soundboard.appendChild(createButton('Fucking dogshit ass motherfucker you little bitch ass', 'sounds/sound29.mp3'));
soundboard.appendChild(createButton('Skibidi Eduardo', 'sounds/sound30.mp3'));
