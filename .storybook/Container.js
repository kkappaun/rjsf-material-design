import { withTheme } from 'material-ui/styles'
import ignoreTheme from 'utils/ignoreTheme'
import { propColor } from 'utils/color'

export default withTheme()(ignoreTheme('div')`
  padding: 32px;
  background-color: ${propColor('A700')};
`)
