<?php

namespace Spatie\BackupTool\Controllers;

use Illuminate\Http\Request;
use Spatie\Backup\BackupDestination\Backup;
use Spatie\Backup\BackupDestination\BackupDestination;
use Spatie\Backup\Helpers\Format;
use Spatie\Backup\Tasks\Backup\BackupJobFactory;
use Spatie\BackupTool\File;
use Spatie\BackupTool\Rules\BackupDisk;
use Spatie\BackupTool\Rules\PathToZip;

class BackupsController extends ApiController
{
    public function index(Request $request)
    {
        $validated = $request->validate([
            'disk' => ['required', new BackupDisk()],
        ]);

        $backupDestination = BackupDestination::create($validated['disk'], config('backup.backup.name'));

        return $backupDestination
            ->backups()
            ->map(function (Backup $backup) {
                return [
                    'path' => $backup->path(),
                    'date' => $backup->date()->format('Y-m-d H:i:s'),
                    'size' => Format::humanReadableSize($backup->size()),
                ];
            })
            ->toArray();
    }

    public function create()
    {
        $backupJob = BackupJobFactory::createFromArray(config('backup'));

        $backupJob->run();
    }

    public function delete(Request $request)
    {
        $validated = $request->validate([
            'disk' => new BackupDisk(),
            'path' => ['required', new PathToZip()],
        ]);

        $backupDestination = BackupDestination::create($validated['disk'], config('backup.backup.name'));

        $backupDestination
            ->backups()
            ->dump()
            ->first(function (Backup $backup) use ($validated) {
                return $backup->path() === $validated['path'];
            })
            ->delete();

        $this->respondSuccess();
    }
}