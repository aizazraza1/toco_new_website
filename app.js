document.getElementById('loadMoreBtn').addEventListener('click', function() {
    var hiddenBoxes = document.querySelectorAll('.more-box');
    
    hiddenBoxes.forEach(function(box) {
        box.classList.remove('d-none');
        box.classList.add('animate__animated', 'animate__fadeIn'); 
    });

    this.style.display = 'none';
});




// faq tabs 

function openTab(evt, tabName) {
  // 1. Saare Content Panes ko chupayen
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab_pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active_pane"); // Hide content
  }

  // 2. Saare Buttons se 'active' class hatayen
  tablinks = document.getElementsByClassName("tab_btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // 3. Click kiye gaye Tab ka content dikhayein
  document.getElementById(tabName).classList.add("active_pane");
  
  // 4. Click kiye gaye Button ko active karein
  evt.currentTarget.classList.add("active");
}



// blog 

function filterSelection(category) {
    var items = document.getElementsByClassName('item');
    if (category === 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}

