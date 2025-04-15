

// const scrollDistance = 857; // 每次滚动的距离，可以根据需要调整

function scrollLeft_f(carouselId, scrollDistance) {
  const carousel = document.getElementById(carouselId);
  // console.log(`当前scrollLeft值: ${carousel.scrollLeft}`);
  carousel.scrollLeft -= scrollDistance;
  // console.log(`更新后的scrollLeft值: ${carousel.scrollLeft}`);
}

function scrollRight(carouselId, scrollDistance) {
  const carousel = document.getElementById(carouselId);
  // console.log(`当前scrollLeft值: ${carousel.scrollLeft}`);
  carousel.scrollLeft += scrollDistance;
  // console.log(`更新后的scrollLeft值: ${carousel.scrollLeft}`);
}
