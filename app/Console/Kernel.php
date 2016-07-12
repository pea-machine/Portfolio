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
         */
        $schedule->call(function () {
            $page = file_get_contents('https://app.yunojuno.com/p/peabay');
            preg_match('/\<strong\>Next\&nbsp\;Available\:(.*?)\<\/strong\>/', $page, $matches);
            $next_available = str_replace('&nbsp;', ' ', $matches[1]);
            $settings = DB::table('settings')->get();
            $settings->firstOrCreate(['name' => 'next_available']);
            $settings
                ->where('name', 'next_available')
                ->update(['value' => $next_available]);
        })->daily();
    }
}
