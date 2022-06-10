function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("year").value);
    var yearChecked = currentYear - birthYear;

    if (yearChecked > 18)
    {
        alert('tudo bem');
        window.location.href = "https://www.canva.com/tools/logo-maker-q1/?clickId=RtVXJcXwQxyIT8XWCJ2Te0DhUkDxZvyfbT5NV80&utm_medium=affiliate&utm_source=MaxBounty.com%20ULC_10813&irgwc=1";
    }
    else {
        alert('Você não possui 18 anos');
    }
}

 
