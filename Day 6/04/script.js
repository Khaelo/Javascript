'use strict';

var Today = Date();

$('#navbarDropdownMenuLink').click(() => {
    $('#navbarDropdownMenu').slideToggle();
})

$('span#js-current-year').text(Today);

$('#js-bmi-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const keywordweight = $('#js-bmi-weight').val();
    const keywordheight = $('#js-bmi-height').val();
    if (isNaN(keywordweight) && isNaN(keywordheight)){}
    else {
        const BMI = keywordweight / ((keywordheight / 100) * (keywordheight / 100));
        if (BMI < 18.5) {
            $('p#js-bmi-result').text('Your Body Mass Index is ' + BMI + ' considered underweight.');
        }
        if (BMI >= 18.5 && BMI < 25) {
            $('p#js-bmi-result').text('Your Body Mass Index is ' + BMI + ' a healthy weight.');
        }
        if (BMI >= 25) {
            $('p#js-bmi-result').text('Your Body Mass Index is ' + BMI +' considered overweight.');
        }
    }
});

const bmiFacts = [
    {
        title: 'Future weight of children can be anticipated by BMI',
        description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
        img: 'http://lorempixel.com/200/200/cats'
    },
    {
        title: 'Losing BMI weight lowers the risk of diabetes',
        description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
        img: 'http://lorempixel.com/200/200/sports'
    },
    {
        title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
        description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
        img: 'http://lorempixel.com/200/200/fashion'
    },
    {
        title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
        description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
        img: 'http://lorempixel.com/200/200/food'
    },
];

bmiFacts.forEach((el, index) => {
    var newDiv = document.createElement("div");
    newDiv.className = 'col col-12 col-sm-6 col-lg-3 mb-3';
    newDiv.innerHTML = `
        <div class="card h-100">
            <img src="${el.img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
             <p class="card-text">${el.description}</p>
        </div>
     </div>`;
    $('#js-facts').append(newDiv)
});

$('#js-ad-close')[0].addEventListener('click', () => {
    window.open("https://cat-bounce.com/", '_blank');
});