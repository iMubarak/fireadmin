import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { required } from 'utils/form'

import classes from './NewProjectDialog.scss'

export const NewProjectDialog = ({
  open,
  onRequestClose,
  createProject,
  handleSubmit
}) => (
  <Dialog
    title="New Project"
    open={open}
    onRequestClose={onRequestClose}
    contentClassName={classes.container}
    actions={[
      <FlatButton label="Cancel" secondary onTouchTap={onRequestClose} />,
      <FlatButton label="Create" primary onTouchTap={createProject} />
    ]}>
    <form onSubmit={handleSubmit} className={classes.inputs}>
      <Field
        name="name"
        component={TextField}
        floatingLabelText="Project Name"
        validate={[required]}
      />
    </form>
  </Dialog>
)

NewProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired, // added by redux-form
  onSubmit: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  submit: PropTypes.func.isRequired // eslint-disable-line react/no-unused-prop-types
}

export default NewProjectDialog