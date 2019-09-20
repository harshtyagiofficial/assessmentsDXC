type = ['Graduate', 'Post Graduate'];
data = [['Select Graduate Course','B.Tech CSE', 'B.Tech Mechanical', 'B.Tech ECE'], ['Select Post Graduate Course', 'M.Tech CSE Cloud', 'M.Tech CSE ML', 'M.Tech Mech', 'M.Tech ECE SemiConductors', 'M.Tech Mech Transmission']];

function fillType() {
	var select = document.getElementById('gradPG');
	for(i=0;i<type.length;i++) {
		var opt = document.createElement('option');
		opt.text = type[i];
		select.appendChild(opt);
	}
}


function fillSecond() {
	var select = document.getElementById("courses");
	var type = document.getElementById('gradPG');
	var selectidx = type.selectedIndex;
	if(selectidx!==0)
	{
		select.innerText = null;
		for (i=0;i<data[selectidx-1].length;i++) {
			var opt = document.createElement('option');
			opt.text = data[selectidx-1][i];
			select.appendChild(opt);
		}
	}
	else
	{
		select.innerText = null;
		var opt = document.createElement('option');
		opt.text = 'select sub category';
		select.appendChild(opt);	
	}


}



function validatePass() {
	var pass = document.getElementById('password').value;
	var rePass = document.getElementById('passwordRetype').value;
	if(pass!=rePass)
		alert("Password doesn't match");
}

function validateDate() {

	var date= new Date();

	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var dd = date.getDate();
	var y = year-18;
	if(month<10){
		month='0'+month;
	}

	if(dd<10){
		dd=0+""+dd;
	}

	document.getElementById('dob').max=y+"-"+month+"-"+dd;

}