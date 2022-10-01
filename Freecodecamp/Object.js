let user = {
	name: "John",
	surname: "Smith",
};

user.name = "Pete";
delete user.name;

let
	salaries = {
		John: 100,
		Ann: 160,
		Pete: 130,
	}

alert(salaries.Ann + salaries.John + salaries.Pete);