<?php

namespace Spatie\NovaBackupTool\Tests;

class BackupStatussesControllerTest extends TestCase
{
    /** @test */
    public function it_can_get_all_backup_statusses()
    {
        $this
            ->getJson('/nova/backup-tool/backup-statusses')
            ->assertSuccessful()
            ->assertJson([
                [
                    'name' => 'Laravel',
                    'disk' => 'local',
                    'reachable' => true,
                    'healthy' => false,
                    'amount' => 0,
                    'newest' => 'No backups present',
                    'usedStorage' => '0 KB',
                ]
            ]);
    }
}