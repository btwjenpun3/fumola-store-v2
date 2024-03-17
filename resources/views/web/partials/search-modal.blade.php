<div id="search-modal"
    class="fixed z-50 inset-0 flex items-center justify-center bg-secondary-900 bg-opacity-50 backdrop-blur-sm hidden">
    <div
        class="bg-white overflow-hidden dark:bg-gray-700 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div class="mb-4 border-b border-gray-100 dark:border-gray-600">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input id="search-input" type="search"
                    class="block w-full p-4 pl-10 text-sm shadow-none !ring-0 outline-0 text-gray-900 border-0 bg-white dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search items..." required />
            </div>
        </div>
        <div id="recent-search" class="p-4 mb-4">
            <h3 class="text-sm text-gray-600 dark:text-gray-400 mb-2">Recent</h3>
            <ul class="space-y-2">
                <!-- Recent search items will be dynamically added here -->
            </ul>
        </div>
    </div>
</div>
