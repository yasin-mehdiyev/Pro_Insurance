let inputGroup = document.querySelectorAll('.input-group input');

for (let i = 0; i < inputGroup.length; i++) {
    const element = inputGroup[i].getAttribute('type');
    if (element === 'date') {
        inputGroup[i].previousElementSibling.classList.add('not_show_text');
    }

// Fields Change Event
    inputGroup[i].addEventListener('change',function(ev){
       let value = ev.target.value;
       if(value !== ''){
        inputGroup[i].previousElementSibling.classList.add('not_show_text');
        inputGroup[i].previousElementSibling.classList.add('shown_field_title');
        inputGroup[i].previousElementSibling.classList.add('field_title_color');
       }
       else{
        inputGroup[i].previousElementSibling.classList.remove('not_show_text');
        inputGroup[i].previousElementSibling.classList.remove('shown_field_title');
        inputGroup[i].previousElementSibling.classList.remove('field_title_color');
       }
    });

// Fields Focus Event
    inputGroup[i].addEventListener('focus',function(){
        if(inputGroup[i].previousElementSibling.classList.contains('field_title_color')){
            inputGroup[i].previousElementSibling.classList.remove('field_title_color');
        }
    });

// Fields Blur Event 
    inputGroup[i].addEventListener('blur',function(ev){
        let value = ev.target.value;
        if(value !== ''){
            inputGroup[i].previousElementSibling.classList.add('field_title_color');
        }
    });
};

