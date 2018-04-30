import { shallow } from '@vue/test-utils'
import Question from '@/components/Question.vue'

describe('Question.vue', () => {
  it('renders props.data.question when passed', () => {
    const data = {
      question: 'Is this thing on?'
    }
    const wrapper = shallow(Question, {
      propsData: { data }
    })
    expect(wrapper.text()).toMatch(data.question)
  })

  // it('renders props.data.question when passed', () => {
  //   const data = {
  //     question: 'Is this thing on?'
  //   }
  //   const wrapper = shallow(Question, {
  //     propsData: { data }
  //   })
  //   expect(wrapper.text()).toMatch(data.question)
  // })
})
