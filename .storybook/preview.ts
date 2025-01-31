import { setup } from '@storybook/vue3';

import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '../app/styles/index.scss';

setup((app) => {
    const vuetify = createVuetify({
        components,
        directives,
    })

    app.use(vuetify)
})

const preview = {
    parameters: {},
};

export default preview;