var form = document.getElementById("searchForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
	
    const input = document.getElementById("search").value;
    
	if (input.includes(".")) {
		if (!input.includes("https://")) {
			if (!input.includes("http://")) {
				window.open("http://" + encodeURI(input) + " ".repeat(16380))
			} else {
				toastr["warning"]("Do not include http:// or https:// in the URL!", "Invalid URL!")		
			}
		} else {
			toastr["warning"]("Do not include http:// or https:// in the URL!", "Invalid URL!")			
		}
	} else {
		toastr["error"]("The URL you provided is invalid!", "Invalid URL!")

		toastr.options = {
			"closeButton": true,
			"debug": false,
			"progressBar": true,
			"positionClass": "toast-top-right",
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}
	}
});
