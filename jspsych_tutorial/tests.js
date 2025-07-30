    // Initialise experiment (var - global, const - local)
    var jsPsych = initJsPsych({
      on_finish: function() {
      jsPsych.data.displayData();
      }
    });

    // Timeline
    var timeline = [];
    // Participant ID
    participant_ID = jsPsych.randomization.randomID(10)
    
    // Preload
    var preload = {
      type: jsPsychPreload,
      images: ['img/blue.png', 'img/orange.png']
    };

    // Welcome
    const welcome = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'Welcome to the experiment. Press any key to begin.'
    };

    // Experiment instructions
    const instructions = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>In this experiment, a circle will appear in the center of the screen.</p>
        <p>If the circle is <strong>blue</strong>, press the letter F on the keyboard as fast as you can.</p>
        <p>If the circle is <strong>orange</strong>, press the letter J as fast as you can.</p>
        <div style='width: 700px;'>
          <div style='float: left;'>
            <img src='img/blue.png'></img>
            <p class='small'><strong>Press the F key</strong></p>
          </div>
          <div style='float: right;'>
            <img src='img/orange.png'></img>
            <p class='small'><strong>Press the J key</strong></p>
          </div>
        </div>
        <p>Press any key to begin.</p>
      `,
      post_trial_gap: 2000 // 2 second gap
      };

    // Array of different trials to run
    var test_stimuli = [
      { stimulus: "img/blue.png",  correct_response: 'f'},
      { stimulus: "img/orange.png",  correct_response: 'j'}
    ];

    // Fixation x-cross between trials
    var fixation = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<div style="font-size:60px;">+</div>',
      choices: "NO_KEYS",
      trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
      },
      data: {
        task: 'fixation'
      }
    };

    // Substitue value of parameter stimulus from test_stimuli
    var test = {
      type: jsPsychImageKeyboardResponse,
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['f', 'j'],
      data: {
        task: 'response',
        correct_response: jsPsych.timelineVariable('correct_response')
      },
      // Check if participant responded correctly
      on_finish: function(data){
        data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
      }
    };

    // Link test_stimuli to test parameter
    var test_procedure = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli,
      randomize_order: true,
      repetitions: 5
    };

    // Calculate mean response time and return result
    var debrief_block = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {

        var trials = jsPsych.data.get().filter({task: 'response'}); // all responses
        var correct_trials = trials.filter({correct: true}); // correct trials
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100); // accuracy = correct/all * 100
        var rt = Math.round(correct_trials.select('rt').mean()); // mean response time of correct trials

        return `<p>You responded correctly on ${accuracy}% of the trials.</p>
                <p>Your average response time was ${rt}ms.</p>
                <p>Press any key to complete the experiment. Thank you!</p>`;

        }
    };