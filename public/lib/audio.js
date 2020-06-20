/**
 * @description A small utility library for playing sounds, and setting audio to on/off.
 * @namespace Audio
 */
const Audio = {
  /** @property {boolean} playSounds flag indicating whether sounds should be played or not */
  playSounds: true,

  /**
   * Plays the audio file at the given url.
   * @param {string} url the url of the audio file to play
   */
  play(url) {
    if (!Audio.playSounds) {
      return;
    }

    const audioElements = document.querySelectorAll(`audio[src="${url}"]`);
    let audioElement;

    if (audioElements && audioElements.length) {
      [audioElement] = audioElements;
      audioElement.currentTime = 0;
      audioElement.playedOnce = false;
      try {
        audioElement.play();
        audioElement.playedOnce = true;
      } catch (error) {
        // swallow
      }
    } else {
      audioElement = document.createElement('audio');
      audioElement.setAttribute('src', url);

      audioElement.addEventListener(
        'ended',
        function onAudioEnd() {
          audioElement.playedOnce = true;
          audioElement.currentTime = 0;
        },
        false
      );

      audioElement.addEventListener('canplay', function onAudioCanPlay() {
        try {
          if (!audioElement.playedOnce) {
            audioElement.play();
          }
          audioElement.playedOnce = true;
        } catch (error) {
          // swallow
        }
      });

      document.body.appendChild(audioElement);
    }
  },

  /** Turn sounds on. Only affects Audio Lib API. */
  soundOn() {
    Audio.playSounds = true;
  },

  /** Turn sounds off. Only affects Audio Lib API. */
  soundOff() {
    Audio.playSounds = false;
  },

  /** Toggle sounds on/off. Only affects Audio Lib API. */
  toggleSound() {
    Audio.playSounds = !Audio.playSounds;
    return Audio.playSounds;
  },
};
