import i18n from 'mi18n'
import Control from '../control'

class Project extends Control {
  constructor() {
    const buttonConfig = {
      tag: 'project',
      attrs: {
        className: [{ label: 'grouped', value: 'f-btn-group' }, { label: 'ungrouped', value: 'f-field-group' }],
      },
      config: {
        label: i18n.get('controls.form.button'),
        hideLabel: true,
      },
      meta: {
        group: 'common',
        icon: 'button',
        id: 'project-button',
      },
      options: [
        {
          label: i18n.get('button'),
          type: ['button', 'submit', 'reset'].map((buttonType, index) => ({
            label: buttonType,
            type: buttonType,
          })),
          className: [
            {
              label: 'default',
              value: '',
              selected: true,
            },
            {
              label: 'primary',
              value: 'primary',
            },
            {
              label: 'danger',
              value: 'error',
            },
            {
              label: 'success',
              value: 'success',
            },
            {
              label: 'warning',
              value: 'warning',
            },
          ],
        },
      ],
    }
    super(buttonConfig)
  }
}

export default Project