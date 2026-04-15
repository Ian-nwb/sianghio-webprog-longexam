import React from 'react'
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] text-center px-6 bg-blue-900">
            <div className="mb-8 overflow-hidden rounded-2xl border-4 border-zinc-900 bg-white p-2 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                <img 
                    src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/309263622_580856707164731_7607008670021297828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFcSBTFnjbYZKpWS2AGGxAHjPoJGIM2142M-gkYgzbXjWdTkDGL3e56iBXq5PdcKEOmYAW9_7D8pgtljGNUUv1g&_nc_ohc=dJNP6oXvOEYQ7kNvwE762KL&_nc_oc=AdpRLOizrPj7ZDxANBopbtUe0Fqr-aNAYYzXB8a_YZeO8AlwW_uVwr7DEA6w6tAfluQ&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=jeMtKbarg4GGgOlrO2MxDQ&_nc_ss=7a3a8&oh=00_Af0htJZia8pfYTW3-PYha5HSlTTAX6rAz65rCTdd-syL6w&oe=69E4D247" 
                    alt="Bulldog"
                    className="h-32 w-32 object-contain md:h-48 md:w-48"
                />
            </div>

            <div className="space-y-4">
                <h1 className="text-5xl font-black tracking-tighter text-white md:text-7xl">
                    404
                </h1>
                <p className="mx-auto max-w-xs text-sm font-medium uppercase tracking-[0.3em] text-white">
                    Page Not Found
                </p>
            </div>

            <Link 
                to="/" 
                className="mt-10 rounded-full border-2 border-zinc-900 bg-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-900 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
                Return to BulldogEx Shop
            </Link>
        </div>
    )
}

export default NotFoundPage;