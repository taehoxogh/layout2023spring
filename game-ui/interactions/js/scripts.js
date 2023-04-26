


document
    .addEventListener('DOMContentLoaded', () => {
        
        
        const stopwatch = document.getElementById('stopwatch')
        stopwatch.addEventListener('click', (e) => {
            stopwatch.classList.toggle('running')
        })
        

        
        document
             .getElementById('healthbar1')
             .addEventListener('click', () => {
                 document
                     .getElementById('healthbar1')
                     .classList
                     .toggle('middle')
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
                          .getElementById('GiveUpBox')
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
