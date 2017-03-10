Vue.component('commit-info', {
  props: ['commit'],
  template: '<section class="build-commit-details"> <h1> {{ commit.message }} </h1> </section>'
});
// 
// `<section class="build-info" id="${build.commitHash}">
//     <section class="build-commit-details">
//       <h1>${build.commitMessage}</h1>
//     </section>
//     <section class="build-stages">
//       ${stageToTemplate(build.pipelines)}
//     </section>
//   </section>
//   `;


const Builds = new Vue({
  el: '#builds',
  data: {
    runs: []
  }
});
