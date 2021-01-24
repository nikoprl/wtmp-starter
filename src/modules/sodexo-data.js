import LunchMenu from "../assets/sodexo-day-example.json";

let coursesEn = [];
let coursesFi = [];

const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.values(sodexoDailyMenu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};

parseSodexoMenu(LunchMenu.courses);

const SodexoData = {coursesEn, coursesFi};
export default SodexoData;
