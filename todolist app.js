let todo =[];
let req= ("please enter your request");
while(true){
	if(req =="quit")
	{
		console.log("you quit");
		break;
	}
	if(req =="list"){
		console.log("___________");
		for(let i=0;i<todo.length;i++)
		{
			console.log(i,todo[i]);
		}
		console.log("______");
	}
	else if(req="add"){
		let task = prompt("please enter task which you want to add");
		todo.push(task);
	}
	else if(req ="delete"){
		let idx = prompt("enter task which you want to delete");
		todo.splice(idx,1);
		console.log("task deleted");
	}
	else
	{
		console.log("wrong request");
	}
	req = prompt("please enter request");
}