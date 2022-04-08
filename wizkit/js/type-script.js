document.addEventListener("DOMContentLoaded", function () {
  let letter = 0;
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis felis augue, a sodales eros lacinia vitae unc bibendum mollis magna quis convallis. Nam nec tincidunt enim, a ullamcorper ante. Suspendisse pretium arcu est, non dictum dui vulputate at. In rutrum mollis sem eget venenatis. Curabitur nulla nulla, ultrices ac dictum non, tincidunt vel tellus. Quisque eget lobortis dui, eget ornare turpis. Nunc pellentesque dui id erat imperdiet, nec placerat leo congue. Nam pretium ullamcorper laoreet. Suspendisse in purus suscipit, placerat metus id, malesuada tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum iaculis aliquam dui, nec sodales ipsum volutpat porttitor.";
  function typeText() {
    if (letter < text.length) {
      document.getElementById("type-js").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) + 50;
      setTimeout(typeText, speed);
    }
  }
  typeText();
});
