//let friends =['tom imam','misti imam','tom hasib','tom muddy'];
//console.log(friends);

//let length = friends.map(friend =>friend.length);
//console.log(length);//

//Class Human{
         name;
         color='Brown';
         constructor(dfsf){
            this.name = dfsf
         }


}
//let hasib = new Human ('john hasib');
//console.log(hasib)//

//Javascript object Notification
//JSON

//let user ={

    id:1,
    name:'Novel',
    job :'Singer'
}

//console.log(data)

//let data =JSON.stringify(user);
//console.log(data)

//let obj =JSON.parse(data);
//console.log(obj)//

fetch (`https://jsonplaceholder.typicode.com/posts/1`)
.then (res=> res.json())
.then (data=>console.log(data));

