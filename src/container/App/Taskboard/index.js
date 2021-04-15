import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./style";
import { Box, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSUSE } from "../../../constant";
import TaskList from "../../../components/TaskList";
import TaskForm from "../../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskAction from "../../../actions/task";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
//
// const listTask = [
//   {
//     id: 0,
//     title: "Read book",
//     description: "Read material ui",
//     status: 0,
//   },
//   {
//     id: 1,
//     title: "Play football",
//     description: "Play with my friend",
//     status: 1,
//   },
//   {
//     id: 3,
//     title: "Watch TV",
//     description: "I watched tv on Friday",
//     status: 2,
//   },
// ];
//
class TaskBoard extends React.Component {
  // console.log("props", props);
  state = {
    open: false,
  };
  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSUSE.map((use, index) => {
          const taskFilter = listTask.filter(
            (task) => task.status === use.value
          );
          return <TaskList status={use} task={taskFilter} key={index} />;
        })}
      </Grid>
    );
    return xhtml;
  }

  componentDidMount() {
    const { taskActionCreator } = this.props;
    const { fetchListTaskRequest } = taskActionCreator;
    fetchListTaskRequest();
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  renderForm() {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} close={this.handleClose} />;
    return xhtml;
  }
  render() {
    // const { classes } = this.props;
    return (
      <div className="taskboard">
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
          <AddIcon /> Thêm mới công việc
        </Button>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
//checkproptype
TaskBoard.propTypes = {
  // classes.PropTypes.object,
  taskAction: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
  }),
  listTask: PropTypes.array,
};
//control store
const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
