const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
			const dropdownMenu = document.querySelectorAll('.dropdown-menu');

			dropdownToggle.forEach((toggle, index) => {
  				toggle.addEventListener('mouseover', () => {
    				dropdownMenu[index].style.display = 'block';
  				});

  				toggle.addEventListener('mouseout', () => {
  					dropdownMenu[index].style.display = 'none';
  				});
			});