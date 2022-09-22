// // import translations from "./translations.js";
let languageSelector = document.querySelector('select');
let translations = {
  en: {
    Home: "Home",
    noteIndex: "#",
    noteName: "note Name",
    Name: "Name",
    Note: "Note",
    AddNote: "Add note",
    English: "English",
    Arabic: "Arabic",
    Options: "Options",
    Edit: "Edit",
    Delete: "Delete",
    deleteAll: "Delete All",
    numberNote: "number of notes",
    footer:'By Hesham Mohamed © 2022',
  },
  ar: {
    Home: "الصفحة الرئيسية",
    noteIndex: "#",
    noteName: "اسم الملاحظة",
    Name: "الاسم",
    Note: "الملاحظة",
    AddNote: "اضافة ملاحظة",
    English: "الانجليزية",
    Arabic: "العربية",
    Edit: "تعديل",
    Delete: "حذف",
    deleteAll: "حذف الكل",
    numberNote: "عدد الملاحظات",
    footer:'بواسطة هشام محمد © 2022',

  },
};

// // export default translations;

languageSelector.addEventListener("change", (e) => {
  setLanguage(e.target.value);
  localStorage.setItem("lang", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  let language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

let setLanguage = (language) => {
  let elements = document.querySelectorAll("[data-tran]");
  elements.forEach((element) => {
    let translationKey = element.getAttribute("data-tran");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
