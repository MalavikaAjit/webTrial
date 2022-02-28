
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

let port = process.env.PORT || 9000;



app.get("/", (req, res) => {

    res.send(`<!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  * {
      margin: 0px;
      padding: 0px;
  }

  .logo {
      width: 22%;
      display: flex;
      justify-content: start;
      align-items: revert;

  }

  .logo1 {
      width: 15%;
      display: flex;
      justify-content: end;
      align-items: revert;

  }

  .nav-list li a .sales {
      background-color: #f44336 !important;
      color:  #035626 !important;
      padding: 14px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
  }

  /* .nav-list li a:visited {
background-color: #f44336;
color: white;
padding: 14px 25px;
text-align: center;
text-decoration: none;
display: inline-block;
} */


  .logo img {
      width: 22%;
      /* border: 3px solid rgb(245, 245, 245);
      border-radius: 100px; */
  }

  #x {
      width: 21%;
      /* border: 3px solid rgb(245, 245, 245);
      border-radius: 100px; */
  }

  .navbar {
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      top: 0;
      cursor: pointer;
      border-bottom: 2px solid #030956;
      ;
  }


  .background {
      background: rgba(224, 219, 219, 0.03) url(../img/img3.jpg);
      background-size: cover;
      background-blend-mode: darken;
  }


  .nav-list {
      /* width: 70%;
      display: flex;
      align-items: center; */
      display: flex;
      list-style: wrap;
      align-items: center;
  }


  .nav-list li {
      list-style: none;
      padding: 27px 81px;
      font-size: 20px;
      font-family: 'Ubuntu', sans-serif;
  }

  .userName {
      font-size: 20px;
      font-family: 'Ubuntu', sans-serif;
      margin-right: 7px;
      display: flex;
      align-items: center;
  }


  .nav-list li a {
      text-decoration: none;
      color: #030956;
  }


  .nav-list li a:hover {
      color: black;
      background-color: rgb(255, 255, 255);
  }


  .rightnav {

      width: 3%;
      text-align: right;
      padding: 0 23px;
  }




  #btn btn-sm a {
      list-style: none;
      text-decoration: none;
      color: white;
  }

  .btn {
      padding: 8px 20px;
      margin: 7px 6px;
      border: 2px solid white;
      border-radius: 50px;
      background: none;
      color: white;
      cursor: pointer;
      font-family: 'Ubuntu', sans-serif;
      font-size: 16px;
  }

  .btn a {
      text-decoration: none;
      color: white;
  }

  .btn:hover {
      text-decoration: none;
      list-style: none;
      color: rgb(0, 0, 0);
      background-color: rgb(0, 255, 191);
  }

  .btn-dark {
      color: black;
      border: 2px solid black;
  }

  /* .center-div {
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 188px;
      left: 0;
      width: 100px;
      height: 100px;
      background-color: #ccc;
      border-radius: 3px;
  } */
  .center-div {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .div2 {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .font {
      font-size: 40px;
      font-family: 'Ubuntu', sans-serif;
      color: #030956;
  }
</style>
  <title>project</title>
</head>
  <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp"></script>
  
      <div>
      <nav class="navbar background h-nav-resp">
      <ul class="nav-list">
      <div class="logo"><img src="./logos/C-Mart-logos.jpeg" alt="logo"></div>
      <li class="sales"><a href="index.html">Sales</a></li>
      <li><a href="About.html">Marketing</a></li>
      <li><a href="#services">Finance</a></li>
      <li><a href="contact.html">HR</a></li>
      <div class="logo1">
          <span class="userName">Jim</span>
          <div id="x"></div> 
        
      </div>
  </ul>
          <!-- <div class="rightnav v-class-resp">
              <span>Jim</span>
              <div class="logo"><img src="./logos/image.png" alt="logo"></div>
          </div> -->

      </nav>
      <div style="padding: 40px;">
          <div class="center-div">
              <span class="div2 font">Hi jim  Welcome to C-Mart</span>

          </div>
      </div>
      <div style="padding: 40px;">
          <div class="center-div">
              <span class="div2 font">Here’s Your Sales Dashboard</span>

          </div>
      </div>
      <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>
  var img = new Image(); 
  var div = document.getElementById('x'); 
   
   
  img.onload = function() { 
   
    div.innerHTML += '<img src="'+img.src+'" />';  
   
  }; 
   
   
  img.src = 'image.png'; 

      const width = window.innerWidth;
      const height = window.innerHeight;

      //let url = "https://ketaki-desale.app.bipp.io/embed/68cc77a6-fc72-497d-bbb9-0b1ffe01e579?id=707b84b7-7a5c-47a5-9847-a163319daa95&cid=f570dc6573a6478cb954e82fa603ae97.ketaki-desale.app.bipp.io&secret=MNTGHrqSnWBQ0zonnyfphbJn3!mFM!@RP!davQJi!lXkUFEz";
      //let url = "https://ketaki-desale.app.bipp.io/embed/443c2551-937f-44c6-8252-88f3d4739ebc?id=a8c75ef8-d90a-404f-a5de-5139952513ab&cid=16cc46c2c9054fdeac09ea1f6385b380.ketaki-desale.app.bipp.io&secret=r6hXP@nwPUmDFeRO9R@b25dyrfTIv65mOsVPPKEtPJRQncPF";    
      let url = "https://ketaki-desale.app.bipp.io/embed/434560d5-d81e-4ac1-8953-879609d17217?id=6e0f6e85-c259-4634-abce-ca109bfc60ff&cid=aa6a7b1ddeb44c0b83de98c33c65e1ea.ketaki-desale.app.bipp.io&secret=x1kYW1MRpp0c9YfHzAEctxhtgGpxJhAFAof9i5LJesvsK@bc"
      let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
      
      let bipp = new Bipp();
      bipp.load(url, config);
      
  </script>
  
  </body>
  </html>`)

});

// app.get("/dev", (req, res) => {

//   res.send(`<!DOCTYPE html>
//   <html>
//       <head>
//           <meta name="viewport" content="width=device-width, initial-scale=1">
//           <style>
//             .main {
//                 margin: 30px;
//             }

//         </style>
//       </head>
//   <body>
//       <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//       <script src="https://unpkg.com/bipp-dev"></script>

//   <div class="main">
//     <h2>Bipp dashboard</h2>
//     <div class="dashboard">
//         <div id='container'></div>
//     </div>
//   </div>
//   <script>

//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       let url = "https://harshitaja.app.bippanalytics.com/embed/ce726b8d-da40-409c-9ea8-f3d2c1e1dee7?id=29144ca3-897d-4b79-8733-70a03148a7c0&cid=1c9f92f947f8478fbfca7872b5e92a4d.harshitaja.app.bippanalytics.com&secret=!N9Vk083lBwxeQg9mKKtRFLO0jbfU4PiQx9jPx4Gu35pk6Ks"

//       let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }

//       let bipp = new Bipp();
//       bipp.load(url, config);
//   </script>

//   </body>
//   </html>`)

// });

app.listen(port, function () {
    console.log("Running node server", "on port " + port);
});
