<?php


// Cors.php middleware


namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type');
    }
}



// namespace App\Http\Middleware;

// use Closure;
// use Illuminate\Http\Request;

// class Cors
// {
//     /**
//      * Handle an incoming request.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
//      * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
//      */
//     public function handle(Request $request, Closure $next)
//     {
//         // If the request is an OPTIONS request (preflight request),
//         // add the necessary CORS headers and return an empty response.
//         if ($request->isMethod('OPTIONS')) {
//             return response('', 200)
//                 ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
//                 ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//                 ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//         }

//         // For other requests, just pass through the middleware chain.
//         return $next($request);
//     }
// }

