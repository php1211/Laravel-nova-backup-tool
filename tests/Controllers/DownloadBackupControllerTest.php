<?php

namespace Spatie\BackupTool\Tests;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class DownloadBackupControllerTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();

        $this->createBackup();

        Carbon::setTestNow(Carbon::create(2018)->startOfYear());
    }

    /** @test */
    public function it_can_download_a_backup()
    {
        $this
            ->getJson('/nova/backup-tool/download-backup?disk=local&path=Laravel/2018-01-01-00-00-00.zip')
            ->assertSuccessful();
    }

    /** @test */
    public function it_will_not_accept_non_zip_files()
    {
        $this
            ->getJson('/nova/backup-tool/download-backup?disk=local&path=Laravel/secret-report.pdf')
            ->assertJsonValidationErrors(['path']);
    }

    public function createBackup()
    {
        $this
            ->postJson('/nova/backup-tool/backups', ['disk' => 'local'])
            ->assertSuccessful();

        Storage::disk('local')->assertExists('Laravel/2018-01-01-00-00-00.zip');
    }
}