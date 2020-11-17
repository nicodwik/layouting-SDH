export const Sidebar = 
Vue.component('Sidebar', {
    template: `<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

    <!-- Sidebar mobile toggler -->
    <div class="sidebar-mobile-toggler text-center">
        <a href="#" class="sidebar-mobile-main-toggle">
            <i class="icon-arrow-left8"></i>
        </a>
        Navigation
        <a href="#" class="sidebar-mobile-expand">
            <i class="icon-screen-full"></i>
            <i class="icon-screen-normal"></i>
        </a>
    </div>
    <!-- /sidebar mobile toggler -->


    <!-- Sidebar content -->
    <div class="sidebar-content">

        <!-- User menu -->
        <div class="sidebar-user">
            <div class="card-body">
                <div class="media">
                    <div class="mr-3">
                        <a href="#"><img src="../global_assets/images/placeholders/placeholder.jpg" width="38" height="38" class="rounded-circle" alt=""></a>
                    </div>

                    <div class="media-body">
                        <div class="media-title font-weight-semibold">Admin SDH <br> cabang rungkut</div>
                        <div class="font-size-xs opacity-50">
                            <i class="icon-pin font-size-sm"></i> &nbsp;Rungkut, SBY
                        </div>
                    </div>

                    <div class="ml-3 align-self-center">
                        <a href="#" class="text-white"><i class="icon-cog3"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /user menu -->


        <!-- Main navigation -->
        <div class="card card-sidebar-mobile">
            <br>
            <br>
            <ul class="nav nav-sidebar" data-nav-type="accordion">

                <!-- Main -->
                
                <li class="nav-item">
                    <a href="index.html" class="nav-link">
                        <i class="icon-home4"></i>
                        <span>
                            Dashboard
                        </span>
                    </a>
                </li>
                <li class="nav-item nav-item-submenu nav-item-expanded nav-item-open">
                    <a href="#" class="nav-link active"><i class="icon-users"></i> <span>Pengguna</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Layouts">
                        <li class="nav-item"><a href="users_list.html" class="nav-link">Daftar Pengguna</a></li>
                        <li class="nav-item"><a href="users_division.html" class="nav-link active">Divisi</a></li>
                        <li class="nav-item"><a href="users_role_and_access.html" class="nav-link">Peran dan Akses</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="../locations/locations_list.html" class="nav-link"><i class="icon-location4"></i> <span>Lokasi</span></a>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link"><i class="icon-city"></i> <span>Fasilitas</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                        <li class="nav-item"><a href="../seed/layout_nav_horizontal.html" class="nav-link">Daftar Barang</a></li>
                        <li class="nav-item"><a href="../seed/sidebar_none.html" class="nav-link">Pengaturan Profil</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link"><i class="icon-file-text2"></i> <span>Kontrak</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                        <li class="nav-item"><a href="../seed/layout_nav_horizontal.html" class="nav-link">Daftar Kontrak</a></li>
                        <li class="nav-item"><a href="../seed/sidebar_none.html" class="nav-link">Daftar Vendor</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link"><i class="icon-briefcase"></i> <span>Pekerjaan</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                        <li class="nav-item"><a href="../seed/layout_nav_horizontal.html" class="nav-link">Daftar Pekerjaan</a></li>
                    </ul>
                </li>
                
                <li class="nav-item">
                    <a href="#" class="nav-link"><i class="icon-clipboard2"></i> <span>Laporan</span></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i class="icon-stats-growth"></i> <span>Analitik</span></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i class="icon-gear"></i> <span>Sistem</span></a>
                </li>
            </ul>
        </div>
        <!-- /main navigation -->

    </div>
    <!-- /sidebar content -->
    
</div>`
})