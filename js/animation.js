const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
      }
  
        i+=100;
  
        setTimeout(function() {
          increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED);
      }
    }

  function initIncreaseNumberAnimation() {
    const element = document.querySelector('.features__clients-count');

      increaseNumberAnimationStep(0, element, 5000); 
  }

  initIncreaseNumberAnimation();

  const other = document.querySelector('#budget');

  other.addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      let formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input');

      let input = document.createElement('input');
      input.setAttribute('placeholder', 'Введите ваш вариант');
      input.type = 'text';

      formContainer.appendChild(input);

      let form = document.querySelector('.form form');
      form.insertBefore(formContainer, document.querySelector('.form__submit'));
    } 

    let otherInput = document.querySelector('.form__other-input');


    if (event.target.value !== 'other' && Boolean(otherInput)) {
      let form = document.querySelector('.form form')
      form.removeChild(otherInput);
    }
  } )