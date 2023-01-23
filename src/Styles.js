import styled from 'styled-components';

export const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  font-family: 'roboto condensed', sans-serif;
  font-size: 150%;
  color: #fff;
  img {
    width: 400px;
  }
  .login-form {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .header {
      text-align: center;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 300px;
      height: 50px;
      font-size: 24px;
      color: #fff;
      border: 1px solid;
      border-radius: 25px;
      background: transparent;
      cursor: pointer;
      &:hover {
        background: #fff2;
      }
    }
  }
`;
export const NavbarStyles = styled.nav`
  position: fixed;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
  backdrop-filter: blur(5px);
  z-index: 4;
  .user {
    display: flex;
    h2 {
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
  .account {
    font-size: 150%;
    position: relative;
    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
export const LogOutStyles = styled.div`
  position: absolute;
  right: 0;
  bottom: -30px;
  width: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #e2e0e014;
  border-radius: 5px;
  border: 1px solid #fff3;
  transition: all 0.2s ease;
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  &.open {
    opacity: 1;
    transform: none;
    pointer-events: initial;
  }
  .option {
    cursor: pointer;
  }
`;
export const SpecialNoteStyles = styled.div`
  position: relative;
  margin: 20px;
  margin-top: 80px;
  border-radius: 15px;
  background: #1b56d0;
  color: #fff;
  font-family: Rubik, sans-serif;
  font-weight: 300;
  .special-note {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px;
    border-radius: 15px;
    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(50%, 50%);
      height: 200px;
      width: 200px;
      border-radius: 50%;
      background: #fff7;
      box-shadow: 0px 0px 16px 0px;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background: #fff7;
      box-shadow: 0px 0px 16px 0px;
    }
  }
  .special-note-header {
    font-size: 24px;
    margin-bottom: 1rem;
  }
  .special-note-buttons {
    position: absolute;
    right: 20px;
    top: 20px;
    button {
      margin: 5px;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
export const DropdownStyles = styled.div`
  position: absolute;
  right: 0;
  bottom: -80px;
  width: 160px;
  display: flex;
  flex-direction: column;
  text-align: end;
  background: #e2e0e014;
  backdrop-filter: blur(5px);
  border-radius: 5px;
  border: 1px solid #fff3;
  transition: all 0.2s ease;
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  &.open {
    opacity: 1;
    transform: none;
    pointer-events: initial;
  }
  .option {
    font-size: 20px;
    padding: 5px 10px;
    &.first {
      border-bottom: 1px solid #fff4;
    }
    &:hover {
      background: #fff2;
    }
  }
`;
export const AddButtonStyles = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  height: 50px;
  width: 50px;
  background: #1b56d0;
  color: #fff;
  font-size: 2rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 10px 15px #000;
  transition: 0.2s ease;
  cursor: pointer;
  z-index: 6;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 11px 15px #000;
  }
  &.open {
    box-shadow: none;
    transform: rotate(135deg);
    background: transparent;
  }
`;
export const AddFormStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: #000a;
  backdrop-filter: blur(5px);
  z-index: 5;
  clip-path: circle(25px at calc(100vw - 50px) calc(100vh - 50px));
  transition: clip-path 0.5s linear;
  color: #fff;
  font-family: rubik, sans-serif;
  &.open {
    clip-path: circle(1000px at calc(100vw - 50px) calc(100vh - 50px));
  }
  form {
    width: 100%;
  }
  .adding-text {
    width: 100%;
    padding: 5px 10px;
    background: transparent;
    color: #fff;
    border: 1px solid #fff2;
    border-radius: 7px;
    outline: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    &:focus {
      border-color: #fff5;
    }
    &.task {
      height: 200px;
      width: 100%;
      resize: none;
      font-family: Rubik, sans-serif;
      font-size: 1rem;
    }
    &::placeholder {
      opacity: 0.5;
      color: #fff;
      font-weight: 300;
    }
  }
  .add-task-time-section {
    // padding: 5px;
    margin: 1rem 0;
    input {
      color: #fff;
    }
  }

  .add-task-button {
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
  }
`;
export const NotesStyles = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #0008;
  border-radius: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    color: #fff;
    font-family: Rubik;
    user-select: none;
    .sort {
      font-size: 28px;
      display: flex;
      cursor: pointer;
      position: relative;
      z-index: 3;
    }
  }
  .note-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
    border-radius: 15px;
    .context-menu {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      overflow: hidden;
      button {
        height: 100%;
        width: calc(100% / 3);
        font-size: 2rem;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
    .active,
    .note-postpone,
    button.done {
      background: #d08600;
    }
    .done,
    .note-toggler {
      background: #0a8627;
    }
    .alert,
    .note-delete {
      background: #a80a0a;
    }
  }
`;
export const NoteStyles = styled.div`
  width: 100%;
  padding: 10px;
  color: #fff;
  background: #141725;
  position: relative;
  font-family: 'Roboto condensed', sans-serif;
  transition: transform 0.3s ease;
  z-index: 2;
  &.open {
    transform: translateX(-200px);
  }
  .note-status {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40px;
    display: grid;
    place-items: center;
    font-size: 150%;
  }
  .note-body {
    margin-left: 40px;
    /*font-family: rubik,sans-serif;*/
  }
  .note-header {
    font-size: 20px;
  }
  .note-content {
    font-weight: 300;
    color: #fffd;
  }
  .date-deadline {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-left: 40px;
    color: #fff8;
    font-size: 75%;
    user-select: none;
  }
`;
export const PopupStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  height: 530px;
  width: 400px;
  z-index: 6;
  background: #fff;
  overflow: hidden;
`;
