
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVCsHaZ6kxJWA2hbCkCejpzUFDyMtRMiY",
    authDomain: "project-891f6.firebaseapp.com",
    databaseURL: "https://project-891f6.firebaseio.com",
    projectId: "project-891f6",
    storageBucket: "project-891f6.appspot.com",
    messagingSenderId: "598738662442",
    appId: "1:598738662442:web:aec1eca40d006cfcda7f53",
    measurementId: "G-YZXB77GED4"
  };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(function (user) {  //Manage Users in Firebase
      var user = firebase.auth().currentUser;
      document.getElementById('user').innerHTML = user.email;
    });
    function logout() {
      firebase.auth().signOut();   
      window.location = "index.html";
    }

function insert() {
    firebase.auth().onAuthStateChanged(function (user) { //Manage Users in Firebase
        var user = firebase.auth().currentUser;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var age = document.getElementById("age").value;
        var identification = document.getElementById("identification").value;
        var birth = document.getElementById("birth").value;
        var blood = document.getElementById("blood").value;
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        var bmi = weight / (Math.pow((height / 100), 2));
        var treatment = document.getElementById("treatment").value;
        var allergic = document.getElementById("allergic").value;
        var address = document.getElementById("address").value;
        var tel = document.getElementById("tel").value;
        var emergency = document.getElementById("emergency").value;
        var emergencyTel = document.getElementById("emergencyTel").value;
        // insert in database on firebase
        console.log(user)
        var num = parseInt(bmi);
        if (!Number.isInteger(num) && bmi !== "") {
            bmi = 0;
        }
        var firebaseRef = firebase.database().ref(`${user.uid}`);
        firebaseRef.push({
            firstName: firstName,
            lastName: lastName,
            age: age,
            identification: identification,
            birth: birth,
            blood: blood,
            weight: weight,
            height: height,
            bmi: bmi,
            treatment: treatment,
            allergic: allergic,
            address: address,
            tel: tel,
            emergency: emergency,
            emergencyTel: emergencyTel,
        });
    });
    // firebaseRef.child("personal/").set(firstName);
}

window.onload = function () {
    firebase.auth().onAuthStateChanged(function (user) { //Manage Users in Firebase
        var user = firebase.auth().currentUser;
        var firebaseRef = firebase.database().ref(`${user.uid}`);
        firebaseRef.once('value').then(function (dataSnapshot) {
            console.log(dataSnapshot.val());
        })
    });
}

























    $(document).ready(function () {
        $().ready(function () {
            $sidebar = $('.sidebar');

            $sidebar_img_container = $sidebar.find('.sidebar-background');

            $full_page = $('.full-page');

            $sidebar_responsive = $('body > .navbar-collapse');

            window_width = $(window).width();

            $('.fixed-plugin a').click(function (event) {
                // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
                if ($(this).hasClass('switch-trigger')) {
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    } else if (window.event) {
                        window.event.cancelBubble = true;
                    }
                }
            });

            $('.fixed-plugin .active-color span').click(function () {
                $full_page_background = $('.full-page-background');

                $(this).siblings().removeClass('active');
                $(this).addClass('active');

                var new_color = $(this).data('color');

                if ($sidebar.length != 0) {
                    $sidebar.attr('data-color', new_color);
                }

                if ($full_page.length != 0) {
                    $full_page.attr('filter-color', new_color);
                }

                if ($sidebar_responsive.length != 0) {
                    $sidebar_responsive.attr('data-color', new_color);
                }
            });

            $('.fixed-plugin .background-color .badge').click(function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');

                var new_color = $(this).data('background-color');

                if ($sidebar.length != 0) {
                    $sidebar.attr('data-background-color', new_color);
                }
            });

            $('.fixed-plugin .img-holder').click(function () {
                $full_page_background = $('.full-page-background');

                $(this).parent('li').siblings().removeClass('active');
                $(this).parent('li').addClass('active');


                var new_image = $(this).find("img").attr('src');

                if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                    $sidebar_img_container.fadeOut('fast', function () {
                        $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                        $sidebar_img_container.fadeIn('fast');
                    });
                }

                if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                    var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                    $full_page_background.fadeOut('fast', function () {
                        $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                        $full_page_background.fadeIn('fast');
                    });
                }

                if ($('.switch-sidebar-image input:checked').length == 0) {
                    var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                    var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                }

                if ($sidebar_responsive.length != 0) {
                    $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
                }
            });

            $('.switch-sidebar-image input').change(function () {
                $full_page_background = $('.full-page-background');

                $input = $(this);

                if ($input.is(':checked')) {
                    if ($sidebar_img_container.length != 0) {
                        $sidebar_img_container.fadeIn('fast');
                        $sidebar.attr('data-image', '#');
                    }

                    if ($full_page_background.length != 0) {
                        $full_page_background.fadeIn('fast');
                        $full_page.attr('data-image', '#');
                    }

                    background_image = true;
                } else {
                    if ($sidebar_img_container.length != 0) {
                        $sidebar.removeAttr('data-image');
                        $sidebar_img_container.fadeOut('fast');
                    }

                    if ($full_page_background.length != 0) {
                        $full_page.removeAttr('data-image', '#');
                        $full_page_background.fadeOut('fast');
                    }

                    background_image = false;
                }
            });

            $('.switch-sidebar-mini input').change(function () {
                $body = $('body');

                $input = $(this);

                if (md.misc.sidebar_mini_active == true) {
                    $('body').removeClass('sidebar-mini');
                    md.misc.sidebar_mini_active = false;

                    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

                } else {

                    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

                    setTimeout(function () {
                        $('body').addClass('sidebar-mini');

                        md.misc.sidebar_mini_active = true;
                    }, 300);
                }

                // we simulate the window Resize so the charts will get updated in realtime.
                var simulateWindowResize = setInterval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 180);

                // we stop the simulation of Window Resize after the animations are completed
                setTimeout(function () {
                    clearInterval(simulateWindowResize);
                }, 1000);

            });
        });
    });