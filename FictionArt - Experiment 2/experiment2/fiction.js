var stimuli_list =  [{"Item":"11122.jpg","Style":"Abstract and Avant-garde","Width":1920,"Height":974},{"Item":"11126.jpg","Style":"Abstract and Avant-garde","Width":920,"Height":1200},{"Item":"11127.jpg","Style":"Abstract and Avant-garde","Width":778,"Height":1200},{"Item":"50815.jpg","Style":"Abstract and Avant-garde","Width":856,"Height":1200},{"Item":"50908.jpg","Style":"Abstract and Avant-garde","Width":1030,"Height":1200},{"Item":"50937.jpg","Style":"Abstract and Avant-garde","Width":1210,"Height":1200},{"Item":"50940.jpg","Style":"Abstract and Avant-garde","Width":1043,"Height":1200},{"Item":"51003.jpg","Style":"Abstract and Avant-garde","Width":897,"Height":1200},{"Item":"51204.jpg","Style":"Abstract and Avant-garde","Width":1570,"Height":1200},{"Item":"51208.jpg","Style":"Abstract and Avant-garde","Width":994,"Height":1200},{"Item":"51218.jpg","Style":"Abstract and Avant-garde","Width":1512,"Height":1200},{"Item":"51219.jpg","Style":"Abstract and Avant-garde","Width":950,"Height":1200},{"Item":"51322.jpg","Style":"Abstract and Avant-garde","Width":1196,"Height":1200},{"Item":"51323.jpg","Style":"Abstract and Avant-garde","Width":894,"Height":1200},{"Item":"51326.jpg","Style":"Abstract and Avant-garde","Width":1600,"Height":1200},{"Item":"51328.jpg","Style":"Abstract and Avant-garde","Width":957,"Height":1200},{"Item":"10124.jpg","Style":"Classical","Width":1070,"Height":1200},{"Item":"10130.jpg","Style":"Classical","Width":1608,"Height":1200},{"Item":"10223.jpg","Style":"Classical","Width":1586,"Height":1200},{"Item":"10224.jpg","Style":"Classical","Width":1204,"Height":1200},{"Item":"10226.jpg","Style":"Classical","Width":1540,"Height":1200},{"Item":"10229.jpg","Style":"Classical","Width":1611,"Height":1200},{"Item":"20107.jpg","Style":"Classical","Width":916,"Height":1200},{"Item":"20127.jpg","Style":"Classical","Width":934,"Height":1200},{"Item":"20203.jpg","Style":"Classical","Width":948,"Height":1200},{"Item":"30201.jpg","Style":"Classical","Width":1920,"Height":1132},{"Item":"30211.jpg","Style":"Classical","Width":1765,"Height":1200},{"Item":"30215.jpg","Style":"Classical","Width":1456,"Height":1200},{"Item":"40207.jpg","Style":"Classical","Width":1920,"Height":1147},{"Item":"40215.jpg","Style":"Classical","Width":1488,"Height":1200},{"Item":"40224.jpg","Style":"Classical","Width":1820,"Height":1200},{"Item":"40229.jpg","Style":"Classical","Width":955,"Height":1200},{"Item":"10514.jpg","Style":"Impressionist and Expressionist","Width":934,"Height":1200},{"Item":"10601.jpg","Style":"Impressionist and Expressionist","Width":989,"Height":1200},{"Item":"10609.jpg","Style":"Impressionist and Expressionist","Width":992,"Height":1200},{"Item":"10624.jpg","Style":"Impressionist and Expressionist","Width":1500,"Height":1200},{"Item":"10632.jpg","Style":"Impressionist and Expressionist","Width":968,"Height":1200},{"Item":"10634.jpg","Style":"Impressionist and Expressionist","Width":1878,"Height":1200},{"Item":"10648.jpg","Style":"Impressionist and Expressionist","Width":1920,"Height":1089},{"Item":"10709.jpg","Style":"Impressionist and Expressionist","Width":1293,"Height":1200},{"Item":"20501.jpg","Style":"Impressionist and Expressionist","Width":956,"Height":1200},{"Item":"20608.jpg","Style":"Impressionist and Expressionist","Width":994,"Height":1200},{"Item":"20714.jpg","Style":"Impressionist and Expressionist","Width":865,"Height":1200},{"Item":"20718.jpg","Style":"Impressionist and Expressionist","Width":900,"Height":1200},{"Item":"30620.jpg","Style":"Impressionist and Expressionist","Width":1728,"Height":1200},{"Item":"30622.jpg","Style":"Impressionist and Expressionist","Width":1330,"Height":1200},{"Item":"40710.jpg","Style":"Impressionist and Expressionist","Width":1087,"Height":1200},{"Item":"40716.jpg","Style":"Impressionist and Expressionist","Width":1567,"Height":1200},{"Item":"10319.jpg","Style":"Romantic and Realism","Width":653,"Height":1200},{"Item":"11014.jpg","Style":"Romantic and Realism","Width":1412,"Height":1200},{"Item":"11016.jpg","Style":"Romantic and Realism","Width":803,"Height":1200},{"Item":"11026.jpg","Style":"Romantic and Realism","Width":1850,"Height":1200},{"Item":"21019.jpg","Style":"Romantic and Realism","Width":983,"Height":1200},{"Item":"21022.jpg","Style":"Romantic and Realism","Width":1210,"Height":1200},{"Item":"30403.jpg","Style":"Romantic and Realism","Width":1692,"Height":1200},{"Item":"30407.jpg","Style":"Romantic and Realism","Width":958,"Height":1200},{"Item":"30408.jpg","Style":"Romantic and Realism","Width":1486,"Height":1200},{"Item":"30410.jpg","Style":"Romantic and Realism","Width":1796,"Height":1200},{"Item":"31006.jpg","Style":"Romantic and Realism","Width":1620,"Height":1200},{"Item":"31016.jpg","Style":"Romantic and Realism","Width":1712,"Height":1200},{"Item":"40303.jpg","Style":"Romantic and Realism","Width":853,"Height":1200},{"Item":"40309.jpg","Style":"Romantic and Realism","Width":1690,"Height":1200},{"Item":"41004.jpg","Style":"Romantic and Realism","Width":1239,"Height":1200},{"Item":"41026.jpg","Style":"Romantic and Realism","Width":946,"Height":1200}]

