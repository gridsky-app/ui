import {setup} from '@storybook/vue3';

import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '../app/styles/index.scss';

import {createI18n} from "vue-i18n";
import messages from 'gridsky-i18n/locales'
import {vuetifyConfig} from "@/config/vuetify";

setup((app) => {
    // vuetify

    const vuetify = createVuetify({
        components,
        directives,
        ...vuetifyConfig,
    })

    app.use(vuetify)

    // localization

    const i18n = createI18n({
        messages,
        legacy: false,
        locale: "en"
    })

    app.use(i18n)
})

const preview = {
    parameters: {},
};

export default preview;