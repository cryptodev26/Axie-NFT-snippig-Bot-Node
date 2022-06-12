let currentUser = 3;
const winston = require('winston');
var axios = require('axios');
const axiosTime = require('axios-time');
axiosTime(axios);
const Web3 = require('web3');
const { ethers } = require('ethers');
const initializeLogger = require("./initializeLogger");
initializeLogger("bot", currentUser);
const logger = winston.loggers.get(currentUser);
var data = JSON.stringify({
    "operationName": "GetAxieDetail",
    "variables": {result_id: "7612e98d-1901-4375-a01c-75f8a146a3a3"},
    "query": "query FindResultDataByResult($result_id: uuid!) {\n  query_results(where: {id: {_eq: $result_id}}) {\n    id\n    job_id\n    error\n    runtime\n    generated_at\n    columns\n    __typename\n  }\n  get_result_by_result_id(args: {want_result_id: $result_id}) {\n    data\n    __typename\n  }\n}\n"
  });


  var config = {
    method: 'post',
    url: 'https://core-hsr.duneanalytics.com/v1/graphql',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data,
    timeout: 5000,
};




(async () => {
        try{
        var response = await axios(config)
        var result = response.data
        console.log(response)
        } catch(e){
            logger.warn(e)
    }
})();