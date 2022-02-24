
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

app.get("/dev/exp2", (req, res) => {

    res.send(`<!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              .main {
                  margin: 30px;
              }
      
          </style>
        </head>
    <body>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/bipp"></script>

    <div id="main">Call Response</div>

    <script>

    let element = document.getElementById('main');
    axios.get('https://harisha.herokuapp.com/test')
    .then(response => {
        console.log(response.data);
        element.innerHTML = response.data;
    })
              
    </script>
    <iframe src="https://harisha.herokuapp.com">
    </iframe>
    
    </body>
    </html>`)
   
  });

app.get("/dev/exp", (req, res) => {

    res.send(`<!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              .main {
                  margin: 30px;
              }
      
          </style>
        </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/bipp"></script>
    
    <div class="main">
      <h2>Bipp dashboard</h2>
      <div class="dashboard">
          <div id='container'></div>
      </div>
    </div>
    <script>
  
    const width = window.innerWidth;
    const height = window.innerHeight;
  
        //let url = "https://hdpqvz.app.bippanalytics.com/embed/63dd8226-6c15-4002-8453-5e341c74d433?id=5220cbd6-95d8-47ed-9b1e-23e6d399e6b2&cid=c72f100203dc452b932af466efdaa342.hdpqvz.app.bippanalytics.com&secret=D01YojC4wB4wHxO2CNEMA4Yy2y6OWGEz63kRy36rVJE3dBQi";
        // let url = "https://hdpqvz.app.bippanalytics.com/embed/b4ad3659-7d2f-4b99-b9f4-d66324c6f9dd?id=5220cbd6-95d8-47ed-9b1e-23e6d399e6b2&cid=c72f100203dc452b932af466efdaa342.hdpqvz.app.bippanalytics.com&secret=D01YojC4wB4wHxO2CNEMA4Yy2y6OWGEz63kRy36rVJE3dBQi"
        let url = "https://gumhpe.bipp-dev.bippanalytics.com/embed/9969417f-1359-47b3-84c3-b3f25f815ee4?id=caa6888e-5b89-497e-979c-cc00397e79cd&cid=ca3c81fb583a490cafdae78770dd9d18.gumhpe.bipp-dev.bippanalytics.com&secret=x@dbyDcBYirRd28ntppyMQM3AU4wJc!3DGxR3A7DZHDmXvPU"
        let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
        
        let bipp = new Bipp({debug: 1});
        bipp.load(url, config);
    </script>
    
    </body>
    </html>`)
   
  });
  

app.get("/dev/newj", (req, res) => {

  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            .main {
                margin: 30px;
            }
    
        </style>
      </head>
  <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp-dev@1.0.6/bipp.js"></script>
  
  <div class="main">
    <h2>Bipp dashboard</h2>
    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

  const width = window.innerWidth;
  const height = window.innerHeight;

      let url = "https://rbpdpj.app.bippanalytics.com/embed/ca0d6b46-0e20-4964-b235-e2ef21793467?id=8d1a8115-3e5c-44f6-a04a-c7e48dc1c013&cid=0741388954f4417fb893ee3050b33240.rbpdpj.app.bippanalytics.com&secret=eHet0Z9XJqooWwpE93TXpapCM3YCpnUrkqKmgwFkHA5wZqrm";
      let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
      
      let bipp = new Bipp({debug: 1});
      bipp.load(url, config);
  </script>
  
  </body>
  </html>`)
 
});

app.get("/dev/demo1", (req, res) => {

  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            .main {
                margin: 30px;
            }
    
        </style>
      </head>
  <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp-dev@1.0.6/bipp.js"></script>
  
  <div class="main">
    <h2>Bipp dashboard</h2>
    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

  const width = window.innerWidth;
  const height = window.innerHeight;

      let url = "https://xkmzkx.app.bippanalytics.com/embed/41fc8586-f7bf-453c-9636-bb198fe597a5?id=1b89c314-5365-4d72-bf36-f64e825d0a46&cid=ffc632e8723641ff9346caf70dea94b6.xkmzkx.app.bippanalytics.com&secret=0llGdlhUyoLm1!LBxPc6wWi5u2L4kWrCVSstH4bwNo0Q5yyy";
      let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
      
      let bipp = new Bipp({debug: 1});
      bipp.load(url, config);
  </script>
  
  </body>
  </html>`)
 
});

