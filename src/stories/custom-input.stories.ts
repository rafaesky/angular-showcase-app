import { Meta, StoryFn } from '@storybook/angular';
import { CustomInputComponent } from '../app/shared/base-components/custom-input/custom-input.component';

export default {
    title: 'Custom Input',  // Título que aparecerá no Storybook
    component: CustomInputComponent,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        type: { control: 'text' },
        disabled: { control: 'boolean' },
        value: { control: 'text' },
    }
} as Meta;

const Template: StoryFn<CustomInputComponent> = (args: CustomInputComponent) => ({
    component: CustomInputComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
    disabled: false,
    value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    disabled: true,
    value: '',
};

export const WithValue = Template.bind({});
WithValue.args = {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    type: 'tel',
    disabled: false,
    value: '123-456-7890',
};
