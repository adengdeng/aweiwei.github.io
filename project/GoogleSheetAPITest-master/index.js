let sendbtn = document.querySelector('button');

$(document).ready(function(){
	// $("#confirmsend").click(function(){
	// 	$("p").hide();
	// });
	
	// $("#confirmsend").click(function(){
	// 	$("p").show();
	// });

	$("#confirmsend").hide();
});

function send() {
	var mydate = new Date();
	let name = document.querySelector('#nameValue').value;
	let phone = document.querySelector('#phoneValue').value;
	let demand = document.querySelector('#demandValue').value;
	let mydate2 = mydate.getFullYear();

	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbyLPqsK6lueHYQHC0A0YjSEu_OBVnygdVSLe9yBFXBeyX6u8smI/exec",
		data: {
			"name": name,
			"phone": phone,
			"demand": demand,
			"Date": mydate2
		},
		success: function(response) {
			if(response == "000"){
				alert("簽到成功");
			}else{
				alert("簽到失敗");
			}
		},
		error: function(data) {
			alert("簽到失敗");
		}
		});
}

sendbtn.addEventListener('click', send);



popupbtn.addEventListener('click', popupview);

closepopupbtn.addEventListener('click', closepopup);

// 彈跳視窗測試
function popupview() {
	// alert("跳跳跳");
	$("#confirmsend").show();
	// $("#closepopupbtn").show();
	// $("#p22").show();
}



function closepopup() {
	$("#confirmsend").hide();
	$("#closepopupbtn").hide();
	$("#p22").hide();

}



// var loadingTimeout = window.setTimeout(function() {
//   alert('網路不穩定，請稍後再試');
// }, 10000); // 10000ms = 10sec

