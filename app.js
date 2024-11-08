// const updateFlag =(element)=>{
//     let currCode =element.value;
//     let countryCode =countryList[currCode];
//     let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`
//     let img= element.parentElement.querySelector("img");
//     img.src =newSrc;
// }
<script>
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If you need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
</script>