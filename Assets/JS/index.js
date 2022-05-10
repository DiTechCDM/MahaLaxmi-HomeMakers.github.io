// Dropdown -- navbar script starts here
(function ($bs) {
    const CLASS_NAME = 'has-child-dropdown-show';
    $bs.Dropdown.prototype.toggle = function (_orginal) {
        return function () {
            document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
                e.classList.remove(CLASS_NAME);
            });
            let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
            for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                dd.classList.add(CLASS_NAME);
            }
            return _orginal.call(this);
        }
    }($bs.Dropdown.prototype.toggle);

    document.querySelectorAll('.dropdown').forEach(function (dd) {
        dd.addEventListener('hide.bs.dropdown', function (e) {
            if (this.classList.contains(CLASS_NAME)) {
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
            }
            e.stopPropagation(); // do not need pop in multi level mode
        });
    });

    // for hover
    // document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function (dd) {
    //     dd.addEventListener('mouseenter', function (e) {
    //         let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
    //         if (!toggle.classList.contains('show')) {
    //             $bs.Dropdown.getOrCreateInstance(toggle).toggle();
    //             dd.classList.add(CLASS_NAME);
    //             $bs.Dropdown.clearMenus();
    //         }
    //     });
    //     dd.addEventListener('mouseleave', function (e) {
    //         let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
    //         if (toggle.classList.contains('show')) {
    //             $bs.Dropdown.getOrCreateInstance(toggle).toggle();
    //         }
    //     });
    // });
})(bootstrap);
// Dropdown -- navbar script ends here


// hero banner script starts here
$(function () {
    $('#slider').rbtSlider({
        height: '100vh',
        'dots': false,
        'arrows': true,
        'auto': 3
    });
});
// hero banner script ends here


// nav menu toggle script starts here
function changeToggle(x) {
    x.classList.toggle("fa-times");
}
// nav menu toggle script ends here


// nav logo shrink script starts here
// window.onscroll = function () {
//     growShrinkLogo()
// };

// function growShrinkLogo() {
//     var Logo = document.getElementById("Logo");
//     var top = document.getElementById('setWidth');
//     var top1 = document.getElementById('setwidth2');
//     // var nav = document.getElementById('Navbar');
//     if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//         Logo.style.width = '300px';
//         top.style.marginTop = '1.6rem';
//         top1.style.marginTop = '1.6rem';
//     } else {
//         Logo.style.width = '325px';
//         top.style.marginTop = '1.8rem';
//         top1.style.marginTop = '1.8rem';
//     }
// }
// nav logo shrink script ends here