var fiction_preloadstims_exp2 = {
    type: jsPsychPreload,
    images: stimuli_list.map((a) => "./../experiment/stimuli/stimuli/" + a.Item),
    message: "Please wait while the experiment is being loaded (it can take a few minutes)"
};

// To be able to reuse function for above, have to export in org function - import { shuffleArray as _shuffleArray } from "./../experiment/fiction.js";

// Condition assignment ========================================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

var color_cues = shuffleArray(["red", "blue", "green"])

color_cues = {
    AI: color_cues[0],
    Human: color_cues[1],
    Forgery: color_cues[2],
}

// Screens =====================================================================
const fiction_instructions1_exp2 = {
    type: jsPsychSurvey,
    data: { screen: "fiction_instructions1_exp2" },
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Let's start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Instructions",
                        html: `
  <h1>Instructions</h1>
  <h3>What you will see</h3>
  <div style="text-align: left;">
    <p>This study stems from a multi-disciplinary collaboration involving neuroscientists and artists from the University of Sussex. 
    Our aim is to understand how we visually explore and retain artworks.</p>

    <p>In the next part, you will be presented with 2 types of images. Images from the last experiment round which were categorised under the 3 following types and some new images you have not seen:</p>

    <div style="display: flex; align-items: center; margin-bottom: 20px;">
      <div style="flex: 1;">
        <p><b><li><b style="color: ${color_cues["Human"]}">Original</b> paintings</b>:<br>
          Images of original paintings taken from public artwork databases.</p>
      </div>
      <div style="flex: 1; text-align: center;">
        <img src="./../experiment/media/example_original.png" alt="Original painting" style="width:100%; max-width: 200px;">
        <p style ='font-size: 80%; color: gray'>Starry Night by Vincent van Gogh (1889)</p>
      </div>
    </div>

    <div style="display: flex; align-items: center; margin-bottom: 20px;">
      <div style="flex: 1;">
        <p><li><b style="color: ${color_cues["AI"]}">AI-Generated</b>:<br>
          Realistic painting images generated using platforms like <i>Midjourney</i> and <i>Stable Diffusion</i>, either in a new style or inspired by existing artists or artworks.</p>
      </div>
      <div style="flex: 1; text-align: center;">
        <img src="./../experiment/media/example_AI.jpg" alt="AI-Generated painting" style="width:100%; max-width: 240px;">
        <p style ='font-size: 80%; color: gray'>Paris in the style of Van Gogh, generated by Midjourney</p>
      </div>
    </div>

    <div style="display: flex; align-items: center;">
      <div style="flex: 1;">
        <p><li><b style="color: ${color_cues["Forgery"]}">Human Forgery</b>:<br>
          Copies of famous paintings or works mimicking a style, often by anonymous forgers, intended to be sold as originals.</p>
      </div>
      <div style="flex: 1; text-align: center;">
        <img src="./../experiment/media/example_forgery.jpg" alt="Forgery painting" style="width:100%; max-width: 240px;">
        <p style ='font-size: 80%; color: gray'>Portrait of a forger: John Myatt has been described as committing the biggest art fraud of the 20th century by faking over 200 different artists.</p>
      </div>
    </div>
  </div>

  <h3>What you need to do</h3>
  <p>Each image will be briefly presented on the screen. After each image, you will be asked if you <b>recognise the artwork</b> and if you then <b> remember the category it was labelled under</b>. </p>

`,
                    },
                ],
            },
        ],
    },
}

