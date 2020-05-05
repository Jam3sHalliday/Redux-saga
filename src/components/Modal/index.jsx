import React, { Component } from 'react';

import styles from './styles';
import { withStyles, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

class CommonModal extends Component {
    render() {
        const { title, classes, open, component, modalActionCreators } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal open = { open } onClose = { hideModal }>
                <div className = { classes.modal }>
                    <div className={ classes.header }>
                        <span className = { classes.title }>
                            { title }
                        </span>

                        <ClearIcon onClick = { hideModal } 
                            className = { classes.icon }
                        />
                    </div>

                    <div className = { classes.content}>
                        { component }
                    </div>
                </div>
            </Modal>
        )
    };
};

CommonModal.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    title: PropTypes.string,
    component: PropTypes.object,

    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    })
};

const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
});

const mapDispatchToProps = dispatch => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch)
});

const withConnect = connect(mapStateToProps,mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(CommonModal);