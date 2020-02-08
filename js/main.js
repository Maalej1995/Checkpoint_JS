function BoldText() {
    var txt = document.getElementById('TextArea1');
    if (txt.style.fontWeight != 'bold') {
        txt.style.fontWeight = 'bold';
    } else {
        txt.style.fontWeight = 'normal';
    }
}

function ItalicText() {
    var txt = document.getElementById('TextArea1');
    if (txt.style.fontStyle != 'italic') {
        txt.style.fontStyle = 'italic';
    } else {
        txt.style.fontStyle = 'normal';
    }
}

function UnderlineText() {
    var txt = document.getElementById('TextArea1');
    if (txt.style.textDecoration != 'underline') {
        txt.style.textDecoration = 'underline';
    } else {
        txt.style.textDecoration = 'none';
    }
}

function TextSize() {
    var txt = document.getElementById('TextArea1');
    if (document.getElementById('20').selected == true) {
        txt.style.fontSize = "20px";
    } else if (document.getElementById('30').selected == true) {
        txt.style.fontSize = "30px";
    } else if (document.getElementById('40').selected == true) {
        txt.style.fontSize = "40px";
    }
}

function TextFont() {
    var txt = document.getElementById('TextArea1');
    if (document.getElementById('Ari').selected == true) {
        txt.style.fontFamily = "arial";
    } else if (document.getElementById('Cal').selected == true) {
        txt.style.fontFamily = "calibri";
    } else if (document.getElementById('Tim').selected == true) {
        txt.style.fontFamily = "timesnewroman";
    }
}