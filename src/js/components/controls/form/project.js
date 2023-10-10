import Control from '../control'

class ProjectControl extends Control {
  constructor() {
    const projectInput = {
      tag: 'project',
      attrs: {
        className: '',
      },
      config: {
        label: 'Project',
      },
      meta: {
        group: 'common',
        icon: 'calendar',
        id: 'projects',
      },
    }
    super(projectInput)
  }
}

export default ProjectControl