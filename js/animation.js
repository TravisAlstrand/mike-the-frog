

let blink_count = 0
let open_count = 0
export function handle_mike_blink(mike_img){
    if (mike_img.src.includes('blink')){
        const random_blink_wait = Math.floor(Math.random())
        if (blink_count > random_blink_wait){
            mike_img.src="images/mike-mouth-closed.png"
            open_count = 0;
        } else {
            blink_count += 1;
        }
    } else {
        const random_open_wait = Math.floor(Math.random() * 500)
        if (open_count > random_open_wait){
            //change to blink
            mike_img.src = "images/mike-blink.png";
            blink_count = 0
        } else {
            open_count += 1;
        }
    }

}

let mouth_count = 0
export function handle_mike_mouth_change(mike_img){
    const random_mouth_wait = Math.floor(Math.random() * 2)
    if (mouth_count > random_mouth_wait){
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
