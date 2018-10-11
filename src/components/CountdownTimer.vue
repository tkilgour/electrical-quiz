<template>
  <div>{{ timeRemaining | formatTime }}</div>
</template>

<script>
export default {
  name: "CountdownTimer",
  props: {
    timerLength: {
      type: Number,
      default: 600
    },
    handleTimerEnd: {
      type: Function,
      required: true
    }
  },
  methods: {
    calculateTimeRemaining() {
      this.timeRemaining = this.endTime - Date.now();
      if (this.timeRemaining < 0) {
        clearInterval(this.interval)
        this.handleTimerEnd();
      };
    }
  },
  computed: {
    endTime() {
      return this.startTime + (this.timerLength * 1000);
    }
  },
  filters: {
    formatTime: function(ms) {
      const addLeadingZeros = number => {
        return (new Array(3).join('0')+number).slice(-2)
      }
      
      const totalSeconds = Math.round(ms / 1000)
      const hrs = Math.floor(totalSeconds / 3600) 
      const min = addLeadingZeros(Math.floor((totalSeconds - (hrs * 3600)) / 60))
      const sec = addLeadingZeros(totalSeconds % 60);

      return hrs ? `${hrs}:${min}:${sec}`: `${min}:${sec}`;
    }
  },
  data() {
    return {
      startTime: 0,
      timeRemaining: null,
      interval: null
    }
  },
  mounted() {
    this.startTime = Date.now();
    this.calculateTimeRemaining();
    this.interval = setInterval(this.calculateTimeRemaining, 1000);
  }
}
</script>
