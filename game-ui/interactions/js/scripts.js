


document
    .addEventListener('DOMContentLoaded', () => {
        
        
        const stopwatch = document.getElementById('stopwatch')
        stopwatch.addEventListener('click', (e) => {
            stopwatch.classList.toggle('running')
        })
        

        
        document
             .getElementById('hpbar1')
             .addEventListener('click', () => {
                 document
                     .getElementById('hpbar1')
                     .classList
                     .toggle('middle')
             })

        document
             .getElementById('hpbar2')
             .addEventListener('click', () => {
                 document
                     .getElementById('hpbar2')
                     .classList
                     .toggle('low')
             })

        document
             .getElementById('bottomboxinner2')
             .addEventListener('click', () => {
                 document
                     .getElementById('bottomboxinner2')
                     .classList
                     .toggle('clicked')
             })

            })


