/// <reference types="../node_modules/@types/jquery"/>
var wow = 0;
$('.openNav').on('click',function(){
    if(wow==1){
        $('#leftMenu').animate({width : "0"} , 100 , function(){
            $('.sidenav .up span').animate({top:"160px"} , 100)
        })
        $('.move').animate({left: "-250px"})
        $('.open').animate({left:"0"});
        document.getElementById('kara').innerHTML=`☰`
        wow=0
    }
    else{
        $('#leftMenu').animate({width : "250px"} ,0 , function(){
            $('.sidenav .up span').animate({top:"0px"} , 100)
        })
        $('.move').animate({left: "0"})
        $('.open').animate({left:"250"},450);
        document.getElementById('kara').innerHTML=`<i class="fa-solid open-close-icon fa-x"></i>`
        wow=1
    }
})
async function meals() {
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
        let a = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        let b = await a.json();
        cartona += `<div class="col-md-3" id="kara2">
                        <div class="meal" id=${b.meals[0].idMeal}>
                            <img class="w-100" src=${b.meals[0].strMealThumb} alt="" srcset="">
                            <div class="meal-layer text-dark">
                                <h3>${b.meals[0].strMeal}</h3>
                            </div>
                        </div>
                    </div>`;
    }
        document.getElementById('rowData2').innerHTML=``
        document.getElementById('rowData').innerHTML = cartona;

    document.getElementById('rowData').addEventListener('click', function (event) {
        if (event.target.closest('.meal')) {
            let o = event.target.closest('.meal').id
            $('#hide').addClass("d-none");
            $('.open').css('height', '100%');
            $('.open').css('padding-bottom', '24px');
            document.getElementById('de').classList.remove('d-none');
            dis(o);
        }
    });
}

meals();

async function dis(o) {
    $('.loader').css('display','flex')
    $('#loading').css('display','flex')
    $('#leftMenu').css('z-index','999')
    $('.up').css('z-index','999')
    $('.down').css('z-index','999')
    $('.open').css('z-index','999')
    let a = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${o}`);
    let b = await a.json();
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = b.meals[0][`strIngredient${i}`];
        const measure = b.meals[0][`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
            ingredients += `<span class=" bg-secondary painted m-2 rounded-2">${measure} ${ingredient}</span>`;
        }
    }
    let dat2 = `<div class="ingredients d-flex flex-wrap">
                                ${ingredients}
                      </div>`
    let dat = `<div class="container">
                   <div class="hstack justify-content-end">
                      <button class="btn-close btn-close-white mt-5" id="btnClose"></button>
                    </div>
                   <div class="row g-4" id="detailsContent">
                       <div class="col-md-4">
                          <img src=${b.meals[0].strMealThumb} class="w-100" alt="image details">
                          <h1 class="text-center h3 py-4">${b.meals[0].strMeal}</h1>
                        </div>
                        <div class="col-md-8">
                            <h3 class="s">Instruction</h3>
                            <p class="">${b.meals[0].strInstructions}</p>
                            <p class="d-flex justify-content-start"><span class="fw-bolder s">Area :</span> <span class="badge d-flex justify-content-center align-items-center s-1">${b.meals[0].strArea}</span></p>
                            <p class="d-flex justify-content-start"><span class="fw-bolder s">Category :</span> <span class="badge d-flex justify-content-center align-items-center s-1">${b.meals[0].strCategory}</span></p>
                            <p class="d-flex justify-content-start"><span class="fw-bolder s">Recipes :</span> ${dat2}</p>
                            <p class="d-flex justify-content-start"><span class="fw-bolder s">Tags :</span>${b.meals[0].strTags ? b.meals[0].strTags.split(',').map(tag => `<span class="rounded-2 mx-2 d-flex justify-content-center align-items-center t bg-danger">${tag}</span>`).join('') : ''}</p>
                            <a href="${b.meals[0].strSource}" class="btn btn-success btn-outline-warning mb-5" target="_blank">Show Recipe</a>
                            <a href="${b.meals[0].strYoutube}" class="btn btn-danger btn-outline-warning mb-5" target="_blank">Watch Video</a>
                        </div>         
                    </div>
                </div>`;            
    document.getElementById('de').innerHTML = dat;
    $('.loader').fadeOut(2200,function(){
        $('#loading').fadeOut(1000,function(){
            $('body').css('overflow','auto')
        })
    })
}
document.addEventListener("click", () => {
    const btnClose = document.getElementById("btnClose");
    if (btnClose) {
      btnClose.addEventListener("click", () => {
        document.getElementById('hide').classList.remove('d-none');
        document.getElementById('de').classList.add('d-none');
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
      });
    }
  });
