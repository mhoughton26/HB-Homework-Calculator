/*someone please edit the values when the data is cleaned and meaned*/
class homework_calculator {
    constructor() {
        /*science classes*/
        this.science_map = new Map();
        this.science_map.set('name', 'Science');
        this.science_map.set('Biology', 30);
        this.science_map.set('Chemistry', 30);
        this.science_map.set('HonorsChemistry', 30);
        this.science_map.set('Physics', 30);
        this.science_map.set('HonorsPhysics', 30);
        this.science_map.set('APBiology', 30);
        this.science_map.set('APChemistry', 30);
        this.science_map.set('APPhysicsC', 30);
        this.science_map.set('EnvironmentalScience', 30);
        this.science_map.set('OrganicChemistry', 30);
        this.science_map.set('HumanBiology', 30);
        /*history classes*/
        this.history_map = new Map();
        this.history_map.set('name', 'History');
        this.history_map.set('History1', 30);
        this.history_map.set('History2', 30);
        this.history_map.set('APWorldHistory', 30);
        this.history_map.set('USHistory', 30);
        this.history_map.set('APUSHistory', 30);
        this.history_map.set('AmericanGovernment', 30);
        this.history_map.set('EconomicPolicy', 30);
        this.history_map.set('InternationalRelations', 30);
        /*French classes*/
        this.french_map = new Map();
        this.french_map.set('name', 'French');
        this.french_map.set('1', 30);
        this.french_map.set('2', 30);
        this.french_map.set('3', 30);
        this.french_map.set('3Honors', 30);
        this.french_map.set('4', 30);
        this.french_map.set('LanguageandCulture', 30);
        this.french_map.set('SpeakingCommunities', 30);
        this.french_map.set('CivAndSoc', 30);
        this.french_map.set('AP', 30);
        this.french_map.set('Post-AP', 30);
        /* spanish classes*/
        this.spanish_map = new Map();
        this.spanish_map.set('name', 'Spanish');
        this.spanish_map.set('1', 30);
        this.spanish_map.set('2', 30);
        this.spanish_map.set('3', 30);
        this.spanish_map.set('3Honors', 30);
        this.spanish_map.set('4', 30);
        this.spanish_map.set('LanguageandCulture', 30);
        this.spanish_map.set('NorthAmerica', 30);
        this.spanish_map.set('SouthAmerica', 30);
        this.spanish_map.set('AP', 30);
        this.spanish_map.set('Post-AP', 30);
        /*latin classes */
        this.latin_map = new Map();
        this.latin_map.set('name', 'Latin');
        this.latin_map.set('1', 30);
        this.latin_map.set('2', 30);
        this.latin_map.set('3', 30);
        this.latin_map.set('3Honors', 30);
        this.latin_map.set('4', 30);
        this.latin_map.set('AdvLit', 30);
        this.latin_map.set('AP', 30);
        /*chinese classes */
        this.chinese_map = new Map();
        this.chinese_map.set('name', 'Chinese');
        this.chinese_map.set('1', 30);
        this.chinese_map.set('2', 30);
        this.chinese_map.set('1/2', 30);
        this.chinese_map.set('3', 30);
        this.chinese_map.set('3Honors', 30);
        this.chinese_map.set('4', 30);
        this.chinese_map.set('4Honors', 30);
        this.chinese_map.set('AP', 30);
        this.chinese_map.set('AdvTopics', 30);
        /*english classes*/
        this.english_map = new Map();
        this.english_map.set('name','English');
        this.english_map.set('English1', 30);
        this.english_map.set('English2', 30);
        this.english_map.set('English2Honors', 30);
        this.english_map.set('English3AmericanLiterature', 30);
        this.english_map.set('APEnglishLanguageandComposition', 30);
        this.english_map.set('APEnglishLiteratureandComposition', 30);
        this.english_map.set('WorldLiterature', 30);
        this.english_map.set('WorldLiterature(Honors)', 30);
        /*math classes*/
        this.math_map = new Map();
        this.math_map.set('name', 'Math');
        this.math_map.set('Algebra1', 30);
        this.math_map.set('Geometry', 30);
        this.math_map.set('GeometryHonors', 30);
        this.math_map.set('Algebra2', 30);
        this.math_map.set('Algebra2Honors', 30);
        this.math_map.set('StatisticsandPrecalculus', 30);
        this.math_map.set('PrecalculusABHonors', 30);
        this.math_map.set('PrecalculusBCHonors', 30);
        this.math_map.set('IntrotoCalculus', 30);
        this.math_map.set('Calculus1', 30);
        this.math_map.set('APCalculusAB', 30);
        this.math_map.set('APCalculusBC', 30);
        this.math_map.set('APStatistics', 30);
        this.math_map.set('MultivariableCalculusHonors', 30);
        this.math_map.set('LinearAlgebraHonors', 30);
        /*computer science classes*/
        this.cs_map = new Map();
        this.cs_map.set('name','ComputerScience');
        this.cs_map.set('ExploringComputerScience', 30);
        this.cs_map.set('ProgrammingInteractiveMedia', 30);
        this.cs_map.set('DataScience', 30);
        this.cs_map.set('APComputerSciencePrinciples', 30);
        this.cs_map.set('APComputerScienceA', 30);
        this.cs_map.set('PostAPComputerScienceHonors', 30);
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
