import { Meta, StoryFn } from '@storybook/angular'; // Corrigido: StoryFn ao invés de Story
import { CustomButtonComponent } from '../app/shared/base-components/custom-button/custom-button.component';

export default {
    title: 'Custom Button',  // Título que aparecerá no Storybook
    component: CustomButtonComponent,
    argTypes: {
        color: { control: 'text' },
        label: { control: 'text' },
        disabled: { control: 'boolean' }
    }
} as Meta;

const Template: StoryFn<CustomButtonComponent> = (args: CustomButtonComponent) => ({
    component: CustomButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    label: 'Click Me',
    disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'accent',
    label: 'Submit',
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: 'warn',
    label: 'Disabled',
    disabled: true
};
