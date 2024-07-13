// async function meals() {
//     let cartona = ``;
//     for (let i = 0; i < 20; i++) {
//         let a = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//         let b = await a.json();
//         cartona += `<div class="col-md-3" id="kara2">
//                         <div class="meal" id=${b.meals[0].idMeal}>
//                             <img class="w-100" src=${b.meals[0].strMealThumb} alt="" srcset="">
//                             <div class="meal-layer text-dark">
//                                 <h3>${b.meals[0].strMeal}</h3>
//                             </div>
//                         </div>
//                     </div>`;
//     }
//     document.getElementById('rowData').innerHTML = cartona;

//     document.getElementById('rowData').addEventListener('click', function (event) {
//         if (event.target.closest('.meal')) {
//             let o = event.target.closest('.meal').id
//             $('#hide').addClass("d-none");
//             $('.open').css('height', '100%');
//             document.getElementById('de').classList.remove('d-none');
//             dis(o);
//         }
//     });
// }

// meals();
// async function dis(o){
//     let a = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${o}`);
//     let b = a.json();
//     console.log(b)
//     let dat = `<div class="container">
//                    <div class="hstack justify-content-end">
//                       <button class="btn-close btn-close-white mt-5" id="btnClose"></button>
//                     </div>
//                    <div class="row g-4" id="detailsContent">
//                        <div class="col-md-4">
//                           <img src=${b.meals[0].strMealThumb} class="w-100" alt="image details">
//                           <h1 class="text-center h3 py-4">Details Game</h1>
//                         </div>
//                         <div class="col-md-8">
//                             <h3 class="s">Instruction</h3>
//                             <p class="">${b.meals[0].strInstructions}</p>
//                             <p class="d-flex justify-content-start"><span class="fw-bolder s">Area :</span> <span class="badge d-flex justify-content-center align-items-center s-1">${b.meals[0].strArea}</span></p>
//                             <p class="d-flex justify-content-start"><span class="fw-bolder s">Category :</span> <span class="badge d-flex justify-content-center align-items-center s-1">${b.meals[0].strCategory}</span></p>
//                             <p class="d-flex justify-content-start"><span class="fw-bolder s">Recipes :</span> <span class="badge d-flex justify-content-center align-items-center s-1">Live</span></p>
//                             <a class="btn btn-outline-warning" target="_blank">Show Game</a> 
//                             <a class="btn btn-outline-warning" target="_blank">Show Game</a>
//                         </div>         
//                     </div>
//                 </div>`;
//     document.getElementById('de').innerHTML = dat;
// }


// async function meals(){
//     let cartona = ``
//     for(let i = 0; i<20 ; i++){
//         let a = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         let b = await a.json()
//         cartona+=`<div class="col-md-3" id="kara2">
//                     <div class="meal" id=${b.meals[0].idMeal}>
//                         <img class="w-100" src=${b.meals[0].strMealThumb} alt="" srcset="">
//                         <div class="meal-layer text-dark">
//                             <h3>${b.meals[0].strMeal}</h3>
//                         </div>
//                     </div>
//             </div>`
//     }
//     document.getElementById('rowData').innerHTML=cartona
// }
// meals();
// function displaymeals(b){
//     let cartona = ``
//     for(let i = 0; i<20 ; i++){
//         cartona+=`<div class="col-md-3" id="kara2">
//                     <div class="meal" id=${b.meals[0].idMeal}>
//                         <img class="w-100" src=${b.meals[0].strMealThumb} alt="" srcset="">
//                         <div class="meal-layer text-dark">
//                             <h3>${b.meals[0].strMeal}</h3>
//                         </div>
//                     </div>
//             </div>`
//     }
//     document.getElementById('rowData').innerHTML=cartona
// }
// $('.meal').on('click',function(){
//     $('#hide').addClass("d-none")
//     $('.open').css('height','100%');
//     console.log(this);
//     document.getElementById('de').classList.remove('d-none');
//     let dat = ``
//     dat+=`<div class="container">
//            <div class="hstack justify-content-end">
//               <button class="btn-close btn-close-white mt-5" id="btnClose"></button>
//         </div>
//            <div class="row g-4" id="detailsContent">
//      <div class="col-md-4">
//         <img src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" class="w-100" alt="image details">
//         <h1 class="text-center h3 py-4">Details Game</h1>
//         </div>
//     <div class="col-md-8">
//         <h3 class="s">Instruction</h3>
//         <p class="">STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.</p>
//         <p class="d-flex justify-content-start"><span class="fw-bolder s">Area :</span> <span class="badge d-flex justify-content-center align-items-center s-1">Live</span></p>
//         <p class="d-flex justify-content-start"><span class="fw-bolder s">Category :</span> <span class="badge d-flex justify-content-center align-items-center s-1">Live</span></p>
//         <p class="d-flex justify-content-start"><span class="fw-bolder s">Recipes :</span> <span class="badge d-flex justify-content-center align-items-center s-1">Live</span></p>
//         <a class="btn btn-outline-warning" target="_blank">Show Game</a> <a class="btn btn-outline-warning" target="_blank">Show Game</a>
//     </div>         
//     </div>
//         </div>`
//         document.getElementById('de').innerHTML=dat
// })
// $('.closebtn').on('click' , function(){
//     $('#leftMenu').animate({width : "0"} , 300)
//     $('#home-content').animate({marginLeft:"0"},300);
// })

