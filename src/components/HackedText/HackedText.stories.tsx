
import React from 'react'
import { ReactNode } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HackedText } from './HackedText'

const argTypes = {
    children: {
        type: { name: 'string', required: true },
        defaultValue: 'Hello world',
        description: 'Text value',
        control: {
            type: 'text'
        }
    },
    iterationDuration: {
        type: { name: 'number', required: false },
        defaultValue: 30,
        description: 'Duration of a letter swap in milliseconds',
        control: {
            type: 'number'
        }
    }
}

export default {
    title: 'HackedText',
    component: HackedText,
    argTypes,
} as ComponentMeta<typeof HackedText>



const Template: ComponentStory<typeof HackedText> = (args) => <HackedText {...args} >{args.children}</HackedText>

export const Default = Template.bind({})
