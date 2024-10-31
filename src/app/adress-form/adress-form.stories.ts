import {AdressFormComponent} from "./adress-form.component";
import {Meta, StoryObj} from "@storybook/angular";
import {fn} from "@storybook/test";

const meta: Meta<typeof AdressFormComponent> = {
  title: 'AdressFormComponent',
  component: AdressFormComponent,
  parameters: {
    addressFormValue: fn(),
  },
};

export default meta;

type Story = StoryObj<AdressFormComponent>;

export const Primary: Story = {
  args: {
    addressTitle: 'Default',
  },
};

export const Editing: Story = {
  args: {
    addressTitle: 'Editing',
  },
};
