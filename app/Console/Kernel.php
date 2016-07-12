<?php

namespace App\Console;

use App\Models\Settings;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        // Commands\Inspire::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {

        /**
         * Get next-available time from YunoJuno
         * and store it in the Settings table
         *
         * @return void
         */
        $schedule->call(function () {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://app.yunojuno.com/p/peabay');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)');
            $page = curl_exec($ch);
            curl_close($ch);

            preg_match('/\<strong\>Next\&nbsp\;Available\:(.*?)\<\/strong\>/', $page, $matches);
            $next_available = str_replace('&nbsp;', ' ', $matches[1]);
            $settings = DB::table('settings')->get();
            $settings->firstOrCreate(['name' => 'next_available']);
            $settings
                ->where('name', 'next_available')
                ->update(['value' => $next_available]);
            Log::info('Next-available scheduled task ran successfully');
        })->everyFiveMinutes();
    }
}
