function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	var radius=document.getElementById("radius");
	var r=parseFloat(radius);
	if(isNaN(r)||r<0)
	{
		document.getElementById("volume").value='NaN';
	}
	else{
		var volume = (4/3) * Math.PI * Math.pow(r, 3);
		volume = volume.toFixed(4);
		document.getElementById("volume").value=valume
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
