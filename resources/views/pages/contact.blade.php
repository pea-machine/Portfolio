<div class="contact">
	<div class="grid gut20">
		<div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
			<div class="block-text">
				<h2>Contact</h2>
				<p><a href="mailto:hi@peabay.xyz">hi@peabay.xyz</a></p>
				<h2>Next Available</h2>
				<p><?php
                    $nextAvailable = App\Models\Settings::where('name', 'next_available')->first();
                    echo date('D jS F', $nextAvailable->value);
                ?></p>
            </div>
        </div>
        <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
            <div class="block-text">
                <h2>Follow</h2>
                <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    </div>
</div>