//contact

const nameRegex = /^[a-zA-Z]{1,}$/;
const emailRegex = /^\w{1,}@\w{1,}.[a-zA-Z]{2,}$/;
const phoneRegex = /(^\+?)(\d{3})-?(\d{3})-?(\d{4,6})$/;
const ageRegex = /^([1-9][0-9]?|[0]*([1-9]{1,2}|[1-9][0-9]))$/
const passRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/

let firstTime = {
    'name': false,
    'email': false,
    'phone': false,
    'age': false,
    'pass1': false,
    'pass2': false,
}

function resetForm(){
    $('form input+div').addClass('d-none');
    $('form input').val('');
    $('form button').addClass('disabled');

    firstTime = {
        'name': false,
        'email': false,
        'phone': false,
        'age': false,
        'pass1': false,
        'pass2': false,
    }
}

function initForm(){
    $('form input').keyup(function(e) {
        const id = e.target.id;
        const value = e.target.value;
        getGlobalValidations(id,value);
    })
}

function getNameValidation(value){
    firstTime.name = true;
    return nameRegex.test(value);

}
function getEmailValidation(value){
    firstTime.email = true;
    return emailRegex.test(value);

}
function getAgeValidation(value){
    firstTime.age = true;
    return ageRegex.test(value);

}
function getPhoneValidation(value){
    firstTime.phone = true;
    return phoneRegex.test(value);

}
function getPassValidation(value){
    firstTime.pass1 = true;
    return passRegex.test(value);

}
function getpass2Validation(){
    firstTime.pass2 = true;
    return $('form #pass1').val() === $('form #pass2').val();

}


function getGlobalValidations(id,value){
    let isValid = true;
    let v = false;

    switch (id) {
        case 'name':
            v = getNameValidation(value);
            if (!v) {
                isValid = false;
                $('form #name').next().removeClass('d-none');
            }
            else {
                $('form #name').next().addClass('d-none');
            }
            break;
        case 'email':
            v = getEmailValidation(value);
            if (!v) {
                isValid = false;
                $('form #email').next().removeClass('d-none');
            }
            else {
                $('form #email').next().addClass('d-none');
            }
            break;
        case 'phone':
            v = getPhoneValidation(value);
            if (!v) {
                isValid = false;
                $('form #phone').next().removeClass('d-none');
            }
            else {
                $('form #phone').next().addClass('d-none');
            }
            break;
        case 'age':
            v = getAgeValidation(value);
            if (!v) {
                isValid = false;
                $('form #age').next().removeClass('d-none');
            }
            else {
                $('form #age').next().addClass('d-none');
            }
            break;
        case 'pass1':
            v = getPassValidation(value);
            if (!v) {
                isValid = false;
                $('form #pass1').next().removeClass('d-none');
            }
            else {
                $('form #pass1').next().addClass('d-none');
            }
            break;
        case 'pass2':
            v = getpass2Validation(value);
            if (!v) {
                isValid = false;
                $('form #pass2').next().removeClass('d-none');
            }
            else {
                $('form #pass2').next().addClass('d-none');
            }
            break;
    }

    if (!firstTime['name'] || !firstTime['email'] || !firstTime['phone'] || !firstTime['age'] || !firstTime['pass1'] || !firstTime['pass2'] ){
        return;
    }

    if (isValid){
        $('form button').removeClass('disabled');
    }
    else {
        $('form button').addClass('disabled');
    }
}


