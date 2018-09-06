/* 임시 페이지 */
import React from 'react';
import { connect } from 'react-redux';
import { putProfile } from '../actions/auth';
interface IOauthSignupProps {
  userId: string;
  updateProfile: (userId: string, name: string) => void;
}
interface IOauthSignupState {
  readonly name: string;
}
class OauthSignup extends React.Component<
  IOauthSignupProps,
  IOauthSignupState
> {
  state = {
    name: '',
  };
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
    // tslint:disable-next-line:semicolon
  };
  handleUpdate = () => {
    const { name } = this.state;
    const { userId, updateProfile } = this.props;
    updateProfile(userId, name);
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>THThinkers에 오신걸 환영합니다.</h1>
        <input
          onChange={this.onInputChange}
          placeholder="THThinkers에서 사용할 이름"
          value={name}
        />
        <button onClick={this.handleUpdate}>등록</button>
      </div>
    );
  }
}

export default connect(
  null,
  {
    updateProfile: putProfile,
  },
)(OauthSignup);
