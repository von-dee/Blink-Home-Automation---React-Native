// import axios from 'axios'

// import qs from 'qs';
const axios = require('axios')


const request_head = {
  // apikey: localStorage.getItem('actors_apikey'),
  // actors_id: localStorage.getItem('actors_id'),
  // actors_name:  localStorage.getItem('org_actors_name'),
  // actors_organisation:  localStorage.getItem('org_name'),
  // actors_organisation_id:  localStorage.getItem('org_id'),
}


// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }

// const url = "http://tuyoinc.com/api_tingotxt/index.php";


class API_calls {
    // postdata(data) {
       
    //   var requestBody = request_head;

    //   console.log("Form Data Dis ",qs.stringify(requestBody));

    //    axios.post(url, qs.stringify(requestBody), config)
    //     .then((result) => {
    //       // Do somthing
    //       console.log("Request Successful ",result);

    //       if(result.data == "Required fields cannot be empty"){
    //         alert("Please fill all fields");
    //       }
    //       return result;

    //     })
    //     .catch((err) => {
    //       // Do somthing
    //       console.log("Request Error ",err);
    //       return err;
    //     })

    // }



    // async getdata(data) {
       
    //   var requestBody = mergeJSON.merge(request_head, data) ;
    //   console.log("Form Data Dis ",requestBody);

    //   await axios.post(url, qs.stringify(requestBody), config)
    //     .then((result) => {
    //       // Do somthing
    //       this.response = result.data.response;
    //       // console.log("Request Successful ",result.data.response);
          
    //     })
    //     .catch((err) => {
    //       // Do somthing
    //       console.log("Request Error ",err);
          
    //     })

    //     return this.response;
    // }


    async getdata_request(url_passed) {
      this.response = axios({
              url: url_passed,
              method: 'get',
              data: {
                foo: 'bar'
              }
            })

        return this.response;
    }

  }


const apicalls = new API_calls();

export default apicalls;