export default {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../../static/css/parallax.css">
</head>
<body>
  <div class="img-1">
    <div class="img-text">
      <span class="border">
        Parallax Website
      </span>
    </div>
  </div>
  <section class="section section-light">
    <h2>Section One</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aliquid natus voluptates, eos hic soluta nemo et eveniet ea eaque, officiis. Amet reiciendis quas animi numquam, maiores, beatae ipsam incidunt vel enim earum, quos hic expedita asperiores minima ea doloribus consequatur sapiente ducimus deleniti distinctio officia nulla ullam sit! Impedit distinctio error nam voluptates. Doloremque veniam atque a doloribus sit cumque beatae, architecto eveniet adipisci similique voluptas quas, consequuntur distinctio, mollitia. Quos voluptate voluptas, aperiam perspiciatis repellat qui. Libero, est, fuga? Ipsam cupiditate sapiente, maiores et atque at, minus excepturi nobis, adipisci voluptates, iure ipsum corrupti eum maxime placeat? Libero.</p>
  </section>
  <div class="img-2">
    <div class="img-text">
      <span class="border">
        Image two text
      </span>
    </div>
  </div>
  <section class="section section-dark">
    <h2>Section Two</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aliquid natus voluptates, eos hic soluta nemo et eveniet ea eaque, officiis. Amet reiciendis quas animi numquam, maiores, beatae ipsam incidunt vel enim earum, quos hic expedita asperiores minima ea doloribus consequatur sapiente ducimus deleniti distinctio officia nulla ullam sit! Impedit distinctio error nam voluptates. </p>
  </section>
  <div class="img-3">
    <div class="img-text">
      <span class="border">
        Image three text
      </span>
    </div>
  </div>
  <section class="section section-dark">
    <h2>Section Three</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aliquid natus voluptates, eos hic soluta nemo et eveniet ea eaque, officiis. Amet reiciendis quas animi numquam, maiores, beatae ipsam incidunt vel enim earum, quos hic expedita asperiores minima ea doloribus consequatur sapiente ducimus deleniti distinctio officia nulla ullam sit! Impedit distinctio error nam voluptates. </p>
  </section>
  <div class="img-1">
    <div class="img-text">
      <span class="border">
        Parallax Website
      </span>
    </div>
  </div>
</body>
</html>`,
  css: `.img-1, .img-2, .img-3{
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /*
    fixed = parallax
    scroll = normal
  */
  background-attachment: fixed;
}
.img-1{
  background-image: url('../images/city-1.jpg');
  min-height: 100vh;

}
.img-2{
  background-image: url('../images/city-2.jpg');
  min-height: 400px;
  
}
.img-3{
  background-image: url('../images/city-3.jpg');
  min-height: 400px;
}
section{
  text-align: center;
  padding: 50px 80px;
}
.section-light{
  background-color: #f4f4f4;
  color: #666;
}
.section-dark {
  background-color: #282e34;
  color: #ddd;
}
.img-text{
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #000;
  font-size: 27px;
}
.img-text .border {
  background-color: #111;
  color: #fff;
  padding: 20px;
}`
}