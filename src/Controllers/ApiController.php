<?php

namespace Spatie\BackupTool\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

abstract class ApiController
{
    public function respondSuccess(): Response
    {
        return response('', Response::HTTP_NO_CONTENT);
    }
}
