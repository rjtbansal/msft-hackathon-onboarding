import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import "./cardModal.scss";
import cindy from "../../assets/images/Cindy cropped.jpg";
import chat from "../../assets/images/chat.svg";
import game from "../../assets/images/game.svg";
import thanks from "../../assets/images/thanks.svg";
import gift from "../../assets/images/gift.svg";
import close from "../../assets/images/close.svg";
import circle from "../../assets/images/Offline-Dot.svg";
import chatBubble from "../../assets/images/Chat bubble (3).png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {

  const [togglePoints, setTogglePoints] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("in clooooooooose")
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        <img src={chatBubble} alt="chatBubble"></img>
      </button> */}
      <button type="button" className="speech-button--down" onClick={handleOpen}>
        <div className="speech-bubble--down">
          <div id="wave">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {togglePoints ? (
            <div className="modal">
              <div className="modal__top">
                <button className="modal__close" onClick={handleClose}>
                  <img src={close} alt="close" ></img>
                </button>
              </div>
              <div className="points">
                <h3>Invite Sent</h3>
                <h1>+20 Points</h1>
              </div>
            </div>
          ) : (
            <div className="modal">
              <div className="modal__top">
                <button className="modal__close" onClick={() => handleClose()}>
                  <img src={close} alt="close"></img>
                </button>
              </div>
              <div className="card">
                <div className="card__profile">
                  <img
                    className="card__image"
                    src={cindy}
                    alt="profile pic"
                  ></img>
                  <h2 className="card__heading">Cindy Thompson</h2>
                  <h5 className="card__job">Graphic Designer - Design Dep.</h5>
                  <p className="card__status">
                    <span>
                      <img src={circle} alt="circle"></img>
                    </span>
                    Offline
                  </p>
                  <button className="card__profile-button">
                    <p>View Profile</p>
                  </button>
                </div>
                <div className="card__content">
                  <h3 className="card__content--heading">
                    What would you like to do
                  </h3>
                  <div className="button">
                    <button className="button__logo" onClick={() => {
                      props.increasePoints()
                      setTogglePoints(true)
                      setTimeout(()=>{
                          setTogglePoints(false)
                      },5000)
                    }}>
                      <img src={chat} alt="button logo"></img>
                    </button>
                    <button className="button__logo">
                      <img src={game} alt="button logo"></img>
                    </button>
                    <button className="button__logo">
                      <img src={thanks} alt="button logo"></img>
                    </button>
                    <button className="button__logo">
                      <img src={gift} alt="button logo"></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
