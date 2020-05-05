import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';

import * as taskActions from '../../actions/tasks'
import * as modalActions from '../../actions/modal'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBox from '../../components/SearchBox';

class TaskBoard extends Component {

    state = {
        open: false
    };

    componentDidMount() {
        const { taskActionCreator } = this.props;
        const { fetchListTask } = taskActionCreator;
        fetchListTask();
    };

    renderBoard = () => {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing = { 2 }>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList key = { status.value }
                                tasks = { taskFiltered } 
                                status = { status }
                            />
                        );
                    })
                }
            </Grid>
        );
        return xhtml;
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    openForm = () => {
        const { modalActionCreators } = this.props;
        const { showModal, changeModalContent, changeModalTitle }  = modalActionCreators;

        showModal();
        changeModalTitle('add new work');
        changeModalContent(<TaskForm />);
    };

    renderForm = () => {
        const { open } = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open = { open } 
                onClose = { this.handleClose }
            />
        );

        return xhtml;
    };

    loadData = () => {
        const { taskActionCreator } = this.props;
        const { fetchListTask } = taskActionCreator;
        fetchListTask();
    };

    handleFilter = e => {
        const { value } = e.target;
        const { taskActionCreator } = this.props;
        const { filterTask } = taskActionCreator;
        filterTask(value);
    };

    renderSearchBox = () => {
        let html = null;

        html = (
            <SearchBox handleChange = { this.handleFilter } />
        );

        return html;
    };

    render() {
        const { classes } = this.props;
        return (
            <div className= { classes.taskboard }>
                <Button className = { classes.button } 
                    variant = "contained" color= "primary"
                    onClick = { this.openForm }
                >
                    <AddIcon /> Add New Work
                </Button>

                <Button className = { classes.button } 
                    variant = "contained" color= "primary"
                    onClick = { this.loadData }
                >
                    <AddIcon /> Load Data
                </Button>
                { this.renderSearchBox() }
                { this.renderBoard() }
                { this.renderForm() }
            </div>
        );
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object,

    taskActionCreator: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
    }),

    modalActionCreator: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,
    }),

    listTask: PropTypes.array
}

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask
    }
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreator: bindActionCreators(taskActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch),
    }
}

export default withStyles( styles )(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));