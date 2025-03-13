export const validateName = (name) => {
    const nameValidate = /^[A-Za-zА-Яа-яЁё\s]+$/;
    return nameValidate.test(name);
};

export const handlePhone = (phone) => {
    let digits = phone.replace(/\D/g, "").replace(/^8/, "7");

    if (!digits.startsWith("7")) digits = "7" + digits;
    digits = digits.slice(0, 11);

    let formattedPhone = digits.replace(
      /(\d{1})(\d{3})?(\d{3})?(\d{2})?(\d{2})?/,
      (_, p1, p2, p3, p4, p5) =>
        `+${p1}${p2 ? ` ${p2}` : ""}${p3 ? ` ${p3}` : ""}${p4 ? `-${p4}` : ""}${
          p5 ? `-${p5}` : ""
        }`
    );

    return formattedPhone;
};

export const validateAgreement = (isChecked) => {
    return isChecked;
};