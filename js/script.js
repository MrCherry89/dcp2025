$(document).ready(function () {

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".leave-request-form").validate({

  });


  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $('.card-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
  
      const target = tab.getAttribute('data-tab');
      contents.forEach(c => {
        c.classList.remove('active');
        if (c.getAttribute('data-content') === target) {
          c.classList.add('active');
        }
      });
    });
  });
  
  function initAllTabSliders() {
    document.querySelectorAll('.tab-content .popup-slider').forEach(slider => {
      const $slider = $(slider);
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    });
  }
  
  initAllTabSliders(); // вызываем один раз при загрузке
  

  
  
  document.querySelectorAll('.checkerboard-items').forEach(items => {
    items.addEventListener('click', function (e) {
      if (!isMobile()) return;
  
      const cube = e.target.closest('.cube');
      if (!cube) return;
  
      currentCube = cube;
      showPopup(); // мобилка — центр
    });
  
    items.addEventListener('mouseover', function (e) {
      if (isMobile()) return;
  
      const cube = e.target.closest('.cube');
      if (!cube) return;
  
      currentCube = cube;
  
      const rect = cube.getBoundingClientRect();
      showPopup(rect.right, rect.top);
    });
  
    items.addEventListener('mouseout', function (e) {
      if (isMobile()) return;
  
      const related = e.relatedTarget;
      if (!popup.contains(related)) hidePopup();
    });
  });
  
  $('.main-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
        }
      },
    ]
  });

  $('.concept-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
        }
      },
    ]
  });

  $('.about-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerPadding: '20px',
        }
      },
    ]
  });

  $(".info-wrapper .more").on("click", function(){
    $(this).closest(".wrapper").find(".info-item").removeClass("hide");
  })

  $(".drop-icon").on("click", function(){
    $(".menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  })

  $(".menu-wrap .close").on("click", function(){
    $(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  })

});
