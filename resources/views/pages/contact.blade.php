<div class="contact">
	<div class="container">
		<div class="next-available">
			<div class="date">
				<?php
					$nextAvailable = App\Models\Settings::where('name', 'next_available')->first();
		            echo date('l jS F', $nextAvailable->value);
		        ?>
	        </div>
	        <div class="arrow"></div>
	        <div class="label">Next Available</div>
		</div>
		<div class="email">hi@peabay.xyz</div>
	</div
</div>