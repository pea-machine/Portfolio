<div class="contact">
	<div class="container">
		<div class="next-available">
			<?php
				$nextAvailable = App\Models\Settings::where('name', 'next_available')->first();
	            echo date('D jS F', $nextAvailable->value);
	        ?>
	        <div class="arrow"></div>
	        <div class="label">Next Available</div>
		</div>
		<div class="email">hi@peabay.xyz</div>
	</div
</div>