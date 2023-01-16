$(function () {
  //input click, focus했을 때
  const input = $(".contact_form_input");
  const parentDiv = $(".contact_form_box");

  input.click(function () {
    parentDiv.removeClass("focus");
    $(this).parent().addClass("focus");
  });
  input.focus(function () {
    parentDiv.removeClass("focus");
    $(this).parent().addClass("focus");
  });
  input.blur(function () {
    $(this).parent().removeClass("focus");
  });
});

$(function () {
  emailjs.init("user_fQFCEDyqXrsGP6J7RuW3y");
});

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("클릭");
    console.log(this);
    this.contact_number.value = (Math.random() * 100000) | 0;

    if (isChecked()) {
      emailjs.sendForm("hyunjun", "template_crfo2rp", this).then(
        () => {
          alert("빠른시일내에 답장 드리겠습니다. 감사합니다.");
          $("#contact-form").each(function () {
            this.reset();
          });
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    }
  });
};

const isChecked = () => {
  let chk = $("#agree").is(":checked");
  if (!chk) {
    alert("개인정보 처리방침란을 체크해주세요.");
    return false;
  } else {
    console.log("ok");
    return true;
  }
};