resetForm();
initForm();
$('form button').click(function(e) {
    e.preventDefault();
})
$('#contact').on('click',function(){
    document.getElementById('rowData2').innerHTML=""
        let cartona = `<div class="col-md-5">
                            <input type="text" class="form-control" id="name2" placeholder="Enter Your name">
                            <div class="alert alert-danger mt-3 ">
                            <small>Special characters and numbers not allowed</small>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <input type="email" class="form-control" id="email" placeholder="Enter Your Email">
                            <div class="alert alert-danger mt-3 ">
                            <small>Enter valid Email</small>
                            </div>                            
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone">
                            <div class="alert alert-danger mt-3 ">
                            <small>Enter valid Phone Number</small>
                            </div>                            
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="age" placeholder="Enter Your Age">
                            <div class="alert alert-danger mt-3 ">
                            <small>Enter valid age</small>
                            </div>                            
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="pass" placeholder="Enter Your Password">
                            <div class="alert alert-danger mt-3 ">
                            <small>Enter valid password *Minimum eight characters, at least one letter and one number:*</small>
                            </div>                            
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="rePass" placeholder="Repassword">
                            <div class="alert alert-danger mt-3 ">
                            <small>rePass Correctly</small>
                            </div>                            
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <button class="btn btn-danger" id="butn">Submit</button>
                        </div>
                        `
    $('#rowData2').addClass('d-flex justify-content-center align-items-center m-auto')
    document.getElementById('rowData2').innerHTML=cartona
    document.getElementById('rowData').innerHTML=``
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\w{1,}@\w{1,}.[a-zA-Z]{2,}$/;
    const phoneRegex = /(^\+?)(\d{3})-?(\d{3})-?(\d{4,6})$/;
    const ageRegex = /^([1-9][0-9]?|[0]*([1-9]{1,2}|[1-9][0-9]))$/
    const passRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/
    let firstTime = {
        'name': false,
        'email': false,
        'phone': false,
        'age': false,
        'pass1': false,
        'pass2': false,
    }
    function res(){
        firstTime = {
            'name': false,
            'email': false,
            'phone': false,
            'age': false,
            'pass1': false,
            'pass2': false,
        }
        $('input+div').addClass('d-none');
        $('input').val('');
        $('#butn').addClass('disabled');
    }
    function ini(){
        $('input').keyup(function(e) {
            const id = e.target.id;
            const value = e.target.value;
            getGlobalValidations(id,value);
        })
    }
    function getName(e){
        firstTime.name = true;
        return nameRegex.test(e);
    
    }
    function getEmail(e){
        firstTime.email = true;
        return emailRegex.test(e);
    
    }
    function getAge(e){
        firstTime.age = true;
        return ageRegex.test(e);
    
    }
    function getPhone(e){
        firstTime.phone = true;
        return phoneRegex.test(e);
    
    }
    function getPass(e){
        firstTime.pass1 = true;
        return passRegex.test(e);
    
    }
    function getRePass(){
        firstTime.pass2 = true;
        return $('#pass').val() === $('#rePass').val();
    
    }
    function getGlobalValidations(id,value){
        let isValid = true;
        let v = false;
    
        switch (id) {
            case 'name':
                v = getName(value);
                if (!v) {
                    isValid = false;
                    $('#name2').next().removeClass('d-none');
                }
                else {
                    $('#name2').next().addClass('d-none');
                }
                break;
            case 'email':
                v = getEmail(value);
                if (!v) {
                    isValid = false;
                    $('#email').next().removeClass('d-none');
                }
                else {
                    $('#email').next().addClass('d-none');
                }
                break;
            case 'phone':
                v = getPhone(value);
                if (!v) {
                    isValid = false;
                    $('#phone').next().removeClass('d-none');
                }
                else {
                    $('#phone').next().addClass('d-none');
                }
                break;
            case 'age':
                v = getAge(value);
                if (!v) {
                    isValid = false;
                    $('#age').next().removeClass('d-none');
                }
                else {
                    $('#age').next().addClass('d-none');
                }
                break;
            case 'pass1':
                v = getPass(value);
                if (!v) {
                    isValid = false;
                    $('#pass').next().removeClass('d-none');
                }
                else {
                    $('#pass').next().addClass('d-none');
                }
                break;
            case 'pass2':
                v = getRePass(value);
                if (!v) {
                    isValid = false;
                    $('#rePass').next().removeClass('d-none');
                }
                else {
                    $('#rePass').next().addClass('d-none');
                }
                break;
        }
    
        if (!firstTime['name'] || !firstTime['email'] || !firstTime['phone'] || !firstTime['age'] || !firstTime['pass1'] || !firstTime['pass2'] ){
            return;
        }
    
        if (isValid){
        $('#butn').removeClass('disabled');
        }
        else {
        $('#butn').addClass('disabled');
        }
    }
    
    
    res();
    ini();
    $('button').click(function(e) {
        e.preventDefault();
    })
})