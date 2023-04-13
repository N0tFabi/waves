
function animateText(text, callback, delay) {
    const split = text.split('')
    let t = ''
    for (let i = 0; i < split.length; i++) {
        setTimeout(() => {
            t = t + split[i];
            let fin = i + 1 === split.length;
            callback(fin ? t : t + "_", fin)
        }, (i + 1) * delay);
    }
}


