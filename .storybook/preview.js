import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withPreview, previewTemplate, DEFAULT_VANILLA_CODESANDBOX } from "storybook-addon-preview";

addDecorator(withPreview);
addDecorator(withKnobs);
addDecorator(acton);