$(function(){
    $('.loader').fadeOut(2200,function(){
        $('#loading').fadeOut(1000,function(){
            $('body').css('overflow','auto')
        })
    })
})
$('#category').on('click', function() {
    async function cat() {
        $('.loader').css('display','flex')
        $('#loading').css('display','flex')
        $('#leftMenu').css('z-index','999')
        $('.up').css('z-index','999')
        $('.down').css('z-index','999')
        $('.open').css('z-index','999')
        let a = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        let b = await a.json();
        let cartona = '';
        for (let i = 0; i < b.categories.length; i++) {
            cartona += `<div class="col-md-3 kara3" id="${b.categories[i].strCategory}">
                            <div class="meal" id=${b.categories[i].idCategory}>
                                <img class="w-100" src=${b.categories[i].strCategoryThumb} alt="" srcset="">
                                <div class="meal-layer text-dark">
                                    <h3 class="text-center">${b.categories[i].strCategory}</h3>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById('rowData2').innerHTML=``        
        document.getElementById('rowData').innerHTML = cartona;
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
        document.getElementById('de').classList.add('d-none');
        $('#hide').removeClass('d-none')
        const kara3Elements = document.querySelectorAll('.kara3');
        kara3Elements.forEach(function(element) {
            element.addEventListener('click', function() {
                console.log(this);
                let category = this.id;
                discat(category);
            });
        });
        $('.loader').fadeOut(2200,function(){
            $('#loading').fadeOut(1000,function(){
                $('body').css('overflow','auto')
            })
        })
    }
    
    cat();

    async function discat(o) {
        $('.loader').css('display','flex')
        $('#loading').css('display','flex')
        $('#leftMenu').css('z-index','999')
        $('.up').css('z-index','999')
        $('.down').css('z-index','999')
        $('.open').css('z-index','999')
        let a = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${o}`);
        let b = await a.json();
        let cartona3 = '';
        for (let i = 0; i < b.meals.length; i++) {
            cartona3 += `<div class="col-md-3">
                            <div class="meal" id="${b.meals[i].idMeal}">
                                <img class="w-100" src="${b.meals[i].strMealThumb}" alt="" srcset="">
                                <div class="meal-layer text-dark">
                                    <h3 class="text-center">${b.meals[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById('rowData2').innerHTML=``        
        document.getElementById('rowData').innerHTML = cartona3;
        $('#hide').removeClass('d-none')
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
        document.getElementById('de').classList.add('d-none');
        $('.loader').fadeOut(2200,function(){
            $('#loading').fadeOut(1000,function(){
                $('body').css('overflow','auto')
            })
        })
    }
});
$('#area').on('click', function() {
    async function area() {
        $('.loader').css('display','flex')
        $('#loading').css('display','flex')
        $('#leftMenu').css('z-index','999')
        $('.up').css('z-index','999')
        $('.down').css('z-index','999')
        $('.open').css('z-index','999')
        let a = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        let b = await a.json();
        let cartona = '';
        for (let i = 0; i < b.meals.length; i++) {
            cartona += `<div class="col-md-3 kara4" id="${b.meals[i].strArea}">
                            <div class="meal text-center" id="">
                                <i class="fa-solid fa-house-laptop fa-4x text-center"></i>
                                    <h3 class="text-center">${b.meals[i].strArea}</h3>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById('rowData2').innerHTML=``
        document.getElementById('rowData').innerHTML = cartona;
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
        document.getElementById('de').classList.add('d-none');
        $('#hide').removeClass('d-none')
        const kara4Elements = document.querySelectorAll('.kara4');
        kara4Elements.forEach(function(element) {
            element.addEventListener('click', function() {
                console.log(this);
                let ar = this.id;
                disar(ar);
            });
        });
        $('.loader').fadeOut(2200,function(){
            $('#loading').fadeOut(1000,function(){
                $('body').css('overflow','auto')
            })
        })
    }
    
    area();

    async function disar(o) {
        $('.loader').css('display','flex')
        $('#loading').css('display','flex')
        $('#leftMenu').css('z-index','999')
        $('.up').css('z-index','999')
        $('.down').css('z-index','999')
        $('.open').css('z-index','999')
        let a = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${o}`);
        let b = await a.json();
        let cartona3 = '';
        for (let i = 0; i < b.meals.length; i++) {
            cartona3 += `<div class="col-md-3">
                            <div class="meal" id="${b.meals[i].idMeal}">
                                <img class="w-100" src="${b.meals[i].strMealThumb}" alt="" srcset="">
                                <div class="meal-layer text-dark">
                                    <h3 class="text-center">${b.meals[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById('rowData2').innerHTML=``        
        document.getElementById('rowData').innerHTML = cartona3;
        $('#hide').removeClass('d-none')
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
        document.getElementById('de').classList.add('d-none');
        $('.loader').fadeOut(2200,function(){
            $('#loading').fadeOut(1000,function(){
                $('body').css('overflow','auto')
            })
        })
    }
});
$('#intredients').on('click', function() {
    async function ind() {
        $('.loader').css('display','flex')
        $('#loading').css('display','flex')
        $('#leftMenu').css('z-index','999')
        $('.up').css('z-index','999')
        $('.down').css('z-index','999')
        $('.open').css('z-index','999')
        let a = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        let b = await a.json();
        let cartona = '';
        for (let i = 0; i < b.meals.length; i++) {
            cartona += `<div class="col-md-3 kara5 overflow-hidden" id="${b.meals[i].strIngredient}">
                            <div class="meal overflow-hidden text-center" id="">
                                <i class="fa-solid fa-drumstick-bite fa-4x text-center"></i>
                                    <h3 class="text-center">${b.meals[i].strIngredient}</h3>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById('rowData2').innerHTML=``        
        document.getElementById('rowData').innerHTML = cartona;
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
        document.getElementById('de').classList.add('d-none');
        $('#hide').removeClass('d-none')
        const kara5Elements = document.querySelectorAll('.kara5');
        kara5Elements.forEach(function(element) {
            element.addEventListener('click', function() {
                console.log(this);
                let indi = this.id;
                disin(indi);
            });
        });
        $('.loader').fadeOut(2200,function(){
            $('#loading').fadeOut(1000,function(){
                $('body').css('overflow','auto')
            })
        })
    }
    
    ind();

    async function disin(o) {
        $('.loader').css('display','flex')
        $('#loading').css('display','flex')
        $('#leftMenu').css('z-index','999')
        $('.up').css('z-index','999')
        $('.down').css('z-index','999')
        $('.open').css('z-index','999')
        let a = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${o}`);
        let b = await a.json();
        let cartona3 = '';
        for (let i = 0; i < b.meals.length; i++) {
            cartona3 += `<div class="col-md-3">
                            <div class="meal" id="${b.meals[i].idMeal}">
                                <img class="w-100" src="${b.meals[i].strMealThumb}" alt="" srcset="">
                                <div class="meal-layer text-dark">
                                    <h3 class="text-center">${b.meals[i].strMeal}</h3>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById('rowData2').innerHTML=``
        document.getElementById('rowData').innerHTML = cartona3;
        $('#hide').removeClass('d-none')
        $('.open').css('height','103%');
        $('.open').css('padding-bottom', '24px');
        document.getElementById('de').classList.add('d-none');
        $('.loader').fadeOut(2200,function(){
            $('#loading').fadeOut(1000,function(){
                $('body').css('overflow','auto')
            })
        })
    }
});
$('#Search').on('click',function(){
    $('.open').css('height','100%');
    $('.open').css('padding-bottom', '24px');
    document.getElementById('rowData2').innerHTML=""
    let cartona = `<div class="col-md-6">
                            <input type="text" class="form-control" id="name" placeholder="Search by name">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="fname" placeholder="Search by first letter">
                        </div>`
    document.getElementById('rowData2').innerHTML=cartona
    document.getElementById('rowData').innerHTML=``
    document.getElementById('name').addEventListener('input',function(){
        let k = document.getElementById('name').value;
        fullName(k);
        async function fullName(n){
            let a = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`)
            let b = await a.json()
            let cartona3 = ``
            for (let i = 0; i < b.meals.length; i++) {
                cartona3 += `<div class="col-md-3">
                                <div class="meal" id="${b.meals[i].idMeal}">
                                    <img class="w-100" src="${b.meals[i].strMealThumb}" alt="" srcset="">
                                    <div class="meal-layer text-dark">
                                        <h3 class="text-center">${b.meals[i].strMeal}</h3>
                                    </div>
                                </div>
                            </div>`;
            }
            document.getElementById('rowData').innerHTML=cartona3
        }
    })
    document.getElementById('fname').addEventListener('input',function(){
        let k = document.getElementById('fname').value;
        fullName2(k);
        async function fullName2(n){
            let a = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${n}`)
            let b = await a.json()
            let cartona3 = ``
            for (let i = 0; i < b.meals.length; i++) {
                cartona3 += `<div class="col-md-3">
                                <div class="meal" id="${b.meals[i].idMeal}">
                                    <img class="w-100" src="${b.meals[i].strMealThumb}" alt="" srcset="">
                                    <div class="meal-layer text-dark">
                                        <h3 class="text-center">${b.meals[i].strMeal}</h3>
                                    </div>
                                </div>
                            </div>`;
            }
            document.getElementById('rowData').innerHTML=cartona3
            document.getElementById('fname').value=""
        }
    })
})
$('#contact').on('click', function() {
    $('.open').css('height','100%');
    $('.open').css('padding-bottom', '24px');
    document.getElementById('rowData2').innerHTML = "";
    let cartona = `
        <div class="col-md-5">
            <input type="text" class="form-control" id="name2" placeholder="Enter Your name">
            <div class="alert alert-danger mt-3 d-none">
                <small>Special characters and numbers not allowed</small>
            </div>
        </div>
        <div class="col-md-5">
            <input type="email" class="form-control" id="email" placeholder="Enter Your Email">
            <div class="alert alert-danger mt-3 d-none">
                <small>Enter valid Email</small>
            </div>
        </div>
        <div class="col-md-5">
            <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone">
            <div class="alert alert-danger mt-3 d-none">
                <small>Enter valid Phone Number</small>
            </div>
        </div>
        <div class="col-md-5">
            <input type="text" class="form-control" id="age" placeholder="Enter Your Age">
            <div class="alert alert-danger mt-3 d-none">
                <small>Enter valid age</small>
            </div>
        </div>
        <div class="col-md-5">
            <input type="password" class="form-control" id="pass" placeholder="Enter Your Password">
            <div class="alert alert-danger mt-3 d-none">
                <small>Enter valid password *Minimum eight characters, at least one letter and one number:*</small>
            </div>
        </div>
        <div class="col-md-5">
            <input type="password" class="form-control" id="rePass" placeholder="Repassword">
            <div class="alert alert-danger mt-3 d-none">
                <small>rePass Correctly</small>
            </div>
        </div>
        <div class="col-md-12 d-flex justify-content-center">
            <button class="btn btn-danger disabled" id="butn">Submit</button>
        </div>
    `;
    
    $('#rowData2').addClass('d-flex justify-content-center align-items-center m-auto');
    document.getElementById('rowData2').innerHTML = cartona;
    document.getElementById('rowData').innerHTML = '';

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\w{1,}@\w{1,}\.[a-zA-Z]{2,}$/;
    const phoneRegex = /(^\+?)(\d{3})-?(\d{3})-?(\d{4,6})$/;
    const ageRegex = /^([1-9][0-9]?|[0]*([1-9]{1,2}|[1-9][0-9]))$/;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let firstTime = {
        'name': false,
        'email': false,
        'phone': false,
        'age': false,
        'pass1': false,
        'rePass': false,
    };

    function res() {
        firstTime = {
            'name': false,
            'email': false,
            'phone': false,
            'age': false,
            'pass1': false,
            'rePass': false,
        };
        $('input+div').addClass('d-none');
        document.getElementsByTagName('input').value="";
        $('#butn').addClass('disabled');
    }

    function ini() {
        $('input').on('input', function(e) {
            const id = e.target.id;
            const value = e.target.value;
            getGlobalValidations(id, value);
        });
        
    }

    function getName(e) {
        firstTime.name = true;
        return nameRegex.test(e);
    }

    function getEmail(e) {
        firstTime.email = true;
        return emailRegex.test(e);
    }

    function getAge(e) {
        firstTime.age = true;
        return ageRegex.test(e);
    }

    function getPhone(e) {
        firstTime.phone = true;
        return phoneRegex.test(e);
    }

    function getPass(e) {
        firstTime.pass1 = true;
        return passRegex.test(e);
    }

    function getRePass() {
        firstTime.rePass = true;
        return $('#pass').val() === $('#rePass').val();
    }

    function getGlobalValidations(id, element) {
        let isValid = true;
        let v = false;

        if (id=='name2') {
                v = getName(element);
                if (!v) {
                    isValid = false;
                    $('#name2').next().removeClass('d-none');
                } else {
                    $('#name2').next().addClass('d-none');
                }
            }
            else if(id=='email'){
                v = getEmail(element);
                if (!v) {
                    isValid = false;
                    $('#email').next().removeClass('d-none');
                } else {
                    $('#email').next().addClass('d-none');
                }
            }
            else if (id=='phone'){
                v = getPhone(element);
                if (!v) {
                    isValid = false;
                    $('#phone').next().removeClass('d-none');
                } else {
                    $('#phone').next().addClass('d-none');
                }
            }
            else if(id=='age'){
                v = getAge(element);
                if (!v) {
                    isValid = false;
                    $('#age').next().removeClass('d-none');
                } else {
                    $('#age').next().addClass('d-none');
                }
            }
            else if(id=='pass'){
                v = getPass(element);
                if (!v) {
                    isValid = false;
                    $('#pass').next().removeClass('d-none');
                } else {
                    $('#pass').next().addClass('d-none');
                }
            }
            else if(id=='rePass'){
                v = getRePass(element);
                if (!v) {
                    isValid = false;
                    $('#rePass').next().removeClass('d-none');
                } else {
                    $('#rePass').next().addClass('d-none');
                }
        }

        if (!firstTime['name'] || !firstTime['email'] || !firstTime['phone'] || !firstTime['age'] || !firstTime['pass1'] || !firstTime['rePass']) {
            return;
        }
        if (isValid==true) {
            $('#butn').removeClass('disabled');
        } else {
            $('#butn').addClass('disabled');
        }
    }
    res();
    ini();
    $('#butn').on('click',function(e) {
        e.preventDefault();
    });
});
