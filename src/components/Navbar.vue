<template>
    <nav class="fixed flex justify-center items-center w-screen">
        <!-- TODO: Add selection indicator -->
        <ul class="flex justify-center items-center bg-white p-2 rounded-2xl space-x-2 mt-4 shadow-lg shadow-slate-100">
            <li><a class="w-24 flex justify-center py-3 rounded-lg hover:bg-slate-100 font-medium transition-all duration-150"
                    href="/">Home</a></li>
            <li><a class="w-24 flex justify-center py-3 rounded-lg hover:bg-slate-100 font-medium transition-all duration-150"
                    href="/">Work</a></li>
            <li><a class="w-24 flex justify-center py-3 rounded-lg hover:bg-slate-100 font-medium transition-all duration-150"
                    href="/lab">Lab</a></li>
            <li><a class="w-24 flex justify-center py-3 rounded-lg hover:bg-slate-100 font-medium transition-all duration-150"
                    href="/work-updates">Updates</a></li>
            <!-- TODO: Add a resume link -->
            <li><a class="w-24 flex justify-center py-3 rounded-lg hover:bg-slate-100 font-medium transition-all duration-150"
                    href="#">Resume</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>