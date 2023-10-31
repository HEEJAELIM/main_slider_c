$(function () {
  var container = $(".slideshow"),
    slideGroup = container.find(".slideshow_slides"),
    slides = slideGroup.find("a"),
    nav = container.find(".slideshow_nav"),
    indicator = container.find(".indicator"),
    // 이미지의 갯수
    slideCount = slides.length,
    // 이미지의 늘어나는 양의 따라
    indicatorHtml = "",
    // 시작은 0
    currentIndex = 0,
    // 버튼 누르면 넘어가는 0.5초
    duration = 500,
    // 넘어가는 형식
    easing = "easeInOutExpo",
    // 슬라이드 넘어가는 3.5초
    interval = 3500,
    timer = "";

  // 슬라이드 가로 배열 left 0, 100%, 200% ~

  console.log(slides);

  // 각 슬라이드 이미지마다 -100% 주기
  slides.each(function (i) {
    var newLeft = i * 100 + "%";
    $(this).css({ left: newLeft });
    //  var i = 2; i = i+2; i +=2;
    // 이미지의 개수만큼 포인터도 추가
    indicatorHtml += '<a href="">' + (i + 1) + "</a>";
    console.log(indicatorHtml);
  }); //slides.each

  // A.text(B); a요소의 b의 내용을 글씨 형태로 추가
  // A.html(B); a요소의 b의 내용을 html 형태로 추가

  // 포인터 html에 추가
  indicator.html(indicatorHtml);

  // 슬라이드 이동 함수
  function goToSlide(index) {
    slideGroup.animate({ left: index * -100 + "%" }, duration);
    currentIndex = index;
    console.log(currentIndex);

    // updateNav(); // 처음인지, 마지막인지 검사
  }

  function updateNav() {
    // 처음 currentIndex 0 이면 이전 버튼이 안보이도록
    var navPrev = nav.find(".prev");
    var navNext = nav.find(".next");

    if (currentIndex == 0) {
      navPrev.addClass("disabled");
    } else {
      navPrev.removeClass("disabled");
    }

    // 마지막 currentIndex.length 이면 다음 버튼이 안보이도록

    if (currentIndex == slideCount - 1) {
      navNext.addClass("disabled");
    } else {
      navNext.removeClass("disabled");
    }
  }

  // 포인터 클릭시 이동 및 표시
  indicator.find("a").click(function (e) {
    {
      // 링크를 막기위해 preventDefault
      e.preventDefault();
      // 선택한 포인터의 순번 알기
      var idx = $(this).index();
      console.log(idx);
      // goToSlide 함수에 넘겨주기
      goToSlide(idx);
    }
  });

  // 좌우 버튼 이동하기
  // 다음 버튼 클릭 시 currentIndex + 1 -> gotoslide(?);
  // 이전 버튼 클릭 시 currentIndex - 1 -> gotoslide(?);

  // nav.find(".prev").click(function (e) {
  //   // 링크를 막기위해 preventDefault
  //   e.preventDefault();
  //   var i = currentIndex - 1;
  //   goToSlide(i);
  // });

  // nav.find(".next").click(function (e) {
  //   // 링크를 막기위해 preventDefault
  //   e.preventDefault();
  //   var i = currentIndex + 1;
  //   goToSlide(i);
  // });

  // 좌우 버튼 이동하기
  nav.find("a").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("prev")) {
      var i = currentIndex - 1;
      goToSlide(i);
    } else {
      var i = currentIndex + 1;
      goToSlide(i);
    }
  });

  updateNav();
});
