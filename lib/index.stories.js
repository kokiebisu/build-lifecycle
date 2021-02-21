import React from 'react'
import { RandomComponent } from './RandomComponent'

export default {
  title: 'Component'
}

const TemplateStory = (args) => <RandomComponent {...args} />

export const Random = TemplateStory.bind({})
Random.args = {}