app.get("/dev/multi", (req, res) => {

  res.send(`<!DOCTYPE html>
  <html lang="en">
      <!DOCTYPE html>
      <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                .main {
                    margin: 60px;
                }
        
                .filter-panel {
                    margin-top: 30px;
                }
        
                .dashboard {
                    margin-top: 30px;
                }
        
                .filters {
                    padding: 8px;
                }
                .menu-text1 {
                    padding: 8px;
                    cursor: pointer;
                    color:blue;
                }
                .first {
                    color: black;
                }
                .login {
                  display: flex;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                }
                .user {
                    padding: 0 8px;
                    /* color: brown; */
                    font-style: italic;
                }
                .logout {
                    color: blue;
                    cursor: pointer;
                }
               
            </style>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
    
            <!-- Compressed JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    
    </head>
  
    <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp-dev"></script>
  
  <div class="main">
      <div class="header"> 
          <h4>Tabbed Embedding</h4>
      </div>  
  <div class="filter-panel">
        <div class="top-bar">
            <div class="top-bar-left">
              <ul class="dropdown menu" data-dropdown-menu>
               <li value="d1" onclick="listClick(this)" class="menu-text1 first">Orders</li>
                <li value="d2" onclick="listClick(this)" class="menu-text1">Products</li>
              </ul>
            </div>
        </div>
  </div>
  
  <div class="dashboard">
      <div id='container1'></div>
      <div id='container2'></div>
  </div>
  </div>
      <script>
  
      const height = window.innerHeight;
  
      const mapping = {
  
              d1: { 
                  url: "https://harshitaja.app.bippanalytics.com/embed/ce726b8d-da40-409c-9ea8-f3d2c1e1dee7?id=29144ca3-897d-4b79-8733-70a03148a7c0&cid=1c9f92f947f8478fbfca7872b5e92a4d.harshitaja.app.bippanalytics.com&secret=!N9Vk083lBwxeQg9mKKtRFLO0jbfU4PiQx9jPx4Gu35pk6Ks",
                  id: 'container1'
              },
              d2: {
                  url: "https://harshitaja.app.bippanalytics.com/embed/cbbec00d-9067-45db-b5e3-36c31f71382a?id=29144ca3-897d-4b79-8733-70a03148a7c0&cid=1c9f92f947f8478fbfca7872b5e92a4d.harshitaja.app.bippanalytics.com&secret=!N9Vk083lBwxeQg9mKKtRFLO0jbfU4PiQx9jPx4Gu35pk6Ks",
                  id : 'container2'
              },
      }
  
          loadDashboard('d1');
      
      function listClick(elem) {
              const _elem = document.getElementsByClassName('first')[0];
              _elem.classList.remove('first');
              elem.classList.add('first');
  
        const key = elem.getAttribute('value');
        loadDashboard(key);
      }
  
      function loadDashboard(key) {
  
              let { url, id, isLoaded } = mapping[key];
              if (!isLoaded) { 
                  let config = { id, width: "100%", height, style: 'border:none;' }
  
                  let bipp = new Bipp();
                  bipp.load(url, config);
                  mapping[key].isLoaded = true;
              }
              // hide others except the current one
              for(let k in mapping) {
                  let v = mapping[k];
                  const el = document.getElementById(v.id);
                  if (v.id != id) {
                      el.style.display = 'none';
                  }
                  else {
                      el.style.display = 'block';
                  }
              }
      }
      </script>
  </body>
  
  </html>`)
});

app.get("/", (req, res) => {

  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            .main {
                margin: 30px;
            }
    
        </style>
      </head>
  <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp"></script>
  
  <div class="main">
    <h2>Company Website</h2>
    <h2>Retail Sales Dashboard</h2>
    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

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

app.get("/dev", (req, res) => {

  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            .main {
                margin: 30px;
            }
    
        </style>
      </head>
  <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp-dev"></script>
  
  <div class="main">
    <h2>Bipp dashboard</h2>
    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

      const width = window.innerWidth;
      const height = window.innerHeight;

      let url = "https://harshitaja.app.bippanalytics.com/embed/ce726b8d-da40-409c-9ea8-f3d2c1e1dee7?id=29144ca3-897d-4b79-8733-70a03148a7c0&cid=1c9f92f947f8478fbfca7872b5e92a4d.harshitaja.app.bippanalytics.com&secret=!N9Vk083lBwxeQg9mKKtRFLO0jbfU4PiQx9jPx4Gu35pk6Ks"
      
      let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
      
      let bipp = new Bipp();
      bipp.load(url, config);
  </script>
  
  </body>
  </html>`)
 
});

app.listen(port, function() {
  console.log("Running node server", "on port " + port);
});
