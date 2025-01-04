let box=document.querySelector('#space')
let btn=document.querySelectorAll('#btn')
let selectedcolor='red'
let isEraser=false
btn.forEach((button)=>{
      button.addEventListener('click',(e)=>{
        if(e.target.id==='eraser'){
         isEraser=true
         cursor.style.width = `${eraserSize * 2}px`; // Diameter of the eraser
            cursor.style.height = `${eraserSize * 2}px`;
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        }
        else{
            isEraser=false
          selectedcolor= e.target.id
          cursor.style.width = '20px'; // Reset to default size
            cursor.style.height = '20px';
            cursor.style.backgroundColor = e.target.id;
        }
      })
})
let draw=(e)=>{
    if(isEraser) return
    const dot=document.createElement('div')
    dot.className='dot'
    // dot.id=Math.floor(Math.random()*100)
    dot.style.backgroundColor=selectedcolor
    dot.style.position="absolute"
    dot.style.width="3px"
    dot.style.height="3px"
    dot.style.left=`${e.pageX}px`
    dot.style.top=`${e.pageY}px`
    document.body.appendChild(dot)
}


let isDrawing=false;

box.addEventListener('mousedown',function(e){
    isDrawing=true
    if(!isEraser)
    draw(e);
})

box.addEventListener('mousemove',function(e){
    if(isDrawing&& !isEraser)
        draw(e);
     
})
let body = document.querySelector('body');
let cursor = document.querySelector('#cursor');
let eraserSize=10
body.addEventListener('mousemove', function(e) {
    gsap.to(cursor, {
        x: e.pageX, 
        y: e.pageY, 
        duration: 0.01,
    });
    if (isEraser) {
        const elements = document.querySelectorAll('.dot'); // Select all dots
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();

            // Check if the element is within the eraser area
            if (
                e.pageX >= rect.left - eraserSize &&
                e.pageX <= rect.right + eraserSize &&
                e.pageY >= rect.top - eraserSize &&
                e.pageY <= rect.bottom + eraserSize
            ) {
                element.remove();
            }
        });
    }
    // console.log(e.x,e.y)
});

