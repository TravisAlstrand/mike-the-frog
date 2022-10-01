

function mike_blinking(){

}

let mouth_count = 0
export function handle_mike_mouth_change(mike_img){
    const random_wait = Math.floor(Math.random() * 2)
    if (mouth_count > random_wait){
        if (mike_img.src.includes("open")){
            //change to closed
            mike_img.src = "images/mike-mouth-closed.png";
        } else {
            mike_img.src = "images/mike-mouth-open.png";
        }
        mouth_count = 0
    } else {
        mouth_count += 1;
    }


}
