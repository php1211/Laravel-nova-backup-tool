<?php

namespace Spatie\BackupTool\Tests;

use Illuminate\Support\Facades\Event;
use Spatie\Backup\Events\CleanupWasSuccessful;

class CleanBackupsControllerTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();

        Event::fake();
    }

    /** @test */
    public function it_can_clean_the_backups()
    {
        $this
            ->postJson('/nova/backup-tool/clean-backups')
            ->assertSuccessful();

        Event::assertDispatched(CleanupWasSuccessful::class);
    }
}