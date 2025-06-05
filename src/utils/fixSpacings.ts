export function fixPolishTypography() {
  const spojniki = [
    "z", "i", "a", "o", "u", "w", "na", "do", "po", "za", "od", "przy", "bez", "pod",
    "nad", "przed", "mi", "ci", "go", "jej", "mu", "ich", "się", "nie", "to", "tu", "tam",
    "też", "tylko", "że", "jak", "czy", "ani", "choć", "gdy", "niż", "już", "no", "albo",
    "lub", "lecz", "oraz", "ale", "choćby", "nawet", "przecież", "jednak", "dla",
  ];

  const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

  elements.forEach((element) => {
    let tekst = element.innerHTML;

    spojniki.forEach(spojnik => {
      const regex = new RegExp(`\\s(${spojnik})\\s`, "gi");
      tekst = tekst.replace(regex, ` $1&nbsp;`);
    });

    element.innerHTML = tekst;
  });
}
