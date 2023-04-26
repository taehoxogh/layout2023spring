
const amount = document.querySelector('.amount');

let count = 0;
  


document
    .addEventListener('DOMContentLoaded', () => {
        
        setInterval(() => {
            count++;
            if (count > 99) {
              count = 0;
            }
            amount.setAttribute('data-count', count);
          }, 1000);

        document
             .getElementById('button')
             .addEventListener('click', () => {
                 document
                     .getElementById('healthbar2')
                     .classList
                     .toggle('high')
             })

        
        document
             .getElementById('healthbar1')
             .addEventListener('click', () => {
                 document
                     .getElementById('healthbar1')
                     .classList
                     .toggle('high')
             })

        

        document
             .getElementById('healthbar2')
             .addEventListener('click', () => {
                 document
                     .getElementById('healthbar2')
                     .classList
                     .toggle('low')
             })

        
     
        document
                  .getElementById('monsterButton')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('monsterBox')
                          .classList
                          .add('active')
                  })

        document
                  .getElementById('potionButton')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('potionBox')
                          .classList
                          .add('active')
                  })

        document
                  .getElementById('battleButton')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('battleBox')
                          .classList
                          .add('active')
                  })

        document
                  .getElementById('GiveUpButton')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('giveupexplanation')
                          .classList
                          .add('active')
                  })



        document
                  .getElementById('MaxPotion')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('maxpotionexplanation')
                          .classList
                          .add('active')
                  })


        document
                  .getElementById('RegPotion')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('regpotionexplanation')
                          .classList
                          .add('active')
                  })


        document
                  .getElementById('HyperPotion')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('hyperpotionexplanation')
                          .classList
                          .add('active')
                  })


        document
                  .getElementById('SuperPotion')
                  .addEventListener('click', () => {
                     const actionBoxes = document.getElementsByClassName('bottomboxinner3')
                     for (item of actionBoxes) {
                         item.classList.remove('active')
                     }
                     document
                          .getElementById('superpotionexplanation')
                          .classList
                          .add('active')
                  })






            })


            const buttons = document.querySelectorAll('.menulist1');

            for (const button of buttons) {
              button.addEventListener('click', () => {
                for (const button of buttons) {
                  button.classList.remove('active');
                }
                button.classList.add('active');
              });

              
            }


