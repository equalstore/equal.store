function gotologin() {
    var logindisplay = document.getElementById("homelogin");

    // Check current display style and toggle
    if (logindisplay.style.display === "none" || logindisplay.style.display === "") {
        logindisplay.style.display = "block"; // Show the logindisplay
    } else {
        logindisplay.style.display = "none"; // Hide the logindisplay
    }
}


let index = 0;

        // Function to move the slide
        function moveSlide1(step) {
            const slides = document.querySelectorAll('.slider-wrapper1 .scrollnow');
            
            index = (index + step + slides.length) % slides.length;
            const newTransformValue = -index * 100;
            document.querySelector('.banner-scroll').style.transform = `translateX(${newTransformValue}%)`;
        }

        // Autoplay function
        function autoplay() {
            moveSlide1(1); // Move to the next slide
        }

        // Set autoplay interval (every 3 seconds)
        setInterval(autoplay, 6000); 






       
        


        const swiper = new Swiper('.slider-wrapper', {
            // Optional parameters
           grabcursor: true,
            loop: true,
            spaceBetween: 30,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                800: {
                    slidesPerView: 2
                },
                1000: {
                    slidesPerView: 3
                },
                1424: {
                    slidesPerView: 4
                },
                
            }

          
            
          });
