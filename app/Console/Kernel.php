<?php

namespace App\Console;

use DB;
use Log;
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
        \App\Console\Commands\Inspire::class,
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
            Log::info('Running Next-Available Task');

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://app.yunojuno.com/p/peabay');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)');
            $page = curl_exec($ch);
            curl_close($ch);

            $page = preg_replace('/\s+/', '', $page);
            preg_match('/\<strong\>Next\&nbsp\;Available\:(.*?)\<\/strong\>/', $page, $matches);
            $nextAvailable = count($matches) > 0 ? $matches[1] : 'Unavailable';
            $nextAvailable = str_replace('&nbsp;', ' ', $nextAvailable);
            $nextAvailable = strtotime($nextAvailable);

            if ($nextAvailable !== false) {
                \App\Models\Settings::firstOrCreate(['name' => 'next_available']);
                \App\Models\Settings::where('name', 'next_available')->update(['value' => $nextAvailable]);
            }
        })->everyMinute();
    }
}
