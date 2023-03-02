import axios from "axios";

function getData (userId) {
    return new Promise(async (resolve, reject) => {
        const {data: userInfo} = await axios("http://jsonplaceholder.typicode.com/users/" + userId);
        const {data: posts}    = await axios("http://jsonplaceholder.typicode.com/posts?userId=" + userId); 
        resolve([userInfo, posts]);
    })
}

export default getData;