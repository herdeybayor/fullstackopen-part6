import { connect } from "react-redux";

const Notification = ({ notification }) => {
    const style = {
        display: notification ? "block" : "none",
        border: "solid",
        padding: 10,
        borderWidth: 1,
    };

    return <div style={style}>{notification}</div>;
};

const mapStateToProps = ({ notification }) => {
    return {
        notification,
    };
};

export default connect(mapStateToProps)(Notification);
