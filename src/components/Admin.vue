<template>
  <div class="admin">
    <h1>Electrical Quiz Admin Console</h1>
    <button v-if="!addingNewQuestion" @click="newQuestion">Add New Question</button>
    <div class="questions">
      <div class="question" v-for="question in questions" :key="question._id">
        <div class="editing" v-if="editing && question._id === editing._id">
          <h5 class="mar-b-0 mar-t-0">Tags</h5>
          <input 
            class="tag--editing" 
            type="text"
            v-for="(tag, index) in editing.tags" 
            :key="index + 'blah'" 
            v-model="editing.tags[index]">
          <button class="add-tag" @click="editing.tags.push('')">+</button>
          <h5 class="mar-b-0">Question</h5>
          <textarea class="question--editing" type="text" rows="4" v-model="editing.question"></textarea>
          <h5 class="mar-b-0">Answers</h5>
          <div class="answer--editing" v-for="answer in editing.answers" :key="answer.id">
            <input type="radio" name="answer" :value="answer.id" v-model="editing.correct">
            <input type="text" v-model="answer.answer"><br>
            <textarea type="text" rows="4" v-model="answer.comment"></textarea>
          </div>
          <button @click="saveQuestion">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
        <div v-else>
          <span class="tag" v-for="tag in question.tags" :key="tag">{{tag}}</span>
          <p>{{question.question}}</p>
          <ol>
            <li v-for="answer in question.answers" :key="answer.id">
              <p>
                <span class="answer">{{answer.answer}}</span><br>
                <span class="comment" :class="answer.id === question.correct ? 'correct' : 'incorrect'">{{answer.comment}}</span>
              </p>
            </li>
          </ol>
          <button @click="editQuestion(question)">Edit Question</button>
          <button class="delete" @click="deleteQuestion(question)">Delete Question</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiInstance from "../http.js";
import _cloneDeep from "lodash.clonedeep";

export default {
  name: 'admin',
  data() {
    return {
      questions: [],
      editing: null,
      addingNewQuestion: false
    }
  },
  methods: {
    cancelEdit() {
      if (this.editing.hasOwnProperty('_id')) {
        this.editing = null;
      } else {
        // the question being edited is a new question
        this.questions.splice(0, 1);
        this.editing = null;
        this.addingNewQuestion = false;
      }
    },
    newQuestion() {
      this.addingNewQuestion = true;
      
      this.questions.unshift({
        tags: [""],
        question: "",
        correct: null,
        answers: [{
            id:0,
            answer:"",
            comment:""
          },
          {
            id:1,
            answer:"",
            comment:""
          },
          {
            id:2,
            answer:"",
            comment:""
          },
          {
            id:3,
            answer:"",
            comment:""
          }
        ]
      });

      this.editQuestion(this.questions[0]);
    },
    editQuestion(question) {
      this.editing = _cloneDeep(question)
    },
    saveQuestion() {
      
    },
    deleteQuestion(deletedQuestion) {
      if (window.confirm("Sure you want to delete the question?")) {
        apiInstance.delete(`/questions/${deletedQuestion._id}`)
          .then(response => {
            if (response.status === 200) {
              this.questions = this.questions.filter(question => question._id !== deletedQuestion._id);
            }
          })
      }
    }
  },
  mounted() {
    apiInstance.get('/questions').then(response => this.questions = response.data);
  }
}
</script>

<style>

h1 {
  text-align: center;
}

ol {
  padding-left: 20px;
}

button {
  font-size: 0.8em;
  padding: 4px 8px;
  margin-right: 1em;
  background-color: #ffffff;
  color: #111111;
  border: solid 1px #999999;
  border-radius: 4px;
}

button:hover {
  background-color: #eeeeee;
}

button.delete {
  color: #f52020;
  border-color: #f52020;
}

button.add-tag {
  padding: 1px 4px;
}

.admin .questions {
  text-align: left;
}

.admin .question {
  margin-top: 3em;
  position: relative;
}

.tag {
  background-color: rgb(218, 213, 204);
  padding: 0.1em 0.5em;
  margin: 0.5em 0.5em 0 0;
  border-radius: 0.5em;
  font-size: 0.85em;
  line-height: 1.8;
}

.admin .comment.correct {
  color: #3eaa2e;
}

.admin .comment.incorrect {
  color: #f52020;
}

.editing {
  background-color: #ddd;
  border-radius: 5px;
  padding: 1.5em;
}

.tag--editing {
  width: 70px;
  margin-right: 10px;
}

.question--editing {
  width: 99%;
}

.answer--editing {
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-row-gap: 5px;
  margin-bottom: 20px;
}

</style>
