const axios = require('axios');

exports.homeRoutes = (req, res) => {
  axios.get('http://localhost:8080/api/task')
      .then(function(response){
        // console.log(response.data);
        res.render('home', { tasks : response.data });
      })
      .catch(err =>{
          res.send(err);
      })

}

exports.add_task = (req, res) => {
  res.render('add_task');
}