Vue.component('navbar-component', {

    template: `<div class="navbar navbar-expand-md navbar-dark">
    <div class="navbar-brand">
        <a href="dashboard.html" class="d-inline-block">
            <img src="../assets/images/logo-sdh.png" alt="">
        </a>
    </div>

    <div class="d-md-none">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
            <i class="icon-tree5"></i>
        </button>
        <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
            <i class="icon-paragraph-justify3"></i>
        </button>
    </div>

    <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                    <i class="icon-paragraph-justify3"></i>
                </a>
            </li>
        </ul>

        <span class="ml-md-3 mr-md-auto"></span>

        <ul class="navbar-nav">
            

            <li class="nav-item dropdown">
                <a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
                    <i class="icon-bubbles4"></i>
                    <span class="d-md-none ml-2">Messages</span>
                    <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>
                </a>
                
                <div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                    <div class="dropdown-content-header">
                        <span class="font-weight-semibold">Messages</span>
                        <a href="#" class="text-default"><i class="icon-compose"></i></a>
                    </div>

                    <div class="dropdown-content-body dropdown-scrollable">
                        <ul class="media-list">
                            <li class="media">
                                <div class="mr-3 position-relative">
                                    <img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
                                </div>

                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold">James Alexander</span>
                                            <span class="text-muted float-right font-size-sm">04:58</span>
                                        </a>
                                    </div>

                                    <span class="text-muted">who knows, maybe that would be the best thing for me...</span>
                                </div>
                            </li>

                            <li class="media">
                                <div class="mr-3 position-relative">
                                    <img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
                                </div>

                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold">Margo Baker</span>
                                            <span class="text-muted float-right font-size-sm">12:16</span>
                                        </a>
                                    </div>

                                    <span class="text-muted">That was something he was unable to do because...</span>
                                </div>
                            </li>

                            <li class="media">
                                <div class="mr-3">
                                    <img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold">Jeremy Victorino</span>
                                            <span class="text-muted float-right font-size-sm">22:48</span>
                                        </a>
                                    </div>

                                    <span class="text-muted">But that would be extremely strained and suspicious...</span>
                                </div>
                            </li>

                            <li class="media">
                                <div class="mr-3">
                                    <img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold">Beatrix Diaz</span>
                                            <span class="text-muted float-right font-size-sm">Tue</span>
                                        </a>
                                    </div>

                                    <span class="text-muted">What a strenuous career it is that I've chosen...</span>
                                </div>
                            </li>

                            <li class="media">
                                <div class="mr-3">
                                    <img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" class="rounded-circle" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold">Richard Vango</span>
                                            <span class="text-muted float-right font-size-sm">Mon</span>
                                        </a>
                                    </div>
                                    
                                    <span class="text-muted">Other travelling salesmen live a life of luxury...</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown-content-footer justify-content-center p-0">
                        <a href="#" class="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i class="icon-menu7 d-block top-0"></i></a>
                    </div>
                </div>
            </li>

            <li class="nav-item dropdown dropdown-user">
                <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                    <img src="../../../../global_assets/images/placeholders/placeholder.jpg" class="rounded-circle mr-2" height="34" alt="">
                    <span>admin SDH</span>
                </a>

                <div class="dropdown-menu dropdown-menu-right">
                    <a href="#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
                    <a href="#" class="dropdown-item"><i class="icon-coins"></i> My balance</a>
                    <a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Messages <span class="badge badge-pill bg-blue ml-auto">58</span></a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item"><i class="icon-cog5"></i> Account settings</a>
                    <a href="#" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
                </div>
            </li>
        </ul>
    </div>
    
</div>`
})

