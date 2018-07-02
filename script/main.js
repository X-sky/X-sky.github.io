onload = function () {
  $("#load-mask").hide();
  $("body").css("overflowY", "auto");
};
(function () {
  if (window.ActiveXObject) {
    var uA = navigator.userAgent;
    var ieVersion = uA.match(/MSIE\s(\d+)/)[1];
    if (ieVersion < 10) {
      document.getElementsByTagName("body")[0].style.fontSize = ".5rem";
      document.getElementsByTagName("body")[0].innerHTML = "抱歉，请使用IE10及以上版本或其他现代浏览器浏览，如火狐、chrome、360等";
    }
  }
  // banner动画
  function bannerAni() {
    $("#line-top").css({
      "transform-origin": "50% " + (parseFloat($(".banner-center .pic-container").css("height"))/2 + parseFloat($("#line-top").css("height"))) + "px",
    });
    $("#line-bottom").css({
      "transform-origin": "50% " + "-" + (parseFloat($(".banner-center .pic-container").css("height"))/2 - 1) + "px",
    });
    $("#line-left").css({
      "transform-origin": (parseFloat($(".banner-center .pic-container").css("width"))/2) + (parseFloat($("#line-left").css("width"))) + "px " + "50%",
    });
    $("#line-right").css({
      "transform-origin": "-" + (parseFloat($(".banner-center .pic-container").css("width"))/2) + "px " + "50%",
    });
  }
  bannerAni();
  $(window).on("resize", bannerAni);
  // 技能内容栏
  (function () {
    var $title = $(".center .description h3");
    var $content = $(".center .description p").eq(0);
    $(".skill-per .progress .in").on("mouseover", function () {
      $title.addClass("fadeIn").text($(this).text());
      $content.addClass("fadeIn").text($(this).next().text());
      setTimeout(function () {
        $title.removeClass("fadeIn");
        $content.removeClass("fadeIn");
      }, 500);
      $content.next().hide();
    });
    $(".skill-per .progress .in").on("click", function () {
      $title.addClass("fadeIn").text($(this).text());
      $content.addClass("fadeIn").text($(this).next().text());
      setTimeout(function () {
        $title.removeClass("fadeIn");
        $content.removeClass("fadeIn");
      }, 500);
      $content.next().hide();
    });
  })();
  //作品列表按钮事件
  $(".spec a").on("click", function (e) {
    e.preventDefault();
  });
  // 作品情态框
  var modalURI = [
      {
        pic: "image/static-simple.jpg",
        link: "http://wwww.baidu.com",
        info: "css3简单基本盒模型快速构图，背景图呼吸动画，兼容支持IE10以上",
      },
      {
        pic: "image/netease.jpg",
        link: "http://wwww.163.com",
        info: "HTML+CSS简单绘制老版网易注册页面，配合原生JS和正则表达式实现网页表单监听验证",
      },
      {
        pic: "image/firm-homepage.jpg",
        link: "http://wwww.google.com",
        info: "HTML5+CSS3搭建多页面中小型企业网站，百分比流体布局，前后台数据交互动态页面，简单利用ajax从其余网站API获取JSON/XML数据",
      },
      {
        pic: "image/Bootstrap.jpg",
        link: "http://wwww.qq.com",
        info: "无插件手打代码实现自适应布局，手机、平板、笔记本、PC多端适应",
      },
      {
        pic: "image/player.jpg",
        link: "http://wwww.taobao.com",
        info: "HTML5+CSS3+原生JS实现网页版播放器效果，多个自制按钮操作当前媒体流，媒体时间数据实时可视化操作，有单曲循环、列表循环、顺序播放三种模式，且实现模式下应有的歌曲自动播放效果"
      }
  ];
  $(".hexagon").each(function (index) {
    $(this).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".spec>p").addClass("fadeIn").text(modalURI[index].info).css("font-size", ".25rem");
      setTimeout(function () {
        $(".spec>p").eq(0).removeClass("fadeIn");
      }, 500);
      $(".modal .modal-pic img")[0].src = modalURI[index].pic;
      $(".modal").addClass("on");
      setTimeout(function () {
        $(".modal-wrapper").addClass("show");
      }, 100);
    });
    $(this).on("mouseenter", function (e) {
      $(".spec>p").addClass("fadeIn").text(modalURI[index].info).css("font-size", ".25rem");
      setTimeout(function () {
        $(".spec>p").eq(0).removeClass("fadeIn");
      }, 500);
    });
  })
  $(".modal").on("click", function () {
    $(".modal-wrapper").removeClass("show");
    setTimeout(function () {
      $(".modal").removeClass("on");      
    }, 200);
  });
  // 滚动监听
  var sectionList = document.getElementsByTagName("section");
  var oNav = document.getElementsByTagName("nav")[0];
  var oBanner = document.getElementById("banner");
  var bannerHeight;
  var scrollTop;
  var scrollTimer;
  window.onscroll = function () {
    bannerHeight = oBanner.offsetHeight;
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > bannerHeight) {
      if (oNav.style.position !== "fixed") {
        oNav.style.position = "fixed";
      }
    } else if (oNav.style.position !== "relative") {
      oNav.style.position = "relative";
    }
    if (scrollTop >= (sectionList[0].offsetTop * .7) && scrollTop < sectionList[0].offsetTop + sectionList[0].offsetHeight * .7) {
      $("nav .link-right a").removeClass("on").eq(0).addClass("on");
    } 
    else if (scrollTop >= (sectionList[1].offsetTop * .7) && scrollTop < sectionList[1].offsetTop + sectionList[1].offsetHeight * .7) {
      $("nav .link-right a").removeClass("on").eq(1).addClass("on");
    }
    else if (scrollTop >= (sectionList[2].offsetTop * .7) && scrollTop < sectionList[2].offsetTop + sectionList[2].offsetHeight * .7) {
      $("nav .link-right a").removeClass("on").eq(2).addClass("on");
    }
    else if (scrollTop >= (sectionList[3].offsetTop * .7) && scrollTop < sectionList[3].offsetTop + sectionList[3].offsetHeight * .7) {
      $("nav .link-right a").removeClass("on").eq(3).addClass("on");
    } else {
      $("nav .link-right a").removeClass("on");
    }
  };
  $("nav .link-right a").each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop < sectionList[index].offsetTop) {
        scrollTimer = setInterval(function () {
          document.documentElement.scrollTop += 50;
          document.body.scrollTop += 50;
          if (scrollTop >= sectionList[index].offsetTop) {
            document.documentElement.scrollTop = sectionList[index].offsetTop;
            document.body.scrollTop = sectionList[index].offsetTop;
            clearInterval(scrollTimer);
          }
        }, 30);
      }
      if (scrollTop > sectionList[index].offsetTop) {
        scrollTimer = setInterval(function () {
          document.documentElement.scrollTop /= 1.1;
          document.body.scrollTop /= 1.1;
          if (scrollTop <= sectionList[index].offsetTop) {
            document.documentElement.scrollTop = sectionList[index].offsetTop;
            document.body.scrollTop = sectionList[index].offsetTop;
            clearInterval(scrollTimer);
          }
        }, 50);
      }
    });
  })
})();