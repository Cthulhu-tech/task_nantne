const mobileNavSection = document.querySelector('.mobile_navigation')

document.querySelector('.mobile_navigation_toggle')
.addEventListener('click', () => 
{

  mobileNavSection.classList.toggle('close')

  document.querySelector('.mobile_navigation_toggle')
  .classList.toggle('close_navigation')

  document.querySelectorAll('.mobile_navigation_burger_line')
  .forEach((element) => {
    element.classList.toggle('open')
  })
})

document.querySelector('.video')
.addEventListener('click', 
() =>{

  document.querySelector('.popup').classList.toggle('close_popup');

})

document.querySelector('.sub_close_button_popup')
.addEventListener('click', 
() =>{

  document.querySelector('.popup').classList.toggle('close_popup');

})



this.addEventListener('load', () => {
  load();
})

function load () {

  const allComentaries = document.querySelectorAll('.commentaries_commentaries_image');

  allComentaries.forEach((element) => {

    element.addEventListener('click', 
    (event) => {

      clickCommentaries(event, allComentaries);

    })

  })

}

function clickCommentaries (event, allComentaries) {
  const comment = "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit."
  const arrayName = ["SEMF UCUK", "DIK ADALIN", "JANE GALADRIEL" ,"JENG KOL", "PET ROMAK"];
  const arrayWork = ["SEO & FOUNDER", "ENGINER" , "CEO TENGKUREP" , "DESIGNER" , "MARKETING"]
  const arrayCommented = ["1", "2", comment , "4", "5"]


  const name = document.querySelector('.commentaries_name');
  const work = document.querySelector('.commentaries_work');
  const commentaries = document.querySelector('.commentaries');


  let index = event.target.dataset.index - 1;
  name.textContent = arrayName[index];
  work.textContent = arrayWork[index];
  commentaries.textContent = arrayCommented[index];


  allComentaries.forEach((element) => {
    if(element.classList.contains("active")){
      element.classList.remove('active');
    }
  })
  event.target.classList.add("active");

}

console.log("work!")