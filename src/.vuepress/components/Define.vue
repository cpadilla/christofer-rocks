
<!-- Work in Progress. Credit to Robert Mion for his article on building Google's Dictionary Widget. Doesn't work exactly how I want it but it's a start. Just cobbled together the code and switched out the API to use Oxford Dictionary. Still need to link the response to the data. -->
<!-- https://medium.com/better-programming/start-to-finish-lets-build-google-s-dictionary-widget-f8a0fbef1c0 -->
<template>
  <div class="definition">
    <h1>Dictionary</h1>
    <input type="text" v-model="word" />
    <button @click="lookup">Look-up</button>
    <dl v-if="response">
      <dt>
        <p class="syllables">{{syllables}}</p>
        <p class="pronunciation">{{pronunciation}}</p>
      </dt>
      <dd v-if="nouns.length">
        <p class="part-of-speech">noun</p>
        <ol>
          <li class="definition-group" v-for="noun in nouns">
            <p>{{noun.definition}}</p>
            <p v-for="example in noun.examples">
              <q class="example">{{example}}</q>
            </p>
            <dl>
              <dt class="synonym-heading">synonyms</dt>
              <dd class="synonym" v-for="synonym in noun.synonyms">
                {{synonym}}
              </dd>
            </dl>
          </li>
        </ol>
      </dd>
      <dd v-if="verbs.length">
        <p class="part-of-speech">verb</p>
        <ol>
          <li class="definition-group" v-for="verb in verbs">
            <p>{{verb.definition}}</p>
            <p v-for="example in verb.examples">
              <q class="example">{{example}}</q>
            </p>
            <dl>
              <dt class="synonym-heading">synonyms</dt>
              <dd class="synonym" v-for="synonym in verb.synonyms">
                {{synonym}}
              </dd>
            </dl>
          </li>
        </ol>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      response: null,
      word: ""
    }
  },
  mounted() {
  },
  computed: {
    syllables() {
      return this.response !== null ? this.response.syllables.list.join("•") : [];
    },
    pronunciation() {
      return this.response !== null ? `/${this.response.pronunciation.all}/` : [];
    },
    verbs() {
      return this.response !== null ? this.response.results.filter(result => result.partOfSpeech === "verb") : [];
    },
    nouns() {
      return this.response !== null ? this.response.results.filter(result => result.partOfSpeech === "noun") : [];
    },
  },
  methods: {
    lookup() {
      fetch(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.word}`, {
        headers: {
          "app_id": "260880ca",
          "app_key": "40bb9e623be82ab32415540e2a8f7c3f"
        }
      })
        .then(response => {
          response.json();
          console.log(response);
        })
        .then(body => {
          this.response = body;
          console.log(body);
        })
    },
  }
}
</script>
<style scoped lang='scss'>
.definition {
  min-width: 50vw;
  max-width: 600px;
  margin: 2em auto;
  font-family: sans-serif;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1em;
  
  h1 {
    font-weight: normal;
    font-size: 2em;
    line-height: 1;
    margin-top: 1em;
  }
  
  input, button {
    font-size: 1.5em;
    color: gray;
  }
  
  .syllables {
    font-size: 2em;
    margin: 0;
    line-height: 1;
  }
  
  .pronunciation {
    color: gray;
  }
  
  .synonym-heading {
    font-style: italic;
    
    &::after {
      content: ":"
    }
  }
  
  .synonym {
    &:not(:last-child)::after {
      content: ", ";
    }
  }
  
  .synonym-heading,
  .synonym {
    color: gray;
    margin: 0;
    display: inline;
  }
  
  .part-of-speech {
    font-style: italic;
  }
  
  .definition-group {
    margin-bottom: 1em;
  }
  
  .definition-item {
    margin: 0;
  }
  
  .example {
    color: gray;
  }
}
</style>