var fiction_fixation_exp2_1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<div style='font-size:500%; position:fixed; text-align: center; top:50%; bottom:50%; right:20%; left:20%'>+</div>",
    choices: ["s"],
    trial_duration: 500,
    save_trial_parameters: { trial_duration: true },
    data: {
        screen: "fiction_fixation_exp2_1a",
    },
}

var fiction_exp2_showimage1 = {
    type: jsPsychImageKeyboardResponse,
    stimulus: function () {
        return "./../experiment/stimuli/stimuli/" + jsPsych.evaluateTimelineVariable("Item")
    },
    stimulus_width: function () {
        let ratio = jsPsych.evaluateTimelineVariable("Width") / jsPsych.evaluateTimelineVariable("Height")
        return Math.round(Math.min(0.9 * window.innerHeight * ratio, 0.9 * window.innerWidth))
    },

    stimulus_height: function () {
        let ratio = jsPsych.evaluateTimelineVariable("Width") / jsPsych.evaluateTimelineVariable("Height")
        return Math.round(Math.min((0.9 * window.innerWidth) / ratio, 0.9 * window.innerHeight))
    },
    trial_duration: 5000,
    choices: ["s"],
    save_trial_parameters: { trial_duration: true },
    data: function () {
        return {
            screen: "fiction_exp2_image1",
            item: jsPsych.evaluateTimelineVariable("Item"),
            window_width: window.innerWidth,
            window_height: window.innerHeight,
            trial_number: fiction_trialnumber,
        }
    },
    on_finish: function () {
        fiction_trialnumber += 1
    },
    extensions: [
        {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#jspsych-image-keyboard-response-stimulus"] },
        },
    ],
}

var fiction_ratings1_exp2 = {
    type: jsPsychSurvey,
    survey_json: {
        goNextPageAutomatic: true,
        showQuestionNumbers: false,
        showNavigationButtons: false,
        title: function () {
            return "Rating - " + Math.round(((fiction_trialnumber - 1) / stimuli.length) * 100) + "%"
        },
        description: "Do you recognise the artwork?",
        pages: [
            {
                elements: [
                    {
                      type: "radiogroup",
                      name: "Familiarity",
                      title: "I feel with the artwork, I am . . .",
                      isRequired: true,
                      choices: ["Unfamiliar", "Familiar with the style", "Familiar with the artist", "I recognise this specific artwork"],
                    },
                    {
                      type: "slider",
                      name: "Familarity Scale",
                      title: "This artwork is...",
                      isRequired: true,
                      min: -5,
                      max: 5,
                      step: 1,
                      customLabels: [
                          {
                              value: -5,
                              text: "Unfamiliar",
                          },
                          {
                              value: 5,
                              text: "Familiar",
                          },
                      ],
                    },
                    {
                      type: "radiogroup",
                      name: "Recognition",
                      title: "Do you recognise this artwork from the last experiment?",
                      isRequired: true,
                      choices: ["Yes", "No"],
                  },
                    {
                      type: "radiogroup",
                      name: "Category",
                      title: "This artwork was in the category...",
                      isRequired: true,
                      choices: ["AI-Generated", "Original", "Human Forgery"],
                      visibleIf: "{Recognition} = 'Yes'",
                    },
                ],
            },
        ],
    },
    data: {
        screen: "fiction_exp2_ratings1",
    },
}

// Phase 1a and 1b 
function fiction_phase_exp2(start, end) {
  return {
    timeline_variables: stimuli.slice(start, end),
    timeline: [fiction_fixation_exp2_1, fiction_exp2_showimage1, fiction_ratings1_exp2],
  };
} 
var midpoint = Math.ceil(stimuli.length / 2); // Avoid duplicity of stimuli during phase 1a and 1b