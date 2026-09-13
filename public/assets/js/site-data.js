const site = {
  companyName: "RM BAU GmbH",
  phoneDisplay: "01520 1111111",
  phoneHref: "+4915201111111",
  email: "test@example.de"
};

document.querySelectorAll('[data-site="company-name"]').forEach((element) => {
  element.textContent = site.companyName;
});

document.querySelectorAll('[data-site="phone"]').forEach((element) => {
  element.textContent = site.phoneDisplay;
});

document.querySelectorAll('[data-site-phone-link]').forEach((element) => {
  element.href = `tel:${site.phoneHref}`;
});

document.querySelectorAll('[data-site="email"]').forEach((element) => {
  element.textContent = site.email;
});

document.querySelectorAll('[data-site-email-link]').forEach((element) => {
  element.href = `mailto:${site.email}`;
});

document.querySelectorAll('[data-site="year"]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});