Vue.component('sidebar-component', {
    data: function() {
        return {
            selected: undefined
        }
    },
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
                        <div class="media-title font-weight-semibold">Admin SDH <br> </div>
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
                    <a href="dashboard.html" class='nav-link' @click="selected = dashboard" :class="{active:selected == dashboard}">
                        <i class="icon-home4"></i>
                        <span>
                            Dashboard
                        </span>
                    </a>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link" class='nav-link'><i><img src="../assets/icons/icon-pengguna.png"></i> <span>Pengguna</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Layouts">
                        <li class="nav-item"><a href="users/users_list.html" class="nav-link" @click="selected = users-list" :class="{active:selected == users-list}">Daftar Pengguna</a></li>
                        <li class="nav-item"><a href="users_division.html" class="nav-link">Divisi</a></li>
                        <li class="nav-item"><a href="users_role_and_access.html" class="nav-link">Peran dan Akses</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="../locations/locations_list.html" class="nav-link"><i><img src="../assets/icons/icon-lokasi.png"></i> <span>Lokasi</span></a>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link"><i class="icon-city"></i> <span>Fasilitas</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                        <li class="nav-item"><a href="./facilities_list.html" class="nav-link active">Daftar Barang</a></li>
                        <li class="nav-item"><a href="./facilities_profile_setting.html" class="nav-link">Pengaturan Profil</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link"><i><img src="../assets/icons/icon-kontrak.png"></i> <span>Kontrak</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                        <li class="nav-item"><a href="../seed/layout_nav_horizontal.html" class="nav-link">Daftar Kontrak</a></li>
                        <li class="nav-item"><a href="../seed/sidebar_none.html" class="nav-link">Daftar Vendor</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item nav-item-submenu">
                    <a href="#" class="nav-link"><i><img src="../assets/icons/icon-pekerjaan.png"></i> <span>Pekerjaan</span></a>

                    <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                        <li class="nav-item"><a href="../seed/layout_nav_horizontal.html" class="nav-link">Daftar Pekerjaan</a></li>
                    </ul>
                </li>
                
                <li class="nav-item">
                    <a href="#" class="nav-link"><i><img src="../assets/icons/icon-laporan.png"></i> <span>Laporan</span></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i><img src="../assets/icons/icon-analitik.png"></i> <span>Analitik</span></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i><img src="../assets/icons/icon-sistem.png"></i> <span>Sistem</span></a>
                </li>
            </ul>
        </div>
        <!-- /main navigation -->

    </div>
    <!-- /sidebar content -->
    
</div>`
})


new Vue({
    el: '#app',
    // methods: {
    //     active() {
    //         return 'active'
    //     }
    // },
    data: {
        selected: [],
		allSelected: false,
        schools: ['SDH Kemang', 'SDH Tangerang', 'SDH Kupang'],
        jobs: [
            {
                idCode: 123456789,
                inventoryName: 'AC',
                vendor: 'PT. Angkasa Raya',
                startDate: '20 Juli 2019',
                endDate: '20 Agustus 2019',
                location: 'SDH Jawa',
                cost: 'Rp. 5.000.000'
            },
            {
                idCode: 123456789,
                inventoryName: 'AC',
                vendor: 'PT. Angkasa Raya',
                startDate: '20 Juli 2019',
                endDate: '20 Agustus 2019',
                location: 'SDH Jawa',
                cost: 'Rp. 5.000.000'
            },
            {
                idCode: 123456789,
                inventoryName: 'AC',
                vendor: 'PT. Angkasa Raya',
                startDate: '20 Juli 2019',
                endDate: '20 Agustus 2019',
                location: 'SDH Jawa',
                cost: 'Rp. 5.000.000'
            },
            {
                idCode: 123456789,
                inventoryName: 'AC',
                vendor: 'PT. Angkasa Raya',
                startDate: '20 Juli 2019',
                endDate: '20 Agustus 2019',
                location: 'SDH Jawa',
                cost: 'Rp. 5.000.000'
            },
            {
                idCode: 123456789,
                inventoryName: 'AC',
                vendor: 'PT. Angkasa Raya',
                startDate: '20 Juli 2019',
                endDate: '20 Agustus 2019',
                location: 'SDH Jawa',
                cost: 'Rp. 5.000.000'
            }
        ]
    },
    methods: {
        selectAll: function() {
            this.selected = [];
            if(this.allSelected) {
                for(school in this.schools) {
                    this.selected.push(this.schools[school])
                }
            }
        },
        select: function() {
            this.allSelected = false
        }
    }
})