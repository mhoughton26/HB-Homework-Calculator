/*someone please edit the values when the data is cleaned and meaned*/
class homework_calculator {
    constructor() {
        /*science classes*/
        this.science_map = new Map();
        this.science_map.set('name', 'Science');
        this.science_map.set('Biology', 21.15);
        this.science_map.set('Chemistry', 24.33);
        this.science_map.set('HonorsChemistry', 35.45);
        this.science_map.set('Physics', 27);
        this.science_map.set('HonorsPhysics', 15.57);
        this.science_map.set('APBiology', 20);
        this.science_map.set('APChemistry', 80);
        this.science_map.set('APPhysicsC', 21.67);
        this.science_map.set('EnvironmentalScience', 70);
        this.science_map.set('OrganicChemistry', 43.33);
        this.science_map.set('HumanBiology', 13.33);
        this.science_map.set('HumanBiologyHonors', 5);
        /*history classes*/
        this.history_map = new Map();
        this.history_map.set('name', 'History');
        this.history_map.set('History1', 33.46);
        this.history_map.set('History2', 37.5);
        this.history_map.set('APWorldHistory', 93.44);
        this.history_map.set('USHistory', 46.88);
        this.history_map.set('APUSHistory', 42.19);
        this.history_map.set('AmericanGovernment', 15);
        this.history_map.set('AmGovHon', 51.25);
        this.history_map.set('EconomicPolicy', 60);
        this.history_map.set('EconHon', 10);
        this.history_map.set('InternationalRelations', 27.5);
        this.history_map.set('IRHon', 20);
        /*French classes*/
        this.french_map = new Map();
        this.french_map.set('name', 'French');
        this.french_map.set('1', 12.5);
        this.french_map.set('2', 15);
        this.french_map.set('3', 20);
        this.french_map.set('3Honors', 10);
        this.french_map.set('4', 17);
        this.french_map.set('LanguageandCulture', 30);
        this.french_map.set('SpeakingCommunities', 30);
        this.french_map.set('CivAndSoc', 30);
        this.french_map.set('AP', 25);
        this.french_map.set('Post-AP', 22.5);
        /* spanish classes*/
        this.spanish_map = new Map();
        this.spanish_map.set('name', 'Spanish');
        this.spanish_map.set('1', 10);
        this.spanish_map.set('2', 20.3);
        this.spanish_map.set('3', 25);
        this.spanish_map.set('3Honors', 29.17);
        this.spanish_map.set('4', 20);
        this.spanish_map.set('LanguageandCulture', 21.11);
        this.spanish_map.set('NorthAmerica', 30);
        this.spanish_map.set('SouthAmerica', 17.5);
        this.spanish_map.set('AP', 27.5);
        this.spanish_map.set('Post-AP', 17.5);
        /*latin classes */
        this.latin_map = new Map();
        this.latin_map.set('name', 'Latin');
        this.latin_map.set('1', 16);
        this.latin_map.set('2', 20);
        this.latin_map.set('3', 0);
        this.latin_map.set('3Honors', 11.25);
        this.latin_map.set('4', 30);
        this.latin_map.set('AdvLit', 10);
        this.latin_map.set('AP', 30);
        /*chinese classes */
        this.chinese_map = new Map();
        this.chinese_map.set('name', 'Chinese');
        this.chinese_map.set('1', 30);
        this.chinese_map.set('2', 45);
        this.chinese_map.set('1/2', 20);
        this.chinese_map.set('3', 30);
        this.chinese_map.set('3Honors', 45);
        this.chinese_map.set('4', 30);
        this.chinese_map.set('4Honors', 52.5);
        this.chinese_map.set('AP', 25);
        this.chinese_map.set('AdvTopics', 30);
        /*english classes*/
        this.english_map = new Map();
        this.english_map.set('name','English');
        this.english_map.set('English1', 34.81);
        this.english_map.set('English2', 30.5);
        this.english_map.set('English2Honors', 42.5);
        this.english_map.set('English3AmericanLiterature', 30);
        this.english_map.set('APEnglishLanguageandComposition', 38.04);
        this.english_map.set('APEnglishLiteratureandComposition', 58.64);
        this.english_map.set('WorldLiterature', 90);
        this.english_map.set('WorldLiterature(Honors)', 30);
        /*math classes*/
        this.math_map = new Map();
        this.math_map.set('name', 'Math');
        this.math_map.set('Algebra1', 20);
        this.math_map.set('Geometry', 50);
        this.math_map.set('GeometryHonors', 35);
        this.math_map.set('Algebra2', 25);
        this.math_map.set('Algebra2Honors', 26.29);
        this.math_map.set('StatisticsandPrecalculus', 18.91);
        this.math_map.set('PrecalculusABHonors', 47.7);
        this.math_map.set('PrecalculusBCHonors', 90);
        this.math_map.set('IntrotoCalculus', 25);
        this.math_map.set('Calculus1', 22.14);
        this.math_map.set('APCalculusAB', 65);
        this.math_map.set('APCalculusBC', 91.67);
        this.math_map.set('APStatistics', 45);
        this.math_map.set('MultivariableCalculusHonors', 95);
        this.math_map.set('LinearAlgebraHonors', 30);
        /*computer science classes*/
        this.cs_map = new Map();
        this.cs_map.set('name','ComputerScience');
        this.cs_map.set('ExploringComputerScience', 22.5);
        this.cs_map.set('ProgrammingInteractiveMedia', 15);
        this.cs_map.set('DataScience', 11.25);
        this.cs_map.set('APComputerSciencePrinciples', 15.83);
        this.cs_map.set('APComputerScienceA', 48.33);
        this.cs_map.set('PostAPComputerScienceHonors', 16.25);
        /*large array containing all maps for the purpose of iteration*/
        this.overlord_array = [this.science_map, this.history_map, this.french_map, this.spanish_map, this.latin_map, this.chinese_map,
                               this.english_map, this.math_map, this.cs_map];
    }

    calculate_total_homework_time(usr_classes) {
        let total_time = 0;
        console.log(usr_classes);
        /*each department in usr_classes*/
        for (let i = 0; i < usr_classes.length; i++) {
            /*each individual course in that department*/
            for (let j = 0; j < usr_classes[i].length; j++) {
                total_time += this.overlord_array[i].get(usr_classes[i][j]);
            }
        }
        return total_time;
    }
}

function readCheckboxes(calculator) {
    /*large usr classes array*/
    var userClasses = new Array();
    /*for each subject*/
    for (let i = 0; i < calculator.overlord_array.length; i++) {
        var miniArray = new Array();
        var checkboxes = document.getElementsByName(calculator.overlord_array[i].get('name'));
        /*add all the values of the checked boxes (course name) to miniArray*/
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                miniArray.push(checkboxes[i].value);
            }
        }
        /*put the miniArray into userClasses & repeat*/
        userClasses.push(miniArray);
    }
    return userClasses
}

function calculate() {
    /*makes calculator & gets all user classes, organized by subject*/
    const calculator = new homework_calculator();
    usr_classes = readCheckboxes(calculator);
    /*calculates total hw time and adds to html*/
    var toDisplay = "Your predicted homework time is ";
    toDisplay += calculator.calculate_total_homework_time(usr_classes);
    toDisplay += ' minutes'
    displaySpace = document.getElementById('result');
    displaySpace.innerHTML = toDisplay;
    displaySpace.scrollIntoView();
}
