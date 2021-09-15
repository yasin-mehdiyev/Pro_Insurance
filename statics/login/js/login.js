let formSubmitBtn = document.querySelector('#submitHandler');
let inputVal = document.querySelector('.custom_label input');
let modal = document.querySelector('.modal');

formSubmitBtn.addEventListener('click',function(ev){
    ev.preventDefault();

    if(inputVal.value !== '') {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully completed", {
                icon: "success",
              });

              inputVal.value = '';
            }
          });
    };
});