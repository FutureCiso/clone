function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function loadingpage() {
  // intro imer
  var h5timer = document.querySelector(".part2 h5");
  var grow = 0;
  setInterval(function () {
    if (grow < 100) {
      h5timer.innerHTML = grow++;
    } else {
      h5timer.innerHTML = grow;
    }
  }, 30);

  // intro strt and end
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    duration: 0.8,
    stagger: 0.2,
  });
  tl.to(".loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.5,
    display: "none",
  });
  tl.from("#page1", {
    y: 800,
    duration: 0.5,
    delay: 0.5,
    // opacity: 0,
    ease: Power4,
  });
  tl.from("#text1 ", {
    opacity: 0,
    delay: 0,
  });
  tl.from("#text1 h1, #text2  h1, #text3 h2, #text4 h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.8,
  });
  tl.from(".nav", {
    opacity: 0,
  });
}
function customcursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      top: dets.y,
      left: dets.x,
    });
  });
}
function videoCursor() {
  var vidCursor = document.querySelector(".video");
  vidCursor.addEventListener("mouseenter", function () {
    vidCursor.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        // opacity: "0",
        scale: 0,
        display: "none",
      });
      gsap.to(".vid-cursor", {
        left: dets.x - 300,
        top: dets.y - 160,
      });
    });
  });
  vidCursor.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      // opacity: "1",
      scale: 1,
      display: "initial",
    });
    gsap.to(".vid-cursor", {
      left: "75%",
      top: "10%",
    });
  });
  var videoCon = document.querySelector(".video");
  var video = document.querySelector(".video video");
  var vidImage = document.querySelector(".video img");
  var flag = 0;
  videoCon.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      (video.style.opacity = 1),
        (vidImage.style.opacity = 0),
        (document.querySelector(
          ".vid-cursor"
        ).innerHTML = `<i class="ri-pause-fill"></i>`);
      gsap.to(".vid-cursor", {
        scale: 0.6,
      });
      flag = 1;
    } else {
      video.pause();
      (video.style.opacity = 0),
        (vidImage.style.opacity = 1),
        (document.querySelector(
          ".vid-cursor"
        ).innerHTML = `<i class="ri-play-fill"></i>`);
      gsap.to(".vid-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
}
function page1Flag() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y,
    });
  });
  document
    .querySelector("#page1 #text3")
    .addEventListener("mouseenter", function () {
      gsap.to("#flag", {
        opacity: 1,
      });
    });
  document
    .querySelector("#page1 #text3")
    .addEventListener("mouseleave", function () {
      gsap.to("#flag", {
        opacity: 0,
      });
    });
}
function iconHover() {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icons.forEach((othericon) => {
        if (othericon !== icon) {
          othericon.style.borderRadius = "50%";
          othericon.style.transition = "all ease 0.2s";
          othericon.style.border = "none";
          othericon.style.backgroundColor = "#ffa63d";
        }
      });
    });
    icon.addEventListener("mouseout", () => {
      icons.forEach((othericon) => {
        othericon.style.borderRadius = "7px";
        othericon.style.transition = "all ease 0.2s";
        othericon.style.border = "2px solid #ffa63d";
        othericon.style.backgroundColor = "black";
      });
    });
  });
}
function UnderLine() {
  gsap.to("#page3 .underline", {
    width: "65vw",
    duration: 1,
    scrollTrigger: {
      trigger: "#page3 .underline",
      scroller: ".main",
      start: "top 90%",
      end: "top 100%",
      // scrub :2,
    },
  });
  gsap.to("#page4 .underline", {
    width: "65vw",
    duration: 1,
    scrollTrigger: {
      trigger: "#page4 .underline",
      scroller: ".main",
      // markers: true,
      start: "top 90%",
      end: "top 100%",
      // scrub :2,
    },
  });
  gsap.to("#page7 .underline", {
    width: "55vw",
    duration: 1,
    scrollTrigger: {
      trigger: "#page7 .underline",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 90%",
      // scrub: 2,
    },
  });
}
loadingpage();
customcursor();
locomotive();
videoCursor();
page1Flag();
iconHover();
UnderLine();

document.querySelector("#submit").addEventListener("click", function () {
  alert("Thank You ❤");
});
// sheryAnimation();

// magnet effect
// Shery.makeMagnet(".nav-part2 h4", {});

// function sheryAnimation() {
//   Shery.imageEffect(".image .img", {
//     style: 5,
//     config: {
//       a: { value: 0.46, range: [0, 30] },
//       b: { value: 0.75, range: [-1, 1] },
//       zindex: { value: -9996999, range: [-9999999, 9999999] },
//       aspect: { value: 0.7702936379658031 },
//       ignoreShapeAspect: { value: true },
//       shapePosition: { value: { x: 0, y: 0 } },
//       shapeScale: { value: { x: 0.5, y: 0.5 } },
//       shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
//       shapeRadius: { value: 0, range: [0, 2] },
//       currentScroll: { value: 0 },
//       scrollLerp: { value: 0.07 },
//       gooey: { value: true },
//       infiniteGooey: { value: false },
//       growSize: { value: 4, range: [1, 15] },
//       durationOut: { value: 1, range: [0.1, 5] },
//       durationIn: { value: 1.5, range: [0.1, 5] },
//       displaceAmount: { value: 0.5 },
//       masker: { value: false },
//       maskVal: { value: 1, range: [1, 5] },
//       scrollType: { value: 0 },
//       geoVertex: { range: [1, 64], value: 1 },
//       noEffectGooey: { value: true },
//       onMouse: { value: 0 },
//       noise_speed: { value: 5.95, range: [0, 10] },
//       metaball: { value: 0.43, range: [0, 2] },
//       discard_threshold: { value: 0.5, range: [0, 1] },
//       antialias_threshold: { value: 0, range: [0, 0.1] },
//       noise_height: { value: 0.5, range: [0, 2] },
//       noise_scale: { value: 10, range: [0, 100] },
//     },
//     gooey: true,
//   });
// }

// gsap.to("#page3 .underline", {
//   width: "65vw",
//   delay: 10,
//   duration:1,
//   ScrollTrigger: ("#page3 .underline", {

//   })
// })
