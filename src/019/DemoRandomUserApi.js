fetch('https://randomuser.me/api/').then(response=>response.json()).then(data=>console.log(data)).catch(err=>console.error(err));
fetch('https://randomuser.me/api/').then(response=>response.json()).then(data=>console.log(data.results[0])).catch(err=>console.error(err));
function Person(data) { this.profile = data }
let somebody
fetch('https://randomuser.me/api/').then(response=>response.json()).then(data=>somebody = new Person(data.results[0])).catch(err=>console.error(err));